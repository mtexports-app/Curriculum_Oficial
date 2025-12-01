'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

type Content = {
    nav: {
        home: string;
        story: string;
        projects: string;
        videos: string;
        contact: string;
        donate: string;
    };
    hero: {
        role: string;
        title_prefix: string;
        title_gradient: string;
        description: string;
        view_work: string;
        contact_me: string;
        featured_label: string;
        featured_desc: string;
        visit_platform: string;
    };
    story: {
        title: string;
        subtitle: string;
        items: {
            year: string;
            title: string;
            subtitle: string;
            description: string;
        }[];
    };
    projects: {
        title: string;
        subtitle: string;
        swipe: string;
        visit: string;
        code: string;
    };
    contact: {
        title: string;
        subtitle: string;
        desc: string;
        whatsapp: string;
        email: string;
        location: string;
    };
    donate_page: {
        hero_title: string;
        hero_subtitle: string;
        hero_desc: string;
        options_title: string;
        options_desc: string;
        coffee_title: string;
        coffee_desc: string;
        server_title: string;
        server_desc: string;
        feature_title: string;
        feature_desc: string;
        custom_title: string;
        custom_desc: string;
        donate_btn: string;
    };
};

const content: Record<Language, Content> = {
    en: {
        nav: {
            home: 'Home',
            story: 'My Story',
            projects: 'Projects',
            videos: 'Videos',
            contact: 'Contact',
            donate: 'Donate',
        },
        hero: {
            role: 'Full Stack Developer & AI Enthusiast',
            title_prefix: 'Building the',
            title_gradient: 'Future of Web',
            description: 'I craft ultra-premium, high-performance digital experiences. Passionate about coding, continuous learning, and integrating AI into modern web applications.',
            view_work: 'View Work',
            contact_me: 'Contact Me',
            featured_label: 'Featured Masterpiece',
            featured_desc: 'My most ambitious project to date. An innovative e-commerce platform for El Salvador, powered by cutting-edge technology and AI integration.',
            visit_platform: 'Visit Platform',
        },
        story: {
            title: 'My Story',
            subtitle: 'A journey from translation to code, driven by curiosity and a passion for building things.',
            items: [
                {
                    year: '2023 - Present',
                    title: 'Full Stack Developer',
                    subtitle: 'Freelance & Personal Projects',
                    description: 'Developing high-end web applications using Next.js, React, and AI technologies. Focused on creating premium user experiences.',
                },
                {
                    year: '2018 - 2022',
                    title: 'University Student',
                    subtitle: 'Universidad Evangélica de El Salvador',
                    description: 'Bachelor in Translation and Interpretation in English. Discovered passion for programming and started self-learning.',
                },
                {
                    year: '2020 - 2022',
                    title: 'Customer Service',
                    subtitle: 'Teleperformance',
                    description: 'Worked in a fast-paced environment, honing communication and problem-solving skills.',
                },
                {
                    year: '2019',
                    title: 'Kodigo Academy',
                    subtitle: 'Full Stack Training',
                    description: 'Intensive training in front-end and back-end technologies, laying the foundation for my dev career.',
                },
            ],
        },
        projects: {
            title: 'Selected Works',
            subtitle: 'Swipe to explore',
            swipe: 'Swipe to explore',
            visit: 'Visit',
            code: 'Code',
        },
        contact: {
            title: "Let's work together.",
            subtitle: 'together.',
            desc: "I'm always open to discussing product design work or partnership opportunities.",
            whatsapp: 'Chat on WhatsApp',
            email: 'Email',
            location: 'Location',
        },
        donate_page: {
            hero_title: 'Support Innovation in',
            hero_subtitle: 'El Salvador',
            hero_desc: 'Your contribution directly supports the development of mtexports.app and my journey as a developer. Help me build the future of e-commerce in the region.',
            options_title: 'Choose your Impact',
            options_desc: 'Every donation helps sustain servers, develop new AI features, and keep the platform running.',
            coffee_title: 'Buy me a Coffee',
            coffee_desc: 'Fuel for late-night coding sessions.',
            server_title: 'Server Support',
            server_desc: 'Cover infrastructure costs.',
            feature_title: 'Feature Boost',
            feature_desc: 'Sponsor a new AI feature.',
            custom_title: 'Custom Amount',
            custom_desc: 'Your choice, your impact.',
            donate_btn: 'Donate',
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            story: 'Mi Historia',
            projects: 'Proyectos',
            videos: 'Videos',
            contact: 'Contacto',
            donate: 'Donar',
        },
        hero: {
            role: 'Desarrollador Full Stack y Entusiasta de IA',
            title_prefix: 'Construyendo el',
            title_gradient: 'Futuro de la Web',
            description: 'Creo experiencias digitales ultra-premium y de alto rendimiento. Apasionado por el código, el aprendizaje continuo y la integración de IA en aplicaciones web modernas.',
            view_work: 'Ver Trabajo',
            contact_me: 'Contáctame',
            featured_label: 'Obra Maestra Destacada',
            featured_desc: 'Mi proyecto más ambicioso hasta la fecha. Una plataforma de comercio electrónico innovadora para El Salvador, impulsada por tecnología de punta e integración de IA.',
            visit_platform: 'Visitar Plataforma',
        },
        story: {
            title: 'Mi Historia',
            subtitle: 'Un viaje desde la traducción hasta el código, impulsado por la curiosidad y la pasión por construir cosas.',
            items: [
                {
                    year: '2023 - Presente',
                    title: 'Desarrollador Full Stack',
                    subtitle: 'Freelance y Proyectos Personales',
                    description: 'Desarrollando aplicaciones web de alta gama usando Next.js, React y tecnologías de IA. Enfocado en crear experiencias de usuario premium.',
                },
                {
                    year: '2018 - 2022',
                    title: 'Estudiante Universitario',
                    subtitle: 'Universidad Evangélica de El Salvador',
                    description: 'Licenciatura en Traducción e Interpretación en Inglés. Descubrí mi pasión por la programación y comencé el autoaprendizaje.',
                },
                {
                    year: '2020 - 2022',
                    title: 'Servicio al Cliente',
                    subtitle: 'Teleperformance',
                    description: 'Trabajé en un entorno acelerado, perfeccionando habilidades de comunicación y resolución de problemas.',
                },
                {
                    year: '2019',
                    title: 'Academia Kodigo',
                    subtitle: 'Entrenamiento Full Stack',
                    description: 'Entrenamiento intensivo en tecnologías front-end y back-end, sentando las bases para mi carrera de desarrollo.',
                },
            ],
        },
        projects: {
            title: 'Trabajos Seleccionados',
            subtitle: 'Desliza para explorar',
            swipe: 'Desliza para explorar',
            visit: 'Visitar',
            code: 'Código',
        },
        contact: {
            title: 'Trabajemos juntos.',
            subtitle: 'juntos.',
            desc: 'Siempre estoy abierto a discutir trabajos de diseño de productos u oportunidades de asociación.',
            whatsapp: 'Chatear en WhatsApp',
            email: 'Correo',
            location: 'Ubicación',
        },
        donate_page: {
            hero_title: 'Apoya la Innovación en',
            hero_subtitle: 'El Salvador',
            hero_desc: 'Tu contribución apoya directamente el desarrollo de mtexports.app y mi carrera como desarrollador. Ayúdame a construir el futuro del comercio electrónico en la región.',
            options_title: 'Elige tu Impacto',
            options_desc: 'Cada donación ayuda a mantener servidores, desarrollar nuevas funciones de IA y mantener la plataforma en funcionamiento.',
            coffee_title: 'Cómprame un Café',
            coffee_desc: 'Combustible para sesiones de código nocturnas.',
            server_title: 'Soporte de Servidor',
            server_desc: 'Cubre costos de infraestructura.',
            feature_title: 'Impulso de Función',
            feature_desc: 'Patrocina una nueva función de IA.',
            custom_title: 'Cantidad Propia',
            custom_desc: 'Tu elección, tu impacto.',
            donate_btn: 'Donar',
        }
    },
};

const LanguageContext = createContext<{
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Content;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Auto-detect language
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') {
            setLanguage('es');
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
