import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Types for bucket file operations
export interface BucketFile {
  name: string;
  size: string;
  contentType: string;
  timeCreated: string;
  updated: string;
  downloadURL: string;
}

export interface BucketFileListResponse {
  message: string;
  folder: string;
  count: number;
  files: BucketFile[];
}

/**
 * List files from a specific folder in the Firebase Storage bucket
 * @param folder - The folder path to list files from (empty string for root)
 * @returns Promise with file list response
 */
export async function listBucketFiles(folder: string = ''): Promise<BucketFileListResponse> {
  const params = new URLSearchParams();
  if (folder) {
    params.append('folder', folder);
  }
  
  const response = await fetch(`/api/audio?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error(`Failed to list files: ${response.statusText}`);
  }
  
  return response.json();
}