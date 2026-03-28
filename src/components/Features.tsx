import React from 'react';

const Features = () => {
    const featureList = [
        { title: "Real-time Sync", desc: "Data stays updated instantly across all devices." },
        { title: "Secure Data", desc: "Enterprise-grade encryption for your communications." },
        { title: "Scalable Infrastructure", desc: "Built to handle millions of connections effortlessly." }
    ];

    return (
        <section className="py-16 container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {featureList.map((f, i) => (
                    <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-white">
                        <h4 className="text-xl font-bold text-blue-600 mb-4">{f.title}</h4>
                        <p className="text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
