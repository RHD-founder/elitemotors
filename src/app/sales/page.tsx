'use client';
import Image from "next/image";

export default function Sales() {
    // Form state - uncomment when implementing forms
    // const [bookingForm, setBookingForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     vehicle: '',
    //     date: '',
    //     time: '',
    //     serviceType: '',
    //     notes: ''
    // });
    // const [feedbackForm, setFeedbackForm] = useState({
    //     name: '',
    //     email: '',
    //     rating: 0,
    //     type: '',
    //     feedback: ''
    // });
    // Form handlers - uncomment when implementing forms
    // const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
    // const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

    // const handleBookingSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Booking submitted:', bookingForm);
    //     setIsBookingSubmitted(true);
    // };

    // const handleFeedbackSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log('Feedback submitted:', feedbackForm);
    //     setIsFeedbackSubmitted(true);
    // };

    // const handleRatingClick = (rating: number) => {
    //     setFeedbackForm(prev => ({ ...prev, rating }));
    // };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}


            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/porsche-911-turbo-s-hero.jpg"
                        alt="Elite Motors Service - Sales Features"
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

                {/* Hero Content */}
                <div className="relative z-10 w-full h-full flex items-end">
                    <div className="w-full px-8 pb-20">
                        <div className="max-w-4xl">
                            <h1 className="text-6xl  font-thin text-white tracking-wide leading-tight mb-8">
                                Sales Features COMING SOON ...
                            </h1>
                            <p className="text-xl text-white/80 mb-8 max-w-2xl">
                                Discover our comprehensive sales features designed to enhance your vehicle buying experience.
                            </p>
                            <button className="bg-transparent border border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 text-lg font-normal transition-all duration-300">
                                Explore Features
                            </button>
                        </div>
                    </div>
                </div>
            </section>








        </div>
    );
}
