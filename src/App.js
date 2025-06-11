import React, { useState } from "react";
import "./App.css"; // Importa tus estilos si los tienes

// Componente de Icono
const Icon = ({ name, className = "" }) => {
    const icons = {
        heart: "❤️",
        users: "👥",
        shield: "🛡️",
        clock: "🕐",
        phone: "📞",
        mail: "📧",
        mapPin: "📍",
        chevronRight: "→",
        activity: "📊",
        microscope: "🔬",
        userCheck: "✅",
        award: "🏆",
        menu: "☰",
        x: "✕",
    };

    return React.createElement("span", { className }, icons[name] || "?");
};

// Componente Header
const Header = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: "inicio", label: "Inicio" },
        { id: "quienes-somos", label: "Quiénes Somos" },
        { id: "servicios", label: "Servicios" },
    ];

    return React.createElement(
        "header",
        { className: "header" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "header-content" },
                React.createElement(
                    "div",
                    { className: "logo" },
                    React.createElement(
                        "div",
                        { className: "logo-icon" },
                        React.createElement(Icon, { name: "heart" })
                    ),
                    React.createElement(
                        "div",
                        { className: "logo-text" },
                        React.createElement("h1", null, "Biosangre Center"),
                        React.createElement("p", null, "C.A")
                    )
                ),

                React.createElement(
                    "nav",
                    { className: "nav" },
                    React.createElement(
                        "ul",
                        { className: "nav-links" },
                        navItems.map((item) =>
                            React.createElement(
                                "li",
                                { key: item.id },
                                React.createElement(
                                    "button",
                                    {
                                        className: `nav-link ${activeSection === item.id ? "active" : ""
                                            }`,
                                        onClick: () => scrollToSection(item.id),
                                    },
                                    item.label
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "button",
                        {
                            className: "btn btn-primary",
                            onClick: () => scrollToSection("contacto"),
                        },
                        "Contacto"
                    )
                ),

                React.createElement(
                    "button",
                    {
                        className: "mobile-menu-btn",
                        onClick: () => setIsMenuOpen(!isMenuOpen),
                    },
                    React.createElement(Icon, { name: isMenuOpen ? "x" : "menu" })
                )
            ),

            isMenuOpen &&
            React.createElement(
                "nav",
                { className: "mobile-nav open" },
                React.createElement(
                    "ul",
                    { className: "mobile-nav-links" },
                    navItems.map((item) =>
                        React.createElement(
                            "li",
                            { key: item.id },
                            React.createElement(
                                "button",
                                {
                                    className: `nav-link ${activeSection === item.id ? "active" : ""
                                        }`,
                                    onClick: () => {
                                        scrollToSection(item.id);
                                        setIsMenuOpen(false);
                                    },
                                },
                                item.label
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                onClick: () => {
                                    scrollToSection("contacto");
                                    setIsMenuOpen(false);
                                },
                            },
                            "Contacto"
                        )
                    )
                )
            )
        )
    );
};

// Componente Hero
const HeroSection = ({ scrollToSection }) => {
    const stats = [
        { number: "15+", label: "Años de Experiencia" },
        { number: "50,000+", label: "Pacientes Atendidos" },
        { number: "24/7", label: "Servicio Disponible" },
        { number: "99.9%", label: "Precisión en Resultados" },
    ];

    const features = [
        {
            icon: "shield",
            title: "Certificación ISO",
            description: "Calidad garantizada",
        },
        { icon: "clock", title: "Servicio 24/7", description: "Siempre disponibles" },
        {
            icon: "award",
            title: "Excelencia Médica",
            description: "Profesionales certificados",
        },
    ];

    return React.createElement(
        "section",
        { id: "inicio", className: "hero" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "hero-content" },
                React.createElement(
                    "div",
                    { className: "hero-text" },
                    React.createElement("div", { className: "badge" }, "Líder en Servicios de Salud"),
                    React.createElement(
                        "h1",
                        null,
                        "Tu salud es nuestra",
                        React.createElement("span", { className: "highlight" }, " prioridad")
                    ),
                    React.createElement(
                        "p",
                        null,
                        "En Biosangre Center C.A ofrecemos servicios médicos especializados con tecnología de vanguardia y un equipo de profesionales altamente calificados para cuidar tu bienestar."
                    ),

                    React.createElement(
                        "div",
                        { className: "hero-buttons" },
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-primary",
                                onClick: () => scrollToSection("servicios"),
                            },
                            "Nuestros Servicios ",
                            React.createElement(Icon, { name: "chevronRight" })
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "btn btn-secondary",
                                onClick: () => scrollToSection("quienes-somos"),
                            },
                            "Conoce Más"
                        )
                    ),

                    React.createElement(
                        "div",
                        { className: "stats" },
                        stats.map((stat, index) =>
                            React.createElement(
                                "div",
                                { key: index, className: "stat" },
                                React.createElement("span", { className: "stat-number" }, stat.number),
                                React.createElement("span", { className: "stat-label" }, stat.label)
                            )
                        )
                    )
                ),

                React.createElement(
                    "div",
                    { className: "hero-features" },
                    features.map((feature, index) =>
                        React.createElement(
                            "div",
                            { key: index, className: "feature" },
                            React.createElement(
                                "div",
                                { className: "feature-icon" },
                                React.createElement(Icon, { name: feature.icon })
                            ),
                            React.createElement(
                                "div",
                                { className: "feature-text" },
                                React.createElement("h3", null, feature.title),
                                React.createElement("p", null, feature.description)
                            )
                        )
                    )
                )
            )
        )
    );
};

