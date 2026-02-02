import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from "@/assets/logo.png";

function Header() {
    const headerRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
                            <div className="relative">
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                                {/* Logo container */}
                                <div className="relative transition-transform  ">
                                    <img
                                        src={logo}
                                        alt="AuroraLabs Logo"
                                        className="w-12 h-12 object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Inicio
                        </Link>
                        <a href="#servicios" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Servicios
                        </a>

                        {/* Dropdown Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                                Productos
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`absolute top-full mt-2 w-48 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top ${isDropdownOpen
                                    ? 'opacity-100 scale-100 translate-y-0'
                                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                                    }`}
                            >
                                <a href="#producto1"
                                    onClick={(e) => {
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                >
                                    Producto 1
                                </a>
                                <a
                                    href="#producto2"
                                    onClick={(e) => {
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                >
                                    Producto 2
                                </a>
                                <a
                                    href="#producto3"
                                    onClick={(e) => {
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                >
                                    Producto 3
                                </a>
                            </div>
                        </div>

                        <a href="#contacto" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Contacto
                        </a>
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden md:block">
                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm">
                            Comenzar
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-4 space-y-1">
                    <a
                        onClick={(e) => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                        }}
                        href="#inicio"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                        Inicio
                    </a>
                    <a
                        onClick={(e) => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                        }}
                        href="#servicios"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                        Servicios
                    </a>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                            Productos
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="ml-3 space-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-3">
                                <a href="#producto1"
                                    onClick={(e) => {
                                        setIsMenuOpen(false);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                                    Producto 1
                                </a>
                                <a href="#producto2" onClick={(e) => {
                                    setIsMenuOpen(false);
                                    setIsDropdownOpen(false);
                                }} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                                    Producto 2
                                </a>
                                <a href="#producto3" onClick={(e) => {
                                    setIsMenuOpen(false);
                                    setIsDropdownOpen(false);
                                }} className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors">
                                    Producto 3
                                </a>
                            </div>
                        </div>
                    </div>

                    <a
                        onClick={(e) => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                        }}
                        href="#contacto"
                        className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                        Contacto
                    </a>

                    <button className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-50 dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-sm">
                        Comenzar
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header