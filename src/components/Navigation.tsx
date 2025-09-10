import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
    const [mobileView, setMobileView] = useState<'navigation' | 'models'>('navigation');

    // Disable main page scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Reset mobile view when menu closes
    useEffect(() => {
        if (!isMobileMenuOpen) {
            setMobileView('navigation');
        }
    }, [isMobileMenuOpen]);
    return (
        <>
            {/* Top Navigation Overlay */}
            <div className="absolute top-0 left-0 right-0 z-20">
                {/* Menu Button - Top Left */}
                <div className="absolute top-6 left-6">
                    <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>

                {/* Center Logo */}
                <div className="flex justify-center pt-6">
                    <Logo size="large" />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-transparent overflow-hidden">
                    {/* Mobile Navigation - Simple List */}
                    <div className="md:hidden bg-white h-full w-full">
                        {/* Header */}
                        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
                            {mobileView === 'navigation' ? (
                                <Logo size="small" />
                            ) : (
                                <button
                                    onClick={() => setMobileView('navigation')}
                                    className="flex items-center justify-center text-gray-600 hover:text-gray-800"
                                    aria-label="Back to navigation"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-600 hover:text-gray-800"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Menu */}
                        {mobileView === 'navigation' && (
                            <div className="px-4 py-6">
                                <nav className="space-y-2">
                                    <button
                                        onClick={() => setMobileView('models')}
                                        className="w-full flex items-center justify-between py-4 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
                                    >
                                        <span className="text-lg font-bold">Models</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <Link
                                        href="/services"
                                        className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-bold">Vehicle Purchase</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-bold">Services</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <a href="#" className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                                        <span className="text-lg font-bold">Experience</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="#" className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                                        <span className="text-lg font-bold">Find a Dealer</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        )}

                        {/* Models Content */}
                        {mobileView === 'models' && (
                            <div className="px-4 py-4 h-full overflow-y-auto">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Models</h2>

                                <div className="space-y-4">
                                    {/* 911 Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">911</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">911</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                        </div>
                                    </div>

                                    {/* Taycan Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">Taycan</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Taycan</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Electric</span>
                                        </div>
                                    </div>

                                    {/* Panamera Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">Panamera</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Panamera</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                        </div>
                                    </div>

                                    {/* Macan Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">Macan</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Macan</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Electric</span>
                                                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cayenne Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">Cayenne</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Cayenne</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                        </div>
                                    </div>

                                    {/* 718 Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">718</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">718</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                        </div>
                                    </div>

                                    {/* 911 GT3 Model */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-20 h-14 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm font-bold">GT3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">911 GT3</h3>
                                            <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Gasoline</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop Three-Column Layout */}
                    <div className="hidden md:flex h-full">
                        {/* Left Column - Navigation */}
                        <div className="w-1/3 bg-white">
                            {/* Header */}
                            <div className="flex justify-center items-center px-4 py-4 border-b border-gray-200">
                                <Logo size="small" />
                            </div>

                            {/* Navigation Menu */}
                            <div className="px-4 py-4">
                                <nav className="space-y-2">
                                    <Link
                                        href="/models"
                                        className="flex items-center justify-between py-3 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-bold">Models</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-bold">Vehicle Purchase</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-lg font-bold">Services</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <a href="#" className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                                        <span className="text-lg font-bold">Experience</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a href="#" className="flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                                        <span className="text-lg font-bold">Find a Dealer</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>

                        {/* Middle Column - Car Models with Scrollbar */}
                        <div className="w-1/3 bg-gray-50 overflow-y-auto max-h-screen">
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Models</h2>

                                {/* Car Models List */}
                                <div className="space-y-8 pb-8">
                                    {/* 911 Model */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">911 Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">911</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Taycan Model */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">Taycan Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Taycan</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Electric</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Panamera Model */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">Panamera Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Panamera</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Macan Model */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">Macan Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Macan</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Electric</span>
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cayenne Model */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">Cayenne Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Cayenne</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Models for Scrolling */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">718 Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">718</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">911 GT3 Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">911 GT3</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Gasoline</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <div className="w-32 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-600 text-sm">Taycan Cross Turismo Image</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Taycan Cross Turismo</h3>
                                            <div className="flex space-x-2">
                                                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">Electric</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Dark Blurred Panel - NO SCROLLBAR */}
                        <div className="w-1/3 relative bg-black/80 backdrop-blur-sm overflow-hidden">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 left-4 text-white hover:text-gray-300 z-10"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Exit WhatFont Button */}
                            <button className="absolute top-4 right-4 text-white text-sm hover:text-gray-300 z-10">
                                Exit WhatFont
                            </button>

                            {/* Blurred Background Content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
