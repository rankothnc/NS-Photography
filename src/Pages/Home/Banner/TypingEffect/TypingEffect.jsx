import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useLocation } from 'react-router-dom';

const TypingEffect = () => {
  const [texts] = useTypewriter({
    words: ['Wild Life', 'Landscape', 'Location', 'Travelling'],
    loop: true,
    typeSpeed: 300,
    delaySpeed: 80,
  });

  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/landscape':
        return 'LANDSCAPE';
      case '/location':
        return 'LOCATION';
      case '/wildlife':
        return 'WILDLIFE';
      case '/travelling':
        return 'TRAVELLING';
      default:
        return '';
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="text-white">
      <h4 className="md:text-6xl text-s">
        {location.pathname === '/' && (
          <span style={{ fontSize: '4rem', fontFamily: 'revert-layer' }}>
            NUWAN SIRIWARDHANA
          </span>
        )}
        {location.pathname === '/' ? <br /> : null}
        {pageTitle || 'PHOTOGRAPHY'}
      </h4>

      {/* Render typing effect only on '/' path */}
      {location.pathname === '/' && (
        <div
          className="md:text-3xl text-2xl font-semibold bg-gradient-to-r 
          from-green-800 via-yellow-500 to-green-500 bg-clip-text text-transparent"
        >
          <span>{texts}</span>
          <Cursor
            cursorStyle="|"
            cursorColor="bg-gradient-to-r from-green-800 via-yellow-500 to-green-500 bg-clip-text text-transparent"
          />
        </div>
      )}
    </div>
  );
};

export default TypingEffect;
