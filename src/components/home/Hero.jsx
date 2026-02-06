import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
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
        <section className="container mx-auto px-6 py-25 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 relative z-10">

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Páginas web que generan consultas y ventas
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl">
                            Tu web debería ser tu mejor vendedor, no un adorno. Creemos una página que trabaje 24/7 para traerte clientes, no solo visitas.
                        </p>
                    </div>

                    {/* Social proof rápido */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div>
                            <span className="block text-2xl font-bold text-foreground">+15</span>
                            <span>proyectos</span>
                        </div>
                        <div className="h-8 w-px bg-border"></div>
                        <div>
                            <span className="block text-2xl font-bold text-foreground">24-72hs</span>
                            <span>respuesta</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            Consultar por WhatsApp
                        </Button>

                        <Button size="lg" variant="outline">
                            Ver proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
                    <Fade
                        triggerOnce
                        keyframes={fadeToSubtleSlideDown}
                        duration={1600}
                        easing="ease-out"
                    >
                        <div className="absolute right-[-8rem] top-[-5rem] w-[600px] h-[600px] opacity-40">
                            <img
                                src={hero}
                                alt="Desarrollo web profesional"
                                className="w-full h-full object-contain drop-shadow-sm"
                            />
                        </div>
                    </Fade>
                </div>

                <div className="hidden lg:block relative lg:h-[600px] bottom-25 opacity-80">
                    <Fade
                        triggerOnce
                        keyframes={fadeToSubtleSlideDown}
                        duration={1600}
                        easing="ease-out"
                    >
                        <div className="relative h-full overflow-hidden">
                            <img
                                src={hero}
                                alt="Desarrollo web profesional"
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