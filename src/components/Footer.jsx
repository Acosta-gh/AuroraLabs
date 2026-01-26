import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main content */}
                <div className="text-center space-y-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2.5">
                            {/* Logo container */}
                            <div className="relative transition-transform  ">
                                <img
                                    src={logo}
                                    alt="AuroraLabs Logo"
                                    className="w-12 h-12 object-contain drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                AuroraLabs
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                            Emprendimiento digital dedicado a crear experiencias web increíbles
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

                    {/* Info */}
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <p className="flex items-center justify-center gap-2">
                            Operado y administrado por{" "}
                            <span className="text-gray-900 dark:text-gray-100 font-medium">
                                <a
                                    href="https://www.acosta.net.ar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >Cristian Darío Acosta</a>
                            </span>
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="pt-4">
                        <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center gap-1.5">
                            © {new Date().getFullYear()} AuroraLabs. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;