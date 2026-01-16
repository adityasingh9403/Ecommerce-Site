import React from 'react';
import Footer from './Footer';

const Terms = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section: Title and Breadcrumbs */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-xl md:text-2xl font-extrabold tracking-tight uppercase">
                        Terms & Conditions
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        Home / <span className="font-bold text-[#00a09d]">Terms & Conditions</span>
                    </p>
                </div>
            </div>

            {/* Content Card */}
            <div className="max-w-4xl mx-auto my-10 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-16">
                    {/* Main Heading */}
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                            Terms and Conditions
                        </h1>
                        <div className="h-1.5 w-24 bg-[#00a09d] rounded-full mx-auto md:mx-0"></div>
                    </div>

                    {/* Content Body */}
                    <div className="prose prose-teal max-w-none space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                By accessing and using Alpha Silver, you agree to be bound by these terms and conditions. 
                                Alpha Silver is a Multi-vendor Application from which users can purchase products from 
                                Ecommerce vendors according to their requirements.
                            </p>
                        </section>

                        <section className="bg-gray-50 p-6 rounded-2xl border-l-4 border-teal-500">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                                Vendor Disclaimer
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base italic">
                                Please note that Alpha Silver acts as a marketplace. Each vendor is responsible 
                                for their own product quality and shipping timelines.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
                                2. User Responsibilities
                            </h2>
                            <ul className="list-disc pl-5 space-y-3 text-gray-600">
                                <li>Users must provide accurate information during registration.</li>
                                <li>Account credentials should be kept confidential.</li>
                                <li>Any fraudulent activity will result in immediate termination of the account.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Terms;