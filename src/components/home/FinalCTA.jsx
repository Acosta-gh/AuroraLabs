import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function FinalCTA() {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative">
                <Fade triggerOnce direction="up" cascade damping={0.1}>
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        
                        {/* Main content */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Empezá a convertir visitas en clientes
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Hablemos de tu proyecto. Sin compromisos, sin letra chica.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button size="lg" className="group">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Contactar por WhatsApp
                            </Button>
                            
                            <Button size="lg" variant="outline" className="group">
                                <Mail className="mr-2 h-5 w-5" />
                                Enviar consulta
                            </Button>
                        </div>

                        {/* Trust element */}
                        <div className="pt-8">
                            <p className="text-sm text-muted-foreground">
                                Respuesta en menos de 24 horas
                            </p>
                        </div>

                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default FinalCTA;