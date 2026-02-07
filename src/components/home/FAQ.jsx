import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "¿En cuánto tiempo tendré mi web lista?",
            answer: "Trabajo con procesos ágiles: Landing Pages en 1 semana, Webs Institucionales en 2-3 y E-commerce en 4 semanas. La clave es el trabajo en equipo; si el contenido está listo, los plazos se cumplen a rajatabla con revisiones semanales para que el resultado sea exactamente lo que esperás."
        },
        {
            question: "¿Mi web va a aparecer en los primeros resultados de Google?",
            answer: "Cualquiera que te prometa el puesto #1 en una semana te está mintiendo. Lo que yo te entrego es una web técnicamente impecable: rápida, segura y con una estructura que a Google le encanta. Esa es la base indispensable para posicionar. Si más adelante buscás escalar con campañas pagas o SEO avanzado, lo charlamos, pero empezás con el pie derecho."
        },
        {
            question: "¿Podré gestionar el contenido yo mismo?",
            answer: "¡Totalmente! En E-commerce tenés autonomía total para productos y precios. En webs institucionales, priorizo el 'Código Puro' para que tu web vuele y sea segura. Para cambios de textos o fotos, yo me encargo de todo en minutos. Así vos te enfocás en vender y yo en que tu plataforma tecnológica sea perfecta."
        },
        {
            question: "¿Qué incluye el servicio de mantenimiento?",
            answer: "Es la tranquilidad de que tu negocio nunca se detiene. Incluye hosting de alta performance, certificado SSL, copias de seguridad semanales y soporte técnico para cambios. Si surge cualquier duda o actualización, tenés línea directa conmigo. Es como tener un departamento de sistemas a tu disposición."
        },
        {
            question: "¿Y si el diseño final no me gusta?",
            answer: "Eso no pasa, porque no hay sorpresas. Antes de tirar una sola línea de código, validamos una línea estética y estructura. El proceso es transparente y colaborativo: ajustamos cada detalle en las instancias de revisión hasta que sientas que la web representa 100% la identidad de tu marca."
        },
        {
            question: "¿Por qué elegir código personalizado en lugar de plantillas baratas?",
            answer: "Para dueños de negocio que no quieren una web de 'copiar y pegar' que tarda siglos en cargar. Si buscás el presupuesto más bajo del mercado, quizás no soy tu opción. Si buscás una herramienta profesional que convierta visitas en ventas, no se rompa y posicione mejor que tu competencia, estás en el lugar correcto."
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