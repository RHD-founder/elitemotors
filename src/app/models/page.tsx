'use client';

import Link from "next/link";
import { PButton, PText, PHeading, PGrid, PGridItem, PAccordion, PIcon, PTag, PTable, PTableHead, PTableHeadCell, PTableBody, PTableRow, PTableCell, PModal } from '@porsche-design-system/components-react/ssr';

import { useState } from 'react';

interface Model {
    id: string;
    name: string;
    category: string;
    price: string;
    description: string;
    features: string[];
    image: string;
    variants: string[];
}

export default function ModelsPage() {
    const [selectedModel, setSelectedModel] = useState<Model | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const models = [
        {
            id: '911',
            name: '911',
            category: 'Sports Cars',
            price: 'From $114,400',
            description: 'The iconic sports car that defines performance and precision.',
            features: ['0-60 mph in 3.2s', 'Top speed 191 mph', 'PDK transmission', 'PASM suspension'],
            image: '911 Image',
            variants: ['Carrera', 'Carrera S', 'Carrera 4S', 'Turbo', 'Turbo S', 'GT3', 'GT3 RS']
        },
        {
            id: 'taycan',
            name: 'Taycan',
            category: 'Electric',
            price: 'From $90,900',
            description: 'The future of electric mobility with uncompromising performance.',
            features: ['0-60 mph in 2.6s', 'Range up to 201 miles', '800V architecture', 'Porsche Electric Sport Sound'],
            image: 'Taycan Image',
            variants: ['Taycan', 'Taycan 4S', 'Taycan Turbo', 'Taycan Turbo S', 'Taycan Cross Turismo']
        },
        {
            id: 'cayenne',
            name: 'Cayenne',
            category: 'SUV',
            price: 'From $72,300',
            description: 'The perfect blend of sports car performance and SUV versatility.',
            features: ['0-60 mph in 5.9s', 'Towing capacity 7,716 lbs', 'Air suspension', 'PASM adaptive damping'],
            image: 'Cayenne Image',
            variants: ['Cayenne', 'Cayenne S', 'Cayenne GTS', 'Cayenne Turbo', 'Cayenne E-Hybrid']
        },
        {
            id: 'macan',
            name: 'Macan',
            category: 'SUV',
            price: 'From $57,500',
            description: 'Compact SUV with sports car DNA and everyday practicality.',
            features: ['0-60 mph in 6.0s', 'Cargo capacity 19.8 cu ft', 'PDK transmission', 'PASM suspension'],
            image: 'Macan Image',
            variants: ['Macan', 'Macan S', 'Macan GTS', 'Macan Turbo']
        },
        {
            id: 'panamera',
            name: 'Panamera',
            category: 'Luxury Sedan',
            price: 'From $88,200',
            description: 'Luxury sedan with sports car performance and executive comfort.',
            features: ['0-60 mph in 3.8s', 'Top speed 196 mph', 'PDK transmission', 'Air suspension'],
            image: 'Panamera Image',
            variants: ['Panamera', 'Panamera 4', 'Panamera 4S', 'Panamera Turbo', 'Panamera Turbo S']
        },
        {
            id: '718',
            name: '718',
            category: 'Sports Cars',
            price: 'From $60,500',
            description: 'Pure sports car driving pleasure with mid-engine layout.',
            features: ['0-60 mph in 4.2s', 'Top speed 170 mph', 'PDK transmission', 'PASM suspension'],
            image: '718 Image',
            variants: ['718 Cayman', '718 Boxster', '718 Cayman S', '718 Boxster S', '718 Cayman GTS', '718 Boxster GTS']
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-porsche-red rounded-sm flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">P</span>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 tracking-[0.1em] porsche-text-shadow">PORSCHE</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/models" className="text-porsche-red font-medium">Models</Link>
                                <Link href="/services" className="text-gray-700 hover:text-porsche-red transition-colors font-medium">Services</Link>
                                <a href="#" className="text-gray-700 hover:text-porsche-red transition-colors font-medium">Experience</a>
                                <a href="#" className="text-gray-700 hover:text-porsche-red transition-colors font-medium">Company</a>
                                <a href="#" className="text-gray-700 hover:text-porsche-red transition-colors font-medium">Contact</a>
                            </div>
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:block">
                            <PButton variant="primary" className="bg-porsche-red hover:bg-red-700">
                                Find a Dealer
                            </PButton>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <PHeading tag="h1" size="xx-large" className="mb-6 text-gray-900">
                            Our Models
                        </PHeading>
                        <PText size="large" className="text-gray-600 max-w-3xl mx-auto">
                            Discover the complete range of Porsche vehicles. From the iconic 911 to the versatile Cayenne,
                            find the perfect Porsche that matches your lifestyle and driving aspirations.
                        </PText>
                    </div>
                </div>
            </section>

            {/* Models Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PGrid>
                        {models.map((model) => (
                            <PGridItem key={model.id} size={12}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-gray-500 text-lg">{model.image}</span>
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <PButton
                                                variant="secondary"
                                                className="bg-white text-black"
                                                onClick={() => {
                                                    setSelectedModel(model);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                Quick View
                                            </PButton>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <PHeading tag="h3" size="medium" className="text-gray-900">
                                                {model.name}
                                            </PHeading>
                                            <PTag color="background-base" className="text-porsche-red">
                                                {model.category}
                                            </PTag>
                                        </div>
                                        <PText size="small" className="text-gray-600 mb-4">
                                            {model.description}
                                        </PText>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-lg font-bold text-gray-900">{model.price}</div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <PIcon name="car" className="w-4 h-4 text-porsche-red mr-1" />
                                                {model.features[0]}
                                            </div>
                                        </div>

                                        <PAccordion>
                                            <div className="mb-4">
                                                <PHeading tag="h4" size="small" className="mb-2">Key Features</PHeading>
                                                <ul className="space-y-2 text-sm text-gray-600">
                                                    {model.features.map((feature, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <PIcon name="check" className="w-4 h-4 text-porsche-red mr-2" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mb-4">
                                                <PHeading tag="h4" size="small" className="mb-2">Available Variants</PHeading>
                                                <div className="flex flex-wrap gap-2">
                                                    {model.variants.map((variant, index) => (
                                                        <PTag key={index} color="background-base" className="text-gray-700">
                                                            {variant}
                                                        </PTag>
                                                    ))}
                                                </div>
                                            </div>
                                        </PAccordion>

                                        <div className="mt-6 flex gap-2">
                                            <PButton variant="primary" className="flex-1">
                                                Configure
                                            </PButton>
                                            <PButton
                                                variant="secondary"
                                                className="flex-1"
                                                onClick={() => {
                                                    setSelectedModel(model);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                Learn More
                                            </PButton>
                                        </div>
                                    </div>
                                </div>
                            </PGridItem>
                        ))}
                    </PGrid>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <PHeading tag="h2" size="x-large" className="mb-4">
                            Compare Models
                        </PHeading>
                        <PText size="medium" className="text-gray-600">
                            Find the perfect Porsche by comparing specifications and features.
                        </PText>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <PTable>
                            <PTableHead>
                                <PTableRow>
                                    <PTableHeadCell>Model</PTableHeadCell>
                                    <PTableHeadCell>Starting Price</PTableHeadCell>
                                    <PTableHeadCell>0-60 mph</PTableHeadCell>
                                    <PTableHeadCell>Top Speed</PTableHeadCell>
                                    <PTableHeadCell>Category</PTableHeadCell>
                                </PTableRow>
                            </PTableHead>
                            <PTableBody>
                                {models.map((model) => (
                                    <PTableRow key={model.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => {
                                        setSelectedModel(model);
                                        setIsModalOpen(true);
                                    }}>
                                        <PTableCell>
                                            <div className="flex items-center">
                                                <PIcon name="car" className="w-5 h-5 text-porsche-red mr-3" />
                                                <div className="text-sm font-medium text-gray-900">{model.name}</div>
                                            </div>
                                        </PTableCell>
                                        <PTableCell>
                                            <div className="text-sm text-gray-900 font-medium">{model.price}</div>
                                        </PTableCell>
                                        <PTableCell>
                                            <div className="flex items-center text-sm text-gray-900">
                                                <PIcon name="car" className="w-4 h-4 text-porsche-red mr-2" />
                                                {model.features[0]}
                                            </div>
                                        </PTableCell>
                                        <PTableCell>
                                            <div className="text-sm text-gray-900">{model.features[1]}</div>
                                        </PTableCell>
                                        <PTableCell>
                                            <PTag color="background-base" className="text-porsche-red">
                                                {model.category}
                                            </PTag>
                                        </PTableCell>
                                    </PTableRow>
                                ))}
                            </PTableBody>
                        </PTable>
                    </div>
                </div>
            </section>

            {/* Model Detail Modal */}
            {selectedModel && (
                <PModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    heading={`${selectedModel.name} - Detailed Information`}
                >
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-gray-500 text-lg">{selectedModel.image}</span>
                                </div>
                                <div className="text-center">
                                    <PHeading tag="h3" size="large" className="mb-2">{selectedModel.name}</PHeading>
                                    <PTag color="background-base" className="text-porsche-red mb-4">
                                        {selectedModel.category}
                                    </PTag>
                                    <div className="text-2xl font-bold text-gray-900 mb-4">{selectedModel.price}</div>
                                </div>
                            </div>
                            <div>
                                <PHeading tag="h4" size="medium" className="mb-4">Key Features</PHeading>
                                <ul className="space-y-3 mb-6">
                                    {selectedModel.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <PIcon name="check" className="w-5 h-5 text-porsche-red mr-3" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <PHeading tag="h4" size="medium" className="mb-4">Available Variants</PHeading>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedModel.variants.map((variant, index) => (
                                        <PTag key={index} color="background-base" className="text-gray-700">
                                            {variant}
                                        </PTag>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <PButton variant="primary" className="flex-1">
                                        Configure Now
                                    </PButton>
                                    <PButton variant="secondary" className="flex-1">
                                        Find Dealer
                                    </PButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </PModal>
            )}

            {/* Call to Action */}
            <section className="py-16 bg-porsche-red text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <PHeading tag="h2" size="x-large" className="mb-6">
                        Ready to Find Your Perfect Porsche?
                    </PHeading>
                    <PText size="medium" className="mb-8 text-red-100">
                        Visit your nearest Porsche Centre to experience these models firsthand,
                        or start configuring your dream Porsche online.
                    </PText>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PButton variant="secondary" className="bg-white text-porsche-red hover:bg-gray-100">
                            Find a Dealer
                        </PButton>
                        <PButton variant="secondary" className="border-white text-white hover:bg-white hover:text-porsche-red">
                            Start Configuration
                        </PButton>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold porsche-red mb-4 tracking-[0.1em] porsche-text-shadow">PORSCHE</div>
                            <PText size="small" className="text-gray-400">
                                There is no substitute for excellence.
                            </PText>
                        </div>
                        <div>
                            <PHeading tag="h4" size="small" className="mb-4">Models</PHeading>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">911</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Taycan</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cayenne</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Macan</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Panamera</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">718</a></li>
                            </ul>
                        </div>
                        <div>
                            <PHeading tag="h4" size="small" className="mb-4">Services</PHeading>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Porsche Connect</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Service & Parts</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Porsche Financial Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Porsche Classic</a></li>
                            </ul>
                        </div>
                        <div>
                            <PHeading tag="h4" size="small" className="mb-4">Company</PHeading>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About Porsche</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2024 Porsche. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
