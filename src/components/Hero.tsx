import React from 'react';

const Hero = () => {
    return (
        <section className="bg-blue-50 py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl font-extrabold text-blue-900 mb-6">Experience Real-Time Connectivity</h2>
                <p className="text-lg text-blue-700 mb-8 leading-relaxed">
                    Connecting users across boundaries with seamless, low-latency communication tools. 
                    Built for the next generation of collaborative web applications.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    Get Started Now
                </button>
            </div>
        </section>
    );
};

export default Hero;
