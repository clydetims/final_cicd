import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; 2026 Realtime App. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400">Twitter</a>
                    <a href="#" className="hover:text-blue-400">GitHub</a>
                    <a href="#" className="hover:text-blue-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
