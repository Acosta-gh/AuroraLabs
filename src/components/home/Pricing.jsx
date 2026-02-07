import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

function Pricing() {
    const plans = [
        {
            name: "Plan Landing",
            tagline: "Presencia profesional y rápida",
            price: "$XX.XXX",
            priceDetail: "/mes",
            features: [
                "Desarrollo de Landing Page a medida",
                "Hosting de alta velocidad + Dominio incluido",
                "Certificado SSL de seguridad (HTTPS)",
                "1 Cambio de contenido mensual",
                "Botón de WhatsApp configurado",
                "Alta en Google Maps (My Business)",
                "Soporte técnico por WhatsApp"
            ],
            notIncluded: [
                "Sin panel de carga de productos",
                "Sin reportes de métricas"
            ],
            cta: "Empezar ahora",
            variant: "outline"
        },
        {
            name: "Plan Empresa",
            tagline: "Promo: 30% OFF primer mes",
            price: "$XX.XXX",
            priceDetail: "/mes",
            popular: true,
            features: [
                "Todo el Plan Landing +",
                "Web Institucional (hasta 5 secciones)",
                "3 Cambios de contenido mensuales",
                "Correos corporativos (info@tuempresa)",
                "Optimización de velocidad permanente",
                "Backups semanales automáticos",
                "🎁 Bono: Diseño de 2 banners promocionales"
            ],
            notIncluded: [
                "Sin carrito de compras"
            ],
            cta: "Elegir Promo Primer Cliente",
            variant: "default"
        },
        {
            name: "Plan E-commerce",
            tagline: "Tu tienda abierta 24/7",
            price: "$XX.XXX",
            priceDetail: "/mes",
            features: [
                "Todo el Plan Empresa +",
                "Tienda Online con Carrito",
                "Carga inicial de productos",
                "Integración con Mercado Pago / Tarjetas",
                "Cambios ilimitados en catálogo",
                "Capacitación para gestión de stock",
                "Reporte mensual de visitas y ventas",
                "Soporte Prioritario VIP"
            ],
            notIncluded: [],
            cta: "Lanzar mi Tienda",
            variant: "outline"
        }
    ];

    return (
        <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <Fade triggerOnce direction="up">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Planes y mantenimiento
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Elegí cómo querés trabajar después de entregar tu web
                            </p>
                        </div>
                    </Fade>

                    {/* Pricing Cards */}
                    <Fade triggerOnce cascade damping={0.1} delay={200}>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {plans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`relative bg-background rounded-xl p-8 border transition-all hover:shadow-lg ${plan.popular
                                        ? 'border-primary shadow-md scale-105 md:scale-105'
                                        : 'border-border/50 hover:border-border'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                                Más elegido
                                            </span>
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="text-center mb-6 pb-6 border-b border-border/50">
                                        <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                                        <div className="mb-2">
                                            <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                            <span className="text-muted-foreground ml-1">{plan.priceDetail}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm">
                                                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {plan.notIncluded.length > 0 && (
                                            <ul className="space-y-3 pt-4 border-t border-border/30">
                                                {plan.notIncluded.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm">
                                                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        size="lg"
                                        variant={plan.variant}
                                        className="w-full group"
                                    >
                                        {plan.cta}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Fade>

                    {/* Bottom note */}
                    <Fade triggerOnce delay={400}>
                        <div className="bg-background rounded-xl p-6 border border-border/50 text-center max-w-3xl mx-auto">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Importante:</strong> Para poder mantener, actualizar y modificar el sitio según tus necesidades, el hosting es gestionado por mí.
                                Esto permite resolver cambios, ajustes y mejoras de forma rápida y sin complicaciones técnicas.
                                El dominio puede estar a tu nombre o puedo gestionarlo yo, según prefieras.
                                Si en algún momento decidís dejar de pagar la mensualidad, se entregan todos los archivos y el sitio queda en tu poder.

                            </p>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    );
}

export default Pricing;