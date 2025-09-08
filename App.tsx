
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Slide0_Intro,
  Slide1_Profile,
  Slide2_Products_Part1,
  Slide2_Products_Part2,
  Slide2_Products_Part3,
  Slide3_Testimonial,
  Navigation,
  FullscreenButton,
} from './components/Slides';

const slideComponents = [
  Slide0_Intro,
  Slide1_Profile,
  Slide2_Products_Part1,
  Slide2_Products_Part2,
  Slide2_Products_Part3,
  Slide3_Testimonial,
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideComponents.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideComponents.length) % slideComponents.length);
  }, []);

  const toggleControls = useCallback(() => {
    setControlsVisible((prev) => !prev);
  }, []);

  const handleFullscreen = useCallback(async () => {
    const element = appRef.current;
    if (!element) return;

    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error(`Error attempting to toggle fullscreen: ${err.message} (${err.name})`);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key.toLowerCase() === 'p') toggleControls();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleControls]);
  
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const CurrentSlideComponent = slideComponents[currentSlide];

  return (
    <main ref={appRef} className="fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-purple-200 via-purple-300 to-yellow-200 flex items-center justify-center font-sans select-none">
      <div className="relative w-[95vw] h-[95vh] flex items-center justify-center transition-opacity duration-300">
        <CurrentSlideComponent />
      </div>

      <div className={`absolute top-4 right-4 transition-all duration-300 ease-in-out ${controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <FullscreenButton isFullscreen={isFullscreen} onClick={handleFullscreen} />
      </div>

      <div className={`absolute bottom-4 w-full flex justify-center items-center gap-4 transition-all duration-300 ease-in-out ${controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Navigation onPrev={prevSlide} onNext={nextSlide} />
        <div className="absolute text-base text-slate-600 font-medium">
          {currentSlide + 1} / {slideComponents.length}
        </div>
      </div>
    </main>
  );
};

export default App;