import React from "react"
import "./App.css"
import { FaHeart as Heart, FaChartBar as Activity } from 'react-icons/fa';
import { FaChevronLeft as ChevronLeft, FaChevronRight as ChevronRight } from 'react-icons/fa';
const { useState, useEffect } = React

// Icons Component
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
        adn: "🧬",
        fileText: "📄",
        calendar: "📅",
    }

    return <span className={className}>{icons[name] || "?"}</span>
}

// Header Component
const Header = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { id: "inicio", label: "Inicio" },
        { id: "quienes-somos", label: "Quiénes Somos" },
        { id: "servicios", label: "Servicios" },
    ]

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <div>
                            <img src="logoBiosangreCenter.png" alt="Biosangre Center Logo" width={"80px"} height={"80px"} />
                        </div>
                        <div className="logo-text">
                            <h1>Biosangre Center</h1>
                            <p>C.A</p>
                        </div>
                    </div>

                    <nav className="nav">
                        <ul className="nav-links">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        className="nav-link"
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary" onClick={() => scrollToSection("contacto")}>
                            Contacto
                        </button>
                    </nav>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Icon name={isMenuOpen ? "x" : "menu"} />
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="mobile-nav open">
                        <ul className="mobile-nav-links">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        className="nav-link"
                                        onClick={() => {
                                            scrollToSection(item.id)
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        scrollToSection("contacto")
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

// Hero Section Component
const HeroSection = ({ scrollToSection }) => {
    const stats = [
        { number: "100%", label: "Comprometidos con tu salud" },
        { number: "2025", label: "Año de Fundación" },
        { number: "24/7", label: "Servicio Disponible" },
        { number: "99.9%", label: "Precisión en Resultados" },
    ]

    const features = [
        {
            icon: "adn",
            title: "Bioseguridad Certificable",
            description: "Trazabilidad digital y protocolos sanitarios confiables",
        },
        {
            icon: "clock",
            title: "Servicio 24/7",
            description: "Atención continua, sin interrupciones",
        },
        {
            icon: "award",
            title: "Excelencia Médica",
            description: "Equipo altamente capacitado y certificado",
        },
    ]

    return (
        <section id="inicio" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="badge">Líder en Servicios de Salud</div>
                        <h1>
                            Tu salud es nuestra
                            <span className="highlight"> prioridad</span>
                        </h1>
                        <p>
                            En Biosangre Center C.A ofrecemos servicios médicos especializados con tecnología de vanguardia y un
                            equipo de profesionales altamente calificados para cuidar tu bienestar.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={() => scrollToSection("servicios")}>
                                Nuestros Servicios <Icon name="chevronRight" />
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection("quienes-somos")}>
                                Conoce Más
                            </button>
                        </div>

                        <div className="stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat">
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-features">
                        {features.map((feature, index) => (
                            <div key={index} className="feature">
                                <div className="feature-icon">
                                    <Icon name={feature.icon} />
                                </div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// About Section Component
const AboutSection = () => {
    const features = [
        { icon: "users", title: "Equipo Experto", description: "Profesionales certificados", color: "red" },
        { icon: "microscope", title: "Tecnología", description: "Equipos de vanguardia", color: "blue" },
        { icon: "shield", title: "Calidad", description: "Protocolos de salud", color: "green" },
        { icon: "heart", title: "Compromiso", description: "Con tu bienestar", color: "purple" },
    ]

    const values = [
        {
            img: "compromiso.jpg",
            title: "Compromiso",
            description: "Dedicados al bienestar y la salud de nuestros pacientes",
            color: "red",
        },
        {
            img: "integridad.jpeg",
            title: "Integridad",
            description: "Actuamos con honestidad y transparencia en todos nuestros procesos",
            color: "blue",
        },
        {
            img: "excelencia.jpg",
            title: "Excelencia",
            description: "Buscamos la mejora continua en todos nuestros servicios",
            color: "green",
        },
    ]

    return (
        <section id="quienes-somos" className="about">
            <div className="container">
                <div className="section-header">
                    <h2>Quiénes Somos</h2>
                    <p>
                        BioSangre Center, C.A. es una compañía anónima especializada en el procesamiento, análisis y distribución de sangre y sus derivados, así como en la realización de análisis clínicos avanzados. Nacemos con la misión de ofrecer soluciones eficientes, seguras y tecnológicamente innovadoras al sector salud, mejorando la trazabilidad, bioseguridad y calidad de vida de nuestros pacientes y aliados institucionales.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <div>
                            <h3>Nuestra Misión</h3>
                            <p>
                                Brindar servicios integrales de gestión y distribución de sangre, junto con análisis clínicos confiables, respaldados por tecnología avanzada, garantizando trazabilidad, seguridad, precisión diagnóstica y eficiencia operativa, en beneficio de instituciones de salud y pacientes.
                            </p>
                        </div>

                        <div>
                            <h3>Nuestra Visión</h3>
                            <p>
                                Ser el centro de referencia nacional en soluciones integrales de gestión sanguínea y diagnósticos clínicos, promoviendo la donación voluntaria de sangre y el uso inteligente de la tecnología como pilares para el fortalecimiento del sistema hospitalario venezolano.
                            </p>
                        </div>
                    </div>

                    <div className="about-features">
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className={`feature-item-icon ${feature.color}`}>
                                        <Icon name={feature.icon} />
                                    </div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="values text-center">
                    <h3 className="text-2xl font-bold text-red-700 mb-8">Nuestros Valores</h3>
                    <div className="values-grid grid md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="value-item p-4 border rounded-lg shadow">
                                <div className="mb-4 flex justify-center">
                                    <img
                                        src={value.img}
                                        alt={value.title}
                                        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}

// Services Section Component
const ServicesSection = ({ scrollToSection }) => {
    const services = [
        {
            icon: Activity,
            title: "Análisis Clínicos",
            description: "Exámenes de laboratorio completos con tecnología de vanguardia y resultados precisos.",
            features: [
                "Hematología completa",
                "Química sanguínea",
                "Perfil tiroideo, renal, hepático y lipídico",
                "Pruebas hormonales y marcadores tumorales",
            ],
            images: [
                "analisis1.jpg",
                "analisis2.jpeg",
                "analisis3.jpg",
            ],
        },
        {
            icon: Heart,
            title: "Banco de Sangre",
            description: "Servicios especializados en donación, procesamiento y suministro de componentes sanguíneos.",
            features: ["Donación de sangre", "Tipificación sanguínea", "Pruebas cruzadas", "Componentes sanguíneos"],
            images: [
                "banco1.webp",
                "banco2.webp",
                "banco3.webp",
            ],
        },
    ]

    // Estado para manejar los carruseles
    const [currentSlides, setCurrentSlides] = useState([0, 0])
    // Auto-play para los carruseles
    useEffect(() => {
        const intervals = services.map((_, serviceIndex) => {
            return setInterval(() => {
                setCurrentSlides((prev) => {
                    const newSlides = [...prev]
                    newSlides[serviceIndex] = (newSlides[serviceIndex] + 1) % services[serviceIndex].images.length
                    return newSlides
                })
            }, 3000)
        })

        return () => intervals.forEach(clearInterval)
    })

    const nextSlide = (serviceIndex) => {
        setCurrentSlides((prev) => {
            const newSlides = [...prev]
            newSlides[serviceIndex] = (newSlides[serviceIndex] + 1) % services[serviceIndex].images.length
            return newSlides
        })
    }

    const prevSlide = (serviceIndex) => {
        setCurrentSlides((prev) => {
            const newSlides = [...prev]
            newSlides[serviceIndex] =
                newSlides[serviceIndex] === 0 ? services[serviceIndex].images.length - 1 : newSlides[serviceIndex] - 1
            return newSlides
        })
    }

    const goToSlide = (serviceIndex, slideIndex) => {
        setCurrentSlides((prev) => {
            const newSlides = [...prev]
            newSlides[serviceIndex] = slideIndex
            return newSlides
        })
    }

    return (
        <section id="servicios" className="services">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestros Servicios</h2>
                    <p>
                        Ofrecemos una amplia gama de servicios médicos especializados con la más alta calidad y tecnología de
                        vanguardia para cuidar tu salud.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <div key={index} className="service-row">
                                {/* Servicio */}
                                <div className="service-card">
                                    <div className="service-header">
                                        <div className="service-icon">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="service-title">{service.title}</h3>
                                    </div>
                                    <p className="service-description">{service.description}</p>
                                    <div className="service-features">
                                        <h4>Incluye:</h4>
                                        <ul>
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Carrusel */}
                                <div className="carousel-wrapper">
                                    <div className="carousel-container">
                                        <button
                                            className="carousel-btn carousel-btn-prev"
                                            onClick={() => prevSlide(index)}
                                            aria-label="Imagen anterior"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        <div className="carousel-images">
                                            {service.images.map((img, imgIndex) => (
                                                <div
                                                    key={imgIndex}
                                                    className={`carousel-slide ${imgIndex === currentSlides[index] ? "active" : ""}`}
                                                >
                                                    <img
                                                        src={img || "/placeholder.svg"}
                                                        alt={`${service.title} ${imgIndex + 1}`}
                                                        className="carousel-image"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            className="carousel-btn carousel-btn-next"
                                            onClick={() => nextSlide(index)}
                                            aria-label="Siguiente imagen"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>

                                    {/* Dots indicator */}
                                    <div className="carousel-dots">
                                        {service.images.map((_, imgIndex) => (
                                            <button
                                                key={imgIndex}
                                                className={`carousel-dot ${imgIndex === currentSlides[index] ? "active" : ""}`}
                                                onClick={() => goToSlide(index, imgIndex)}
                                                aria-label={`Ir a imagen ${imgIndex + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const AccessSection = ({ scrollToSection }) => {
    const services = [
        {
            icon: "fileText",
            title: "Resultados Médicos",
            description: "Consulta tus análisis clínicos de forma inmediata y segura",
            color: "red",
            formFields: [
                {
                    id: "resultId",
                    name: "resultId",
                    type: "text",
                    label: "ID de Resultado",
                    placeholder: "Ingresa tu ID de resultado",
                },
            ],
            buttonText: "Ver Mis Resultados",
        },
        {
            icon: "calendar",
            title: "Agendar Cita",
            description: "Programa tu consulta médica en el horario que prefieras",
            color: "blue",
            formFields: [
                {
                    id: "appointmentDate",
                    name: "appointmentDate",
                    type: "date",
                    label: "Fecha",
                    placeholder: "",
                },
                {
                    id: "appointmentTime",
                    name: "appointmentTime",
                    type: "time",
                    label: "Hora",
                    placeholder: "",
                },
            ],
            buttonText: "Agendar Mi Cita",
        },
        {
            icon: "heart",
            title: "Donación de Sangre",
            description: "Registra tu donación y ayuda a salvar vidas",
            color: "green",
            formFields: [
                {
                    id: "donorName",
                    name: "donorName",
                    type: "text",
                    label: "Nombre Completo",
                    placeholder: "Tu nombre completo",
                },
                {
                    id: "donorEmail",
                    name: "donorEmail",
                    type: "email",
                    label: "Correo Electrónico",
                    placeholder: "tu@email.com",
                },
                {
                    id: "donationDate",
                    name: "donationDate",
                    type: "date",
                    label: "Fecha de Donación",
                    placeholder: "",
                },
            ],
            buttonText: "Registrar Donación",
        },
    ]

    const stats = [
        { number: "10,000+", label: "Resultados Entregados", color: "red" },
        { number: "5,000+", label: "Citas Agendadas", color: "blue" },
        { number: "2,500+", label: "Donaciones Registradas", color: "green" },
    ]

    return (
        <section id="acceso" className="access-section">
            {/* Background decorative elements */}
            <div className="access-bg-decoration"></div>
            <div className="access-bg-circle-1"></div>
            <div className="access-bg-circle-2"></div>

            <div className="container">
                {/* Header Section */}
                <div className="section-header">
                    <div className="header-icon">
                        <Icon name="heart" />
                    </div>
                    <h2>
                        Portal de <span className="text-highlight">Servicios</span>
                    </h2>
                    <p>
                        Accede a tus resultados médicos, agenda citas y gestiona tus donaciones de sangre de manera rápida, segura y
                        completamente digital.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="access-grid">
                    {services.map((service, index) => (
                        <div key={index} className={`access-card access-card-${service.color}`}>
                            <div className="access-card-header">
                                <div className={`access-icon access-icon-${service.color}`}>
                                    <Icon name={service.icon} />
                                </div>
                                <h3 className="access-title">{service.title}</h3>
                                <p className="access-description">{service.description}</p>
                            </div>

                            <form className="access-form">
                                <div className="form-fields">
                                    {service.formFields.map((field, fieldIndex) => (
                                        <div key={fieldIndex} className="form-field">
                                            <label htmlFor={field.id} className="form-label">
                                                {field.label}
                                            </label>
                                            <input
                                                type={field.type}
                                                id={field.id}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                required
                                                className={`form-input form-input-${service.color}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button type="submit" className={`btn btn-${service.color} btn-full`}>
                                    <Icon name={service.icon} />
                                    {service.buttonText}
                                </button>
                            </form>
                        </div>
                    ))}
                </div>

                {/* Contact CTA Section */}
                <div className="access-cta">
                    <div className="cta-icon">
                        <Icon name="phone" />
                    </div>
                    <h3>¿Necesitas Ayuda Personalizada?</h3>
                    <p>
                        Nuestro equipo de especialistas está disponible para resolver todas tus dudas y brindarte la mejor atención
                        médica.
                    </p>
                    <div className="cta-actions">
                        <button className="btn btn-white" onClick={() => scrollToSection("contacto")}>
                            <Icon name="phone" />
                            Contáctanos Ahora
                        </button>
                        <div className="cta-availability">
                            <Icon name="clock" />
                            <span>Disponible 24/7</span>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="access-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className={`stat-number stat-number-${stat.color}`}>{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Contact Section Component
const ContactSection = () => {
    const contactInfo = [
        {
            icon: "phone",
            title: "Teléfono",
            description: "Llámanos para agendar tu cita",
            info: ["+58 414-734.57.32", "+58 412-161.72.97"],
            color: "red",
        },
        {
            icon: "mail",
            title: "Email",
            description: "Escríbenos para más información",
            info: ["biosangrecenterinfo@gmail.com", "biosangrecentercitas@gmail.com"],
            color: "blue",
        },
        {
            icon: "mapPin",
            title: "Ubicación",
            description: "Visítanos en nuestra sede principal",
            info: ["Av España, San Cristobal, Tachira, Venezuela"],
            color: "green",
        },
    ]

    return (
        <section id="contacto" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contáctanos</h2>
                    <p>
                        Estamos aquí para atenderte. Comunícate con nosotros para más información sobre nuestros servicios o para
                        agendar una cita.
                    </p>
                </div>

                <div className="contact-grid">
                    {contactInfo.map((contact, index) => (
                        <div key={index} className="contact-card">
                            <div className={`contact-icon ${contact.color}`}>
                                <Icon name={contact.icon} />
                            </div>
                            <h3>{contact.title}</h3>
                            <p>{contact.description}</p>
                            <div className="contact-info">
                                {contact.info.map((info, infoIndex) => (
                                    <p key={infoIndex}>{info}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="schedule">
                    <h3>Horarios de Atención</h3>
                    <div className="schedule-grid">
                        <div className="schedule-item">
                            <h4>Laboratorio Clínico</h4>
                            <p>
                                <span>Lunes a Viernes:</span> 7:00 AM - 6:00 PM
                            </p>
                            <p>
                                <span>Sábados:</span> 7:00 AM - 2:00 PM
                            </p>
                            <p>
                                <span>Domingos:</span> 8:00 AM - 12:00 PM
                            </p>
                        </div>
                        <div className="schedule-item">
                            <h4>Banco de Sangre</h4>
                            <p>
                                <span>24 horas:</span> Emergencias
                            </p>
                            <p>
                                <span>Donaciones:</span> Lun-Vie 8:00 AM - 4:00 PM
                            </p>
                            <p>
                                <span>Sábados:</span> 8:00 AM - 2:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Footer Component
const Footer = ({ scrollToSection }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo">
                            <div>
                                <img src="logoBiosangreCenter.png" alt="Biosangre Center Logo" width={"100px"} height={"100px"} />
                            </div>
                            <div className="logo-text">
                                <h3>Biosangre Center</h3>
                                <p>C.A</p>
                            </div>
                        </div>
                        <p>
                            Comprometidos con tu salud y bienestar, ofreciendo servicios médicos de la más
                            alta calidad.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Servicios</h4>
                        <ul>
                            <li>
                                <button onClick={() => scrollToSection("servicios")}>Analisis de laboratorio</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("servicios")}>Banco de sangre</button>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Empresa</h4>
                        <ul>
                            <li>
                                <button onClick={() => scrollToSection("quienes-somos")}>Quiénes Somos</button>
                            </li>
                            <li>
                                Certificaciones
                            </li>
                            <li>
                                Trabaja con Nosotros
                            </li>
                            <li>
                                Politica de Privacidad
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contacto</h4>
                        <div className="footer-contact">
                            <Icon name="phone" />
                            <span>+58 412-161.72.97</span>
                        </div>
                        <div className="footer-contact">
                            <Icon name="mail" />
                            <span>biosangrecenterinfo@gmail.com</span>
                        </div>
                        <div className="footer-contact">
                            <Icon name="mapPin" />
                            <span>San Cristobal,Tachira, Venezuela</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Biosangre Center C.A. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState("inicio")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["inicio", "quienes-somos", "servicios", "contacto"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div>
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <HeroSection scrollToSection={scrollToSection} />
            <AboutSection scrollToSection={scrollToSection} />
            <ServicesSection scrollToSection={scrollToSection} />
            <AccessSection scrollToSection={scrollToSection} />
            <ContactSection scrollToSection={scrollToSection} />
            <Footer scrollToSection={scrollToSection} />
        </div>
    )
}

export default App;
