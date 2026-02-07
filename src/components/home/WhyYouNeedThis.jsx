import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowRight, Smartphone, Monitor, DollarSign } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function WhyYouNeedThis() {
    const issues = [
        {
            problem: "Te buscan y no te encuentran",
            impact: "Tus competidores aparecen primero en Google",
            stat: "70% de la gente busca online antes de comprar",
            icon: AlertCircle,
        },
        {
            problem: "Tu web se ve mal en celulares",
            impact: "El 80% de tus visitas vienen del celular",
            stat: "Se van en menos de 3 segundos",
            icon: Smartphone,
        },
        {
            problem: "No sabés si tu web funciona",
            impact: "Sin datos, sin mejoras, sin crecimiento",
            stat: "La mayoría pierde ventas y no lo sabe",
            icon: Monitor,
        },
        {
            problem: "Pagaste caro y no viste resultados",
            impact: "Diseño lindo, cero consultas nuevas",
            stat: "El 60% de las webs no generan ROI",
            icon: DollarSign,
        }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <Fade triggerOnce direction="up" cascade damping={0.1}>
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Tu negocio necesita una web que trabaje para vos
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Sin web, o con una que no funciona, estás perdiendo clientes todos los días.
                            </p>
                        </div>
                    </Fade>

                    {/* Main Message Card - VERSIÓN CORTA */}
                    <Fade triggerOnce delay={200}>
                        <div className="relative mb-12">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 blur-2xl rounded-2xl"></div>

                            <div className="relative bg-background rounded-xl p-8 md:p-10 border border-border/50 shadow-sm">
                                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                                    Si un cliente los busca en Google y no están, para ese cliente el negocio no existe o es poco profesional.
                                </p>
                                <p className="mt-4 font-semibold text-foreground text-base md:text-lg">
                                    Una buena página web no es un gasto: es una herramienta de ventas que trabaja 24/7.
                                </p>
                            </div>
                        </div>
                    </Fade>

                    {/* Issues Grid */}
                    <Fade triggerOnce cascade damping={0.1} delay={300}>
                        <div className="grid sm:grid-cols-2 gap-4 mb-14">
                            {issues.map((issue, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

                                    <div className="relative bg-background rounded-lg p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                            <issue.icon className="h-6 w-6 text-primary" />
                                        </div>

                                        <p className="font-semibold text-foreground mb-3">
                                            {issue.problem}
                                        </p>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {issue.impact}
                                        </p>
                                        <p className="text-xs text-primary font-medium">
                                            → {issue.stat}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>

                    {/* CTA */}
                    <Fade triggerOnce delay={500}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="group">
                                Ver qué incluye cada proyecto
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button size="lg" variant="outline">
                                Consultar presupuesto
                            </Button>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    );
}

export default WhyYouNeedThis;