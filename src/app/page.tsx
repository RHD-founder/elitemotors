'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from 'react';

import Logo from "@/components/Logo";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cars = [
    {
      id: 1,
      regYear: '2019',
      name: 'Porsche 718 Boxster',
      price: '₹ 1,03,00,000',
      kilometers: '8700 km',
      fuel: 'Petrol',
      state: 'HP',
      image: '/c1.webp'
    },
    {
      id: 2,
      regYear: '2017',
      name: 'Ford Mustang GT',
      price: '₹ 65,00,000',
      kilometers: '39400 km',
      fuel: 'Petrol',
      state: 'Haryana',
      image: '/c2.jpg'
    },
    {
      id: 3,
      regYear: '2024',
      name: 'Range Rover Velar Dynamic',
      price: '₹ 80,00,000',
      kilometers: '12100 km',
      fuel: 'Petrol',
      state: 'Haryana',
      image: '/c3.jpg'
    }
  ];

  const nextCard = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % cars.length);
        setIsTransitioning(false);
      }, 150);
    }
  }, [isTransitioning, cars.length]);

  const prevCard = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev - 1 + cars.length) % cars.length);
        setIsTransitioning(false);
      }, 150);
    }
  }, [isTransitioning, cars.length]);

  // Touch/Swipe handlers for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }
  }, [touchStart, touchEnd, nextCard, prevCard]);

  // Auto-move carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 4000);
    return () => clearInterval(interval);
  }, [nextCard]);

  return (
    <div className="min-h-screen text-black bg-grid">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Logo size="medium" />
              </Link>
            </div>

            {/* Desktop Menu - Service Links with Phone Numbers */}
            <div className="hidden xl:block">
              <div className="flex items-center space-x-3">
                <a href="/sales" className="text-white hover:text-red-400 transition-colors font-medium text-x whitespace-nowrap">
                  BUY - 8135803360
                </a>
                <span className="text-white text-xl">|</span>
                <a href="/sales" className="text-white hover:text-red-400 transition-colors font-medium text-x whitespace-nowrap">
                  SELL -  9706127127
                </a>
                <span className="text-white text-xl">|</span>
                <a href="/services" className="text-white hover:text-red-400 transition-colors font-medium text-x whitespace-nowrap">
                  Services
                </a>
                <span className="text-white text-xl">|</span>
                <a href="/services" className="text-white hover:text-red-400 transition-colors font-medium text-x whitespace-nowrap">
                  Bookings
                </a>
                <span className="text-white text-xl">|</span>
                <a href="/services" className="text-white hover:text-red-400 transition-colors font-medium text-x whitespace-nowrap">
                  Contact
                </a>


              </div>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="xl:hidden">
              <button
                className="text-white hover:text-red-400 p-2 flex items-center space-x-2"
                aria-label="Open mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="font-medium text-sm">MENU</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a href="/sales" className="block text-white hover:text-red-400 transition-colors font-medium text-sm py-2">
                BUY - 8135803360
              </a>
              <a href="/sales" className="block text-white hover:text-red-400 transition-colors font-medium text-sm py-2">
                SELL -  9706127127
              </a>
              <a href="/services" className="block text-white hover:text-red-400 transition-colors font-medium text-sm py-2">
                CAR DETAILING - 8135803360
              </a>
              <a href="/services" className="block text-white hover:text-red-400 transition-colors font-medium text-sm py-2">
                SERVICING -  9706127127
              </a>
              <a href="/services" className="block text-white hover:text-red-400 transition-colors font-medium text-sm py-2">
                MODIFICATION - 8135803360
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/porsche-911-turbo-s-hero.jpg"
            alt="Elite Motors Service - Premium Car Service"
            fill
            priority
            className="object-cover"
            style={{
              objectPosition: 'center center'
            }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content - Porsche Style */}
        <div className="relative z-10 w-full h-full flex items-end">
          <div className="w-full px-8 pb-20">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-thin text-white tracking-wide leading-tight mb-8 ml-16">
                One of a kind.
              </h1>
              <button className="bg-transparent border border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg font-normal transition-all duration-300 ml-16">
                Discover Elite Motors Service
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Your Elite Motors Journey Section - Porsche Style */}
      <section className="py-20 bg-white">
        <div className="text-left mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-thin text-black mb-8 ml-16">
            Your Elite Motors journey starts now.
          </h2>
        </div>
        {/* Car Image Slider */}
        <div className="mb-16">
          {/* Mobile: Full Width Card View */}
          <div className="lg:hidden w-full px-4 py-6">
            <div className="relative w-full max-w-md mx-auto">
              {/* Card Container with overflow hidden */}
              <div className="overflow-hidden rounded-xl">
                {/* Sliding wrapper */}
                <div
                  className="flex carousel-transform"
                  style={{
                    transform: `translateX(-${currentCard * 100}%)`,
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {cars.map((car) => (
                    <div key={car.id} className="w-full flex-shrink-0">
                      <div
                        className="w-full rounded-xl shadow-xl bg-card-cream mobile-card"
                      >
                        {/* Top Section - Car Details */}
                        <div className="h-1/2 p-6 flex flex-col justify-center bg-card-cream">
                          <div className="bg-black text-white px-4 py-2 rounded-full text-sm w-fit mb-4 font-medium">
                            Reg. Year : {car.regYear}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-black leading-tight">{car.name}</h3>
                          <p className="text-2xl font-bold mb-4 text-black">{car.price}</p>
                          <div className="grid grid-cols-3 gap-3 mt-auto">
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-2 font-medium">Kilometers Driven</div>
                              <div className="text-sm font-bold text-black">{car.kilometers}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-2 font-medium">Fuel / Gas Type</div>
                              <div className="text-sm font-bold text-black">{car.fuel}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-2 font-medium">Registration State</div>
                              <div className="text-sm font-bold text-black">{car.state}</div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Section - Car Image */}
                        <div className="h-1/2 relative">
                          <Image
                            src={car.image}
                            alt={car.name}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Three Cards View with Arrows */}
          <div className="hidden lg:block mx-20">
            <div className="flex items-center gap-4">
              {/* Left Navigation Arrow - Desktop Only */}
              <button
                onClick={prevCard}
                className="flex-shrink-0 text-black rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous car">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Desktop: Three Cards View */}
              <div className="flex h-[626px] gap-6 justify-center items-center flex-1">
                {cars.map((car) => (
                  <div key={car.id} className="w-full max-w-[400px] h-full rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-card-cream">
                    {/* Top Section - Car Details */}
                    <div className="h-1/2 p-6 lg:p-8 flex flex-col justify-center bg-card-cream">
                      <div className="bg-black text-white px-3 py-1 rounded-full text-sm w-fit mb-4 font-medium">
                        Reg. Year : {car.regYear}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold mb-3 text-black leading-tight">{car.name}</h3>
                      <p className="text-xl lg:text-2xl font-bold mb-4 text-black">{car.price}</p>
                      <div className="grid grid-cols-3 gap-2 mt-auto">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Kilometers Driven</div>
                          <div className="text-sm font-bold text-black">{car.kilometers}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Fuel / Gas Type</div>
                          <div className="text-sm font-bold text-black">{car.fuel}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1 font-medium">Registration State</div>
                          <div className="text-sm font-bold text-black">{car.state}</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section - Car Image */}
                    <div className="h-1/2 relative">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Navigation Arrow - Desktop Only */}
              <button
                onClick={nextCard}
                className="flex-shrink-0 text-black rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next car">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



        </div>
      </section>

      {/* Find Your Service Section - Porsche Style */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin mb-6">
                Find your perfect service.
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Elite Motors Service helps you find the perfect automotive service solution.
                From routine maintenance to premium detailing, we have everything you need
                to keep your vehicle in perfect condition.
              </p>
              <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-white/90 transition-colors duration-300">
                Find Your Service
              </button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/porsche-911-turbo-s-hero.jpg"
                alt="Elite Motors Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section - Porsche Style */}
      {/* Valued Added Services (VAS) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-black mb-8">
              Valued Added Services (VAS)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Teflon Coating */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Teflon Coating</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 15,000</p>
                <p className="text-sm text-gray-600">Premium paint protection</p>
              </div>
            </div>

            {/* Ceramic Coating */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ceramic Coating</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 25,000</p>
                <p className="text-sm text-gray-600">Long-lasting protection</p>
              </div>
            </div>

            {/* PPF */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PPF</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 35,000</p>
                <p className="text-sm text-gray-600">Paint protection film</p>
              </div>
            </div>

            {/* Interior Cleaning */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interior Cleaning</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 8,000</p>
                <p className="text-sm text-gray-600">Deep interior detailing</p>
              </div>
            </div>

            {/* Alloy Cleaning */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alloy Cleaning</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 5,000</p>
                <p className="text-sm text-gray-600">Wheel restoration</p>
              </div>
            </div>

            {/* Engine Cleaning */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Engine Cleaning</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 12,000</p>
                <p className="text-sm text-gray-600">Engine bay detailing</p>
              </div>
            </div>

            {/* Glass Cleaning */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Glass Cleaning</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 3,000</p>
                <p className="text-sm text-gray-600">Crystal clear windows</p>
              </div>
            </div>

            {/* Total Body Iron Removal */}
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/90 hover:backdrop-blur-md hover:shadow-xl hover:border-red-300/50 hover:shadow-red-100/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Body Iron Removal</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">₹ 6,000</p>
                <p className="text-sm text-gray-600">Contaminant removal</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer - Porsche Style */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Current Region/Language */}
            <div>
              <div className="text-sm text-white/60 mb-4">
                You are currently viewing content for
              </div>
              <div className="text-white mb-2">India / English</div>
              <a href="#" className="text-white/60 hover:text-white text-sm underline">
                Change
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <div className="text-sm text-white/60 mb-4">Newsletter</div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="text-sm text-white/60 mb-4">Contact</div>
              <button className="bg-transparent border border-white/50 text-white px-6 py-2 text-sm font-medium hover:bg-white/10 hover:border-white transition-colors">
                Get in touch
              </button>
            </div>

            {/* Social Media */}
            <div>
              <div className="text-sm text-white/60 mb-4">Follow us</div>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Pinterest">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 1.858-.896 3.46-2.07 4.667-1.17 1.203-2.78 1.93-4.498 1.93-1.718 0-3.328-.727-4.498-1.93-1.174-1.207-1.901-2.809-2.07-4.667-.02-.22-.02-.44-.02-.66 0-.22 0-.44.02-.66.169-1.858.896-3.46 2.07-4.667C8.672 1.727 10.282 1 12 1s3.328.727 4.498 1.93c1.174 1.207 1.901 2.809 2.07 4.667.02.22.02.44.02.66 0 .22 0 .44-.02.66z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="text-sm font-medium text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Global Partnership</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsroom & Press</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Service Appointment</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">VAS Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Service Packages</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Customer Feedback</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-4">Sales Features</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Catalogue</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">360° View</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Photo Gallery</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Booking System</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li className="hover:text-white transition-colors">
                    Address: Next to KIA Motors, Garalia, Lokhra<br />
                    Near Sarusajai Stadium<br />
                    Guwahati, Kamrup Metropolitan<br />
                    Assam, 781040
                  </li>
                  <li><a href="#" className="hover:text-white transition-colors">Phone: +91 8135803360</a></li>
                  <li><a href="mailto:elitemotorsghy@gmail.com" className="hover:text-white transition-colors">Email: elitemotorsghy@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="text-2xl font-bold text-white mb-4">ELITE MOTORS SERVICE</div>
            <p className="text-sm text-white/60">
              &copy; 2025 Elite Motors Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
