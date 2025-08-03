"use client";

import { cn } from "@/lib/utils";
import { AudioLines, Mic, MicOff, Play, Square, Upload, X } from "lucide-react";
import Button from "./button";
import { useState, useRef, useEffect, useCallback } from "react";

const TemoignageComponent = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [fftData, setFftData] = useState<number[]>([]);
    const [recordingTime, setRecordingTime] = useState(0);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startRecording = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Set up audio context for FFT
            audioContextRef.current = new AudioContext();
            analyserRef.current = audioContextRef.current.createAnalyser();
            analyserRef.current.fftSize = 256;
            sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
            sourceRef.current.connect(analyserRef.current);

            // Set up media recorder
            mediaRecorderRef.current = new MediaRecorder(stream);
            const chunks: Blob[] = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/wav' });
                setAudioBlob(blob);
                setAudioUrl(URL.createObjectURL(blob));
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            setRecordingTime(0);

            // Start timer
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);

            // Start FFT animation
            updateFFT();
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
            
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, [isRecording]);

    const updateFFT = useCallback(() => {
        if (!analyserRef.current) return;

        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        
        const normalizedData = Array.from(dataArray).map(value => value / 255);
        setFftData(normalizedData);

        animationFrameRef.current = requestAnimationFrame(updateFFT);
    }, []);

    const playRecording = useCallback(() => {
        if (!audioUrl) return;

        if (!audioRef.current) {
            audioRef.current = new Audio(audioUrl);
        }

        audioRef.current.play();
        setIsPlaying(true);

        audioRef.current.onended = () => {
            setIsPlaying(false);
        };
    }, [audioUrl]);

    const stopPlaying = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
    }, []);

    const handleUpload = useCallback(async () => {
        if (!audioBlob) return;

        try {
            const file = new File([audioBlob], `temoignage_${Date.now()}.wav`, {
                type: 'audio/wav'
            });

            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/audio/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                // Reset state after successful upload
                setAudioBlob(null);
                setAudioUrl(null);
                setRecordingTime(0);
                if (audioUrl) {
                    URL.revokeObjectURL(audioUrl);
                }
                alert('Témoignage uploadé avec succès!');
            } else {
                alert('Erreur lors de l\'upload: ' + result.error);
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('Erreur lors de l\'upload');
        }
    }, [audioBlob, audioUrl]);

    const handleCancel = useCallback(() => {
        setAudioBlob(null);
        setAudioUrl(null);
        setRecordingTime(0);
        stopPlaying();
        if (audioUrl) {
            audioRef.current = null;
            URL.revokeObjectURL(audioUrl);
        }
    }, [audioUrl]);

    useEffect(() => {
        return () => {
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [audioUrl]);

    return (
        <div className={cn(
            "h-full w-full",
            "flex flex-col items-center justify-center gap-6",
            "p-8"
        )}>
            


            <div className="flex gap-4 items-center">
                
                {!audioBlob ? (
                    <Button
                        onClick={isRecording ? stopRecording : startRecording}
                    >
                        {isRecording ? (
                            <>
                                <Square className="w-5 h-5" />
                                Arrêter
                            </>
                        ) : (
                            <>
                                <Mic className="w-5 h-5" />
                                Enregistrer
                            </>
                        )}
                    </Button>
                ) : (
                    <div className="flex gap-4">
                        <Button
                            onClick={isPlaying ? stopPlaying : playRecording}
                            variant="outline"
                        >
                            {isPlaying ? (
                                <>
                                    <Square className="w-5 h-5" />
                                    Arrêter
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5" />
                                    Écouter
                                </>
                            )}
                        </Button>

                        <Button onClick={handleUpload}>
                            <Upload className="w-5 h-5" />
                            Envoyer
                        </Button>

                        <Button onClick={handleCancel} variant="outline">
                            <X className="w-5 h-5" />
                            Annuler
                        </Button>
                    </div>
                )}

                {isRecording && <FftVisualization fftData={fftData} recordingTime={recordingTime} />}
            </div>
        </div>
    );
};


const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

type FftVisualizationProps = {  
    fftData: number[];
    recordingTime: number;
}

const FftVisualization = (props: FftVisualizationProps) => {

    const {
        fftData,
        recordingTime
    } = props;

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | null>(null);

    const drawCircularVisualizer = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { width, height } = canvas;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.min(width, height) / 2 - 20;
        

        ctx.clearRect(0, 0, width, height);
        
        if (fftData.length === 0) return;

        const averageAmplitude = fftData.reduce((sum, value) => sum + value, 0) / fftData.length;
        const normalizedAmplitude = Math.min(1, averageAmplitude * 3);

        const amplitudeRadius = maxRadius * 0.3 + (maxRadius * normalizedAmplitude);
        

        const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, amplitudeRadius
        );
        gradient.addColorStop(0, '#EF4444');
        gradient.addColorStop(0.7, '#DC2626');
        gradient.addColorStop(1, 'rgba(220, 38, 38, 0.3)');


        ctx.beginPath();
        ctx.arc(centerX, centerY, amplitudeRadius, 0, 2 * Math.PI);
        ctx.fillStyle = gradient;
        ctx.fill();


        ctx.beginPath();
        ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#EF4444';
        ctx.fill();


        const pulseRadius = 6 + Math.sin(Date.now() * 0.01) * 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, pulseRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();

    }, [fftData]);

    useEffect(() => {
        drawCircularVisualizer();
        animationFrameRef.current = requestAnimationFrame(drawCircularVisualizer);
        
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [drawCircularVisualizer]);

    useEffect(() => {
        drawCircularVisualizer();
    }, [fftData, drawCircularVisualizer]);

    return (
        <>
            <canvas
                ref={canvasRef}
                width={200}
                height={200}
                className="size-24"
            />
            <div className="text-white/80 text-sm w-full text-center">{formatTime(recordingTime)}</div>
        </>
    );
}

export default TemoignageComponent;