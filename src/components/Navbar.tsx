import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Realtime App</h1>
                <ul className="flex space-x-6 text-white font-medium">
                    <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-200 transition-colors">About</a></li>
                    <li><a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
