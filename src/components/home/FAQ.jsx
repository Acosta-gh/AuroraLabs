import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿Cuánto tiempo demora el proyecto?",
            answer: "Landing pages: 1 semana. Webs institucionales: 2-3 semanas. E-commerce: 3-4 semanas. Estos tiempos se cumplen siempre que el contenido (textos y fotos) esté listo. Trabajo con revisiones constantes para que no haya sorpresas al final."
        },
        {
            question: "¿Voy a aparecer primero en Google?",
            answer: "Cualquiera que te prometa el puesto #1 en una semana te está mintiendo. Lo que yo te entrego es una web técnicamente perfecta: rápida, segura y con código que Google ama. Eso te da la mejor base para posicionar. Si después querés hacer campañas pagas o SEO avanzado, lo podemos charlar."
        },
        {
            question: "¿Puedo modificar la web yo mismo después?",
            answer: "Si es un E-commerce, sí: vas a poder cargar productos y precios fácilmente. Si es una web institucional o landing, trabajo con código puro (sin WordPress lento) para garantizar velocidad. En ese caso, los cambios de textos o fotos me los pedís a mí y los hago en minutos. Zapatero a sus zapatos: vos vendés, yo programo."
        },
        {
            question: "¿Qué incluye el mantenimiento y por qué es necesario?",
            answer: "Es tu seguro técnico. Incluye el hosting de alta performance, certificado de seguridad SSL, backups semanales y tiempo dedicado para cambios que necesites (precios, fotos, textos). Mi objetivo es que la web nunca se caiga y vuele. Si preferís gestionar tu propio hosting, podés hacerlo, pero perdés mi soporte técnico ante cualquier falla del servidor."
        },
        {
            question: "¿Qué pasa si el diseño no me convence?",
            answer: "No trabajo a ciegas. Antes de programar, definimos una línea estética. Durante el proceso tenés instancias de revisión para ajustar lo que haga falta. La clave es la comunicación: si algo no te cierra, se cambia en el momento."
        },
        {
            question: "¿Trabajás con clientes de cualquier lugar?",
            answer: "Sí, trabajo 100% remoto. Nos manejamos por WhatsApp y videollamadas. Esto me permite ser más ágil, bajar costos y mostrarte avances en vivo sin necesidad de perder tiempo en traslados."
        },
        {
            question: "¿Para quién NO es este servicio?",
            answer: "Si buscás el presupuesto más barato del mercado o una web de 'copiar y pegar', no soy la opción indicada. Trabajo con negocios que entienden que una web lenta o mal hecha sale cara. Tampoco desarrollo plataformas masivas como redes sociales o clones de Mercado Libre."
        }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-muted/30">
            <div className="container mx-auto px-6 relative">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <Fade triggerOnce direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Preguntas frecuentes
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Respuestas claras, sin vueltas ni tecnicismos innecesarios.
                            </p>
                        </div>
                    </Fade>

                    {/* FAQ Items */}
                    <Fade triggerOnce cascade damping={0.05} delay={200}>
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-background rounded-xl border border-border/50 overflow-hidden hover:border-border transition-all duration-300 shadow-sm"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <span className="font-semibold text-lg text-foreground pr-4">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                            <div className="h-px bg-border/50 mb-4" />
                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>

                    {/* Bottom note */}
                    <Fade triggerOnce delay={400}>
                        <div className="mt-12 text-center p-8 bg-background rounded-2xl border border-dashed border-border">
                            <p className="text-lg text-foreground mb-4">
                                ¿Tenés una duda específica que no está acá?
                            </p>
                            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                Consultar por WhatsApp
                            </button>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    );
}

export default FAQ;