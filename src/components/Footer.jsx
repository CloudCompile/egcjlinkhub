// src/components/Footer.jsx
import React from 'react';

export default function Footer({ socialLinks }) {
  return (
    <footer className="mt-12 mb-6 flex justify-center space-x-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-sm transition-all duration-300 group-hover:blur-md" />
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
              <span className="text-2xl text-black">
                <Icon />
              </span>
            </div>
          </a>
        );
      })}
    </footer>
  );
}