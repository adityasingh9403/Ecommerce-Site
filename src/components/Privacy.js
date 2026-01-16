import React from 'react';
import Footer from './Footer';

const Privacy = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen font-sans">
            {/* Header Section: Title and Breadcrumbs */}
            <div className="bg-[#14949d]/30 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-4 border-b border-gray-200">
                <div className="text-center md:text-left">
                    <p className="text-gray-800 text-xl md:text-2xl font-extrabold tracking-tight uppercase">
                        Privacy Policy
                    </p>
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        Home / <span className="font-bold text-[#00a09d]">Privacy Policy</span>
                    </p>
                </div>
            </div>

            {/* Content Card */}
            <div className="max-w-4xl mx-auto my-10 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-16">
                    {/* Main Heading */}
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                            Privacy Policy
                        </h1>
                        <div className="h-1.5 w-20 bg-[#00a09d] rounded-full mx-auto md:mx-0"></div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">
                                Introduction
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Alpha Silver is a Multi-vendor Application from which users can purchase 
                                products according to their requirements. We are committed to protecting 
                                your personal information and your right to privacy.
                            </p>
                        </section>

                        <section className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">
                                Important Note:
                            </h2>
                            <p className="text-teal-700 text-sm md:text-base">
                                By using our application, you trust us with your personal data. 
                                We collect this data to provide a seamless shopping experience.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Privacy;