import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import hero from "@/assets/hero.png";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const fadeToSubtleSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

function Hero() {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content - Text & CTA */}
                <div className="space-y-8">

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Impulsá tu negocio digital desde hoy
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl">
                            Desarrollo páginas web, landing pages, e-commerce y bots de WhatsApp enfocados en convertir visitas en clientes.
                        </p>
                    </div>

                    {/* Features list */}
                    <div className="flex flex-wrap gap-3">
                        {['Diseño Moderno', 'Desarrollo a medida', 'Acompañamiento personalizado'].map((feature) => (
                            <div
                                key={feature}
                                className="px-4 py-2 rounded-md border bg-background"
                            >
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg">
                            Ver planes
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Button size="lg" variant="outline">
                            Ver Proyectos
                        </Button>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-6 pt-6 border-t">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-sm font-medium"
                                >
                                    {i}
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-semibold">+50 Clientes Satisfechos</p>
                            <p className="text-xs text-muted-foreground">Proyectos entregados con éxito</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative lg:h-[600px] bottom-10">
                    <Fade
                        triggerOnce
                        keyframes={fadeToSubtleSlideDown}
                        duration={1600}
                        easing="ease-out"
                    >
                        <div className="relative h-full overflow-hidden">
                            <img
                                src={hero}
                                alt="Aurora Labs - Desarrollo Digital"
                                className="w-full h-full object-cover drop-shadow-sm"
                            />
                        </div>
                    </Fade>

                </div>

            </div>
        </section>
    );
}

export default Hero;