// Componente About
const AboutSection = () => {
    const features = [
        {
            icon: "users",
            title: "Equipo Experto",
            description: "Profesionales certificados",
            color: "red",
        },
        {
            icon: "microscope",
            title: "Tecnología",
            description: "Equipos de vanguardia",
            color: "blue",
        },
        { icon: "shield", title: "Calidad", description: "Certificación ISO", color: "green" },
        {
            icon: "heart",
            title: "Compromiso",
            description: "Con tu salud",
            color: "purple",
        },
    ];

    const values = [
        {
            icon: "heart",
            title: "Compromiso",
            description: "Dedicados al bienestar y la salud de nuestros pacientes",
            color: "red",
        },
        {
            icon: "shield",
            title: "Integridad",
            description: "Actuamos con honestidad y transparencia en todos nuestros procesos",
            color: "blue",
        },
        {
            icon: "award",
            title: "Excelencia",
            description: "Buscamos la mejora continua en todos nuestros servicios",
            color: "green",
        },
    ];

    return React.createElement(
        "section",
        { id: "quienes-somos", className: "about" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "section-header" },
                React.createElement("h2", null, "Quiénes Somos"),
                React.createElement(
                    "p",
                    null,
                    "Somos una empresa líder en servicios de salud especializados, comprometidos con la excelencia médica y el bienestar de nuestros pacientes desde hace más de 15 años."
                )
            ),

            React.createElement(
                "div",
                { className: "about-content" },
                React.createElement(
                    "div",
                    { className: "about-text" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement("h3", null, "Nuestra Misión"),
                        React.createElement(
                            "p",
                            null,
                            "Proporcionar servicios médicos especializados de la más alta calidad, utilizando tecnología de vanguardia y contando con un equipo de profesionales altamente capacitados para contribuir al diagnóstico, tratamiento y prevención de enfermedades."
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement("h3", null, "Nuestra Visión"),
                        React.createElement(
                            "p",
                            null,
                            "Ser reconocidos como la empresa líder en servicios de laboratorio clínico y banco de sangre en Venezuela, expandiendo nuestros servicios a nivel nacional e internacional, manteniendo siempre los más altos estándares de calidad y excelencia."
                        )
                    )
                ),

                React.createElement(
                    "div",
                    { className: "about-features" },
                    React.createElement(
                        "div",
                        { className: "features-grid" },
                        features.map((feature, index) =>
                            React.createElement(
                                "div",
                                { key: index, className: "feature-item" },
                                React.createElement(
                                    "div",
                                    { className: `feature-item-icon ${feature.color}` },
                                    React.createElement(Icon, { name: feature.icon })
                                ),
                                React.createElement("h4", null, feature.title),
                                React.createElement("p", null, feature.description)
                            )
                        )
                    )
                )
            ),

            React.createElement(
                "div",
                { className: "values" },
                React.createElement("h3", null, "Nuestros Valores"),
                React.createElement(
                    "div",
                    { className: "values-grid" },
                    values.map((value, index) =>
                        React.createElement(
                            "div",
                            { key: index, className: "value-item" },
                            React.createElement(
                                "div",
                                { className: `value-icon ${value.color}` },
                                React.createElement(Icon, { name: value.icon })
                            ),
                            React.createElement("h4", null, value.title),
                            React.createElement("p", null, value.description)
                        )
                    )
                )
            )
        )
    );
};

