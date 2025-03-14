// src/components/Profile.jsx
import React from 'react';
import SplitText from './animations/SplitText';
import BlurText from './animations/BlurText';

export default function Profile({ avatar, name, bio }) {
  const handleNameAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  const handleBioAnimationComplete = () => {
    console.log('Bio animation completed!');
  };

  return (
    <div className="group">
      {/* Container with gradient glow */}
      <div className="relative p-6 rounded-2xl overflow-hidden animate-slideUp">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-sm transition-all duration-300 group-hover:blur-md" />
        <div className="relative rounded-2xl p-6">
          
          {/* Profile Image with floating animation */}
          <div className="flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-md transition-all duration-300 group-hover:blur-lg" />
              <img
                src={avatar}
                alt={name}
                className="relative w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Name with SplitText animation */}
          <div className="mt-6 text-center">
            <div className="relative overflow-hidden">
              <SplitText
                text={name}
                className="block text-3xl font-bold text-black tracking-wide font-display"
                delay={150}
                animationFrom={{ 
                  opacity: 0, 
                  transform: 'translate3d(0,50px,0)',
                  filter: 'blur(8px)'
                }}
                animationTo={{ 
                  opacity: 1, 
                  transform: 'translate3d(0,0,0)',
                  filter: 'blur(0px)'
                }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleNameAnimationComplete}
              />
            </div>

            {/* Bio with BlurText effect */}
            <div className="mt-4">
              <BlurText
                text={bio}
                className="text-lg text-black leading-relaxed tracking-wide font-light max-w-sm mx-auto"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleBioAnimationComplete}
                animationFrom={{
                  filter: 'blur(12px)',
                  opacity: 0,
                  transform: 'translate3d(0,-30px,0)'
                }}
                animationTo={[
                  {
                    filter: 'blur(6px)',
                    opacity: 0.5,
                    transform: 'translate3d(0,-15px,0)'
                  },
                  {
                    filter: 'blur(0px)',
                    opacity: 1,
                    transform: 'translate3d(0,0,0)'
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}