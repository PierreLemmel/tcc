const TemoignagesAdminPage = () => {

    if (!process.env.NEXT_PUBLIC_ALLOW_ADMIN) {
        return <div>Disponible uniquement pour les administrateurs</div>;
    }

    return <div>TemoignagesAdminPage</div>;
}

export default TemoignagesAdminPage;