// src/components/LinkButton.jsx
import React from 'react';

export default function LinkButton({ url, icon: Icon, title }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full mb-4 relative overflow-hidden"
    >
      {/* Gradient background and glow effect */}
      <div className="relative rounded-xl overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md group-hover:scale-105" />
        <div className="relative rounded-xl p-4 transition-all duration-300 backdrop-blur-sm group-hover:backdrop-blur-md">
          <div className="flex items-center space-x-3 transform transition-all duration-300 group-hover:translate-x-1">
            {Icon && (
              <span className="text-2xl text-black transition-colors duration-300 group-hover:text-gray-800">
                <Icon />
              </span>
            )}
            <span className="text-lg font-medium tracking-wide text-black transition-colors duration-300 group-hover:text-gray-800">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-xl blur-md" />
      </div>
    </a>
  );
}