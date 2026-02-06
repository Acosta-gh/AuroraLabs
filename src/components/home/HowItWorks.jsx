import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, FileText, Code, Rocket, ArrowRight } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: MessageSquare,
            title: "Consulta inicial",
            description: "Hablamos de tu negocio y qué necesitás. Sin compromiso."
        },
        {
            number: "02",
            icon: FileText,
            title: "Propuesta y presupuesto",
            description: "Te paso un plan claro con tiempos y costos reales."
        },
        {
            number: "03",
            icon: Code,
            title: "Desarrollo",
            description: "Trabajo en tu proyecto con revisiones en el camino."
        },
        {
            number: "04",
            icon: Rocket,
            title: "Entrega y ajustes",
            description: "Publicamos tu web y hacemos los ajustes finales."
        }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header */}
                    <Fade triggerOnce direction="up" cascade damping={0.1}>
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Cómo trabajamos juntos
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Un proceso simple, sin vueltas
                            </p>
                        </div>
                    </Fade>

                    {/* Steps */}
                    <Fade triggerOnce cascade damping={0.15} delay={200}>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div 
                                        key={index}
                                        className="group relative"
                                    >
                                        {/* Hover glow */}
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                                        
                                        <div className="relative bg-background rounded-xl p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm">
                                            {/* Number badge */}
                                            <div className="flex items-start gap-6">
                                                <div className="flex-shrink-0">
                                                    <div className="relative">
                                                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                                            <Icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                                            {step.number}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="space-y-2 pt-2">
                                                    <h3 className="font-semibold text-xl text-foreground">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Fade>

                    {/* CTA */}
                    <Fade triggerOnce delay={500}>
                        <div className="text-center">
                            <Button size="lg" className="group">
                                Arrancar ahora
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;