// Componente Services
const ServicesSection = ({ scrollToSection }) => {
    const services = [
        {
            icon: "activity",
            title: "Análisis Clínicos",
            description:
                "Exámenes de laboratorio completos con tecnología de vanguardia y resultados precisos.",
            features: [
                "Hematología completa",
                "Química sanguínea",
                "Perfil lipídico",
                "Marcadores tumorales",
            ],
        },
        {
            icon: "heart",
            title: "Banco de Sangre",
            description:
                "Servicios especializados en donación, procesamiento y suministro de componentes sanguíneos.",
            features: [
                "Donación de sangre",
                "Tipificación sanguínea",
                "Pruebas cruzadas",
                "Componentes sanguíneos",
            ],
        },
        {
            icon: "microscope",
            title: "Microbiología",
            description:
                "Diagnóstico microbiológico especializado para la detección de patógenos.",
            features: ["Cultivos bacterianos", "Antibiogramas", "Parasitología", "Micología clínica"],
        },
        {
            icon: "userCheck",
            title: "Medicina Preventiva",
            description: "Programas de prevención y chequeos médicos para mantener tu salud óptima.",
            features: ["Chequeos ejecutivos", "Medicina ocupacional", "Vacunación", "Programas preventivos"],
        },
    ];

    return React.createElement(
        "section",
        { id: "servicios", className: "services" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "section-header" },
                React.createElement("h2", null, "Nuestros Servicios"),
                React.createElement(
                    "p",
                    null,
                    "Ofrecemos una amplia gama de servicios médicos especializados con la más alta calidad y tecnología de vanguardia para cuidar tu salud."
                )
            ),

            React.createElement(
                "div",
                { className: "services-grid" },
                services.map((service, index) =>
                    React.createElement(
                        "div",
                        { key: index, className: "service-card" },
                        React.createElement(
                            "div",
                            { className: "service-header" },
                            React.createElement(
                                "div",
                                { className: "service-icon" },
                                React.createElement(Icon, { name: service.icon })
                            ),
                            React.createElement("h3", { className: "service-title" }, service.title)
                        ),
                        React.createElement("p", { className: "service-description" }, service.description),
                        React.createElement(
                            "div",
                            { className: "service-features" },
                            React.createElement("h4", null, "Incluye:"),
                            React.createElement(
                                "ul",
                                null,
                                service.features.map((feature, featureIndex) =>
                                    React.createElement("li", { key: featureIndex }, feature)
                                )
                            )
                        )
                    )
                )
            ),

            React.createElement(
                "div",
                { className: "services-cta" },
                React.createElement("h3", null, "¿Necesitas más información sobre nuestros servicios?"),
                React.createElement("p", null, "Nuestro equipo de especialistas está listo para atenderte"),
                React.createElement(
                    "button",
                    {
                        className: "btn btn-white",
                        onClick: () => scrollToSection("contacto"),
                    },
                    "Contáctanos Ahora ",
                    React.createElement(Icon, { name: "chevronRight" })
                )
            )
        )
    );
};

