
import React, { useEffect, useState } from 'react';

interface CursorEffectProps {
  isDarkMode: boolean;
}

const CursorEffect: React.FC<CursorEffectProps> = ({ isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add listeners to the entire document
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor effect */}
      <div
        className="fixed pointer-events-none z-50 transition-opacity duration-200 ease-out will-change-transform"
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          transform: 'translate3d(0, 0, 0)', // Hardware acceleration
        }}
      >
        <div
          className="w-32 h-32 rounded-full transition-all duration-300 ease-out will-change-transform"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, rgba(100, 255, 218, 0.12) 0%, rgba(100, 255, 218, 0.06) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)'
          }}
        />
      </div>

      {/* Secondary glow effect */}
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-300 ease-out will-change-transform"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transform: 'translate3d(0, 0, 0)', // Hardware acceleration
        }}
      >
        <div
          className="w-48 h-48 rounded-full blur-xl transition-all duration-500 ease-out will-change-transform"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(circle, rgba(100, 255, 218, 0.06) 0%, transparent 60%)'
              : 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 60%)'
          }}
        />
      </div>
    </>
  );
};

export default CursorEffect;
