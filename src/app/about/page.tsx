import React from 'react';

export default function About() {
    return (
        <section className="py-20 container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-blue-600 inline-block">About Realtime App</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                    Realtime App is a visionary project designed to showcase the power of modern web technologies. 
                    From server-side rendering with Next.js to secure communications using Pusher.
                </p>
                <p>
                    Our mission is to provide developers and users with a platform that is not only fast and reliable 
                    but also beautiful and intuitive. We believe that technology should empower people to 
                    collaborate effectively in real-time.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-l-8 border-blue-600 mt-8">
                    <p className="font-semibold italic text-blue-900">
                        "Enabling seamless human connection through real-time technology."
                    </p>
                </div>
            </div>
        </section>
    );
}