// Componente Contact
const ContactSection = () => {
    const contactInfo = [
        {
            icon: "phone",
            title: "Teléfono",
            description: "Llámanos para agendar tu cita",
            info: ["+58 212-555-0123", "+58 414-555-0456"],
            color: "red",
        },
        {
            icon: "mail",
            title: "Email",
            description: "Escríbenos para más información",
            info: ["info@biosangrecenter.com", "citas@biosangrecenter.com"],
            color: "blue",
        },
        {
            icon: "mapPin",
            title: "Ubicación",
            description: "Visítanos en nuestra sede principal",
            info: ["Av. Principal, Centro Médico", "Caracas, Venezuela"],
            color: "green",
        },
    ];
    // Continuación de ContactSection

    return React.createElement(
        "section",
        { id: "contacto", className: "contact" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "section-header" },
                React.createElement("h2", null, "Contáctanos"),
                React.createElement(
                    "p",
                    null,
                    "Estamos aquí para atenderte. Comunícate con nosotros para más información sobre nuestros servicios o para agendar una cita."
                )
            ),

            React.createElement(
                "div",
                { className: "contact-grid" },
                contactInfo.map((contact, index) =>
                    React.createElement(
                        "div",
                        { key: index, className: "contact-card" },
                        React.createElement(
                            "div",
                            { className: `contact-icon ${contact.color}` },
                            React.createElement(Icon, { name: contact.icon })
                        ),
                        React.createElement("h3", null, contact.title),
                        React.createElement("p", null, contact.description),
                        React.createElement(
                            "div",
                            { className: "contact-info" },
                            contact.info.map((info, infoIndex) =>
                                React.createElement("p", { key: infoIndex }, info)
                            )
                        )
                    )
                )
            ),

            React.createElement(
                "div",
                { className: "schedule" },
                React.createElement("h3", null, "Horarios de Atención"),
                React.createElement(
                    "div",
                    { className: "schedule-grid" },
                    React.createElement(
                        "div",
                        { className: "schedule-item" },
                        React.createElement("h4", null, "Laboratorio Clínico"),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "Lunes a Viernes:"),
                            " 6:00 AM - 6:00 PM"
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "Sábados:"),
                            " 7:00 AM - 2:00 PM"
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "Domingos:"),
                            " 8:00 AM - 12:00 PM"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "schedule-item" },
                        React.createElement("h4", null, "Banco de Sangre"),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "24 horas:"),
                            " Emergencias"
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "Donaciones:"),
                            " Lun-Vie 8:00 AM - 4:00 PM"
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", null, "Sábados:"),
                            " 8:00 AM - 2:00 PM"
                        )
                    )
                )
            )
        )
    );
};

// Componente Footer
const Footer = ({ scrollToSection }) => {
    return React.createElement(
        "footer",
        { className: "footer" },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "footer-content" },
                React.createElement(
                    "div",
                    { className: "footer-section" },
                    React.createElement(
                        "div",
                        { className: "logo" },
                        React.createElement(
                            "div",
                            { className: "logo-icon" },
                            React.createElement(Icon, { name: "heart" })
                        ),
                        React.createElement(
                            "div",
                            { className: "logo-text" },
                            React.createElement("h3", null, "Biosangre Center"),
                            React.createElement("p", null, "C.A")
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Comprometidos con tu salud y bienestar desde hace más de 15 años, ofreciendo servicios médicos de la más alta calidad."
                    )
                ),

                React.createElement(
                    "div",
                    { className: "footer-section" },
                    React.createElement("h4", null, "Servicios"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Análisis Clínicos")),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Banco de Sangre")),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Microbiología")),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Medicina Preventiva"))
                    )
                ),

                React.createElement(
                    "div",
                    { className: "footer-section" },
                    React.createElement("h4", null, "Empresa"),
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "button",
                                {
                                    onClick: () => scrollToSection("quienes-somos"),
                                },
                                "Quiénes Somos"
                            )
                        ),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Certificaciones")),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Trabaja con Nosotros")),
                        React.createElement("li", null, React.createElement("a", { href: "#" }, "Política de Privacidad"))
                    )
                ),

                React.createElement(
                    "div",
                    { className: "footer-section" },
                    React.createElement("h4", null, "Contacto"),
                    React.createElement(
                        "div",
                        { className: "footer-contact" },
                        React.createElement(Icon, { name: "phone" }),
                        React.createElement("span", null, "+58 212-555-0123")
                    ),
                    React.createElement(
                        "div",
                        { className: "footer-contact" },
                        React.createElement(Icon, { name: "mail" }),
                        React.createElement("span", null, "info@biosangrecenter.com")
                    ),
                    React.createElement(
                        "div",
                        { className: "footer-contact" },
                        React.createElement(Icon, { name: "mapPin" }),
                        React.createElement("span", null, "Caracas, Venezuela")
                    )
                )
            ),

            React.createElement(
                "div",
                { className: "footer-bottom" },
                React.createElement(
                    "p",
                    null,
                    `© ${new Date().getFullYear()} Biosangre Center C.A. Todos los derechos reservados.`
                )
            )
        )
    );
};

// Componente Principal App
const App = () => {
    const [activeSection, setActiveSection] = React.useState("inicio");

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "quienes-somos", "servicios", "contacto"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return React.createElement(
        "div",
        null,
        React.createElement(Header, { activeSection, scrollToSection }),
        React.createElement(HeroSection, { scrollToSection }),
        React.createElement(AboutSection),
        React.createElement(ServicesSection, { scrollToSection }),
        React.createElement(ContactSection),
        React.createElement(Footer, { scrollToSection })
    );
};
export default App;