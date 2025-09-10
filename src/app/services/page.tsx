'use client';
import Image from "next/image";
import { PButton, PText, PHeading, PIcon } from '@porsche-design-system/components-react/ssr';

export default function Services() {

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}


            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/porsche-911-turbo-s-hero.jpg"
                        alt="Elite Motors Service - Premium Car Service"
                        fill
                        priority
                        className="object-cover md:scale-110 scale-100"
                        style={{
                            objectPosition: '70% 30%'
                        }}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full h-full flex items-end justify-center">
                    <div className="text-center pb-16">
                        <h1 className="text-5xl md:text-7xl font-thin text-white tracking-wide leading-tight mb-8">
                            Our Services
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Comprehensive automotive services with premium quality and precision
                        </p>
                        <button
                            className="bg-red-600/90 backdrop-blur-sm border border-red-500 text-white hover:bg-red-700 hover:border-red-400 px-8 py-4 text-lg font-normal transition-all rounded-sm"
                        >
                            Book Service Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Service Appointment Section */}
            <section className="py-20 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <PHeading tag="h2" size="x-large" className="mb-4">
                            Service Appointment
                        </PHeading>
                        <PText size="medium" className="text-gray-600 max-w-2xl">
                            Schedule your vehicle service appointment with our certified technicians. We provide comprehensive maintenance and repair services.
                        </PText>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <PIcon name="car" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <PHeading tag="h3" size="medium" className="mb-2">Regular Maintenance</PHeading>
                                        <PText size="small" className="text-gray-600">
                                            Keep your vehicle running smoothly with our comprehensive maintenance services including oil changes, filter replacements, and system checks.
                                        </PText>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <PIcon name="car" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <PHeading tag="h3" size="medium" className="mb-2">Diagnostic Services</PHeading>
                                        <PText size="small" className="text-gray-600">
                                            Advanced diagnostic equipment to identify and resolve any issues with your vehicle&apos;s systems and components.
                                        </PText>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <PIcon name="car" className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <PHeading tag="h3" size="medium" className="mb-2">Repair Services</PHeading>
                                        <PText size="small" className="text-gray-600">
                                            Expert repair services for all makes and models using genuine parts and state-of-the-art equipment.
                                        </PText>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8">
                            <PHeading tag="h3" size="medium" className="mb-6 text-center">Book Your Service</PHeading>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Make & Model</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="e.g., BMW X5"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        aria-label="Select service type"
                                    >
                                        <option>Regular Maintenance</option>
                                        <option>Diagnostic Service</option>
                                        <option>Repair Service</option>
                                        <option>Emergency Service</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        aria-label="Select preferred service date"
                                    />
                                </div>
                                <PButton variant="primary" className="w-full">
                                    Book Appointment
                                </PButton>
                            </form>
                        </div>
                    </div>
                </div>
            </section>








        </div>
    );
}
