import React from 'react';
import { Button } from '@/components/ui/button';
import { Target, Users, Zap, ArrowRight } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function WhatMakesMeDifferent() {
    const differentiators = [
        {
            icon: Target,
            title: "Orientado a conversión, no solo a diseño",
            description: "Cada elemento de tu web está pensado para que la gente te contacte. Formularios optimizados, llamados a la acción claros, carga rápida."
        },
        {
            icon: Users,
            title: "Trabajo directo, sin intermediarios",
            description: "Hablás directamente con el que escribe el código y diseña la solución. Sin ejecutivos de cuenta que no saben de técnica ni desarrolladores que no saben de negocios."
        },
        {
            icon: Zap,
            title: "Entrega en semanas, no meses",
            description: "Landing pages en 1 semana. Webs institucionales en 2-3 semanas. E-commerce en 3-4 semanas. Sin demoras ni excusas."
        }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-muted/30">

            <div className="container mx-auto px-6 relative">
                <div className="max-w-5xl mx-auto">

                    {/* Header */}
                    <Fade triggerOnce direction="up" cascade damping={0.1}>
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Por qué no soy como otras agencias
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Sin equipos enormes, sin procesos burocráticos, sin promesas marketineras.
                            </p>
                        </div>
                    </Fade>

                    {/* Differentiators */}
                    <Fade triggerOnce cascade damping={0.15} delay={200}>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {differentiators.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

                                        <div className="relative bg-background rounded-xl p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm h-full">

                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>

                                            <h3 className="font-semibold text-xl text-foreground mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Fade>

                    {/* Bottom CTA */}
                    <Fade triggerOnce delay={400}>
                        <div className="text-center bg-background rounded-xl p-8 border border-border/50">
                            <p className="text-lg text-foreground mb-4">
                                <strong>Esto incluye:</strong> Diseño responsive, velocidad optimizada, SEO básico, integración WhatsApp, formularios funcionales y capacitación de uso.
                            </p>
                            <Button size="lg" variant="outline" className="group">
                                Ver cómo trabajo
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    );
}

export default WhatMakesMeDifferent;