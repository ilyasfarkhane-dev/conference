
interface priceing_data_type {
    id: number;
    best_value: boolean;
    title: string;
    info: string;
    price: number;
    save?: number;
    price_features: (JSX.Element | undefined)[];
}

const priceing_data:priceing_data_type[] = [
    {
        id: 1,
        best_value: false,
        title: "Présentiel",
        info: "More power for complex sites and heavy traffic.",
        price: 150, 
        price_features: [
            <>Certificat de participation</>,
            <>Matériel de conférence</>,
            <>Accès aux expositions</>,
            <>Déjeuner et pauses thé/café</>,
            <>Documents de la conférence</>,
            <>Bloc-notes | Stylo</>,
            <>Badge| Dépliant | Programme</>,


        ]
    },
    {
        id: 2,
        best_value: true,
        title: "Présentiel",
        info: "More power for complex sites and heavy traffic.",
        price: 250,
        save: 62,
        price_features: [
            <>Certificat de Communication</>,
            <>Certificat de participation</>,
            <>Matériel de conférence</>,
            <>Accès aux expositions</>,
            <>Déjeuner et pauses thé/café</>,
            <>Documents de la conférence</>,
            <>Cartable| Rapport des actes</>,
            <>Bloc-notes | Stylo</>,
            <>Badge| Dépliant | Programme</>,
        ]
    },
    {
        id: 3,
        best_value: false,
        title: "A distance",
        info: "More power for complex sites and heavy traffic.",
        price: 150,
        save: 62,
        price_features: [
            <>Certificat de Communication</>,
            <>Certificat de participation</>,
            <>Documents de la conférence</>,
        ]
    },
]
export default priceing_data