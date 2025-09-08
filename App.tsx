
import React, { useState, useEffect, useCallback } from 'react';
import {
  Slide0_Intro,
  Slide1_Profile,
  Slide2_Products_Part1,
  Slide2_Products_Part2,
  Slide2_Products_Part3,
  Slide3_Testimonial,
  Navigation,
  FullscreenButton,
  DownloadPdfButton,
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
    const element = document.documentElement;
    try {
      if (!document.fullscreenElement) {
        await element.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.error(`Error attempting to toggle fullscreen: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, []);
  
  const handlePrint = () => {
    window.print();
  };

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
    <>
      <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-purple-200 via-purple-300 to-yellow-200 flex items-center justify-center font-sans select-none print:hidden">
        <div className="relative w-[95vw] h-[95vh] flex items-center justify-center transition-opacity duration-300">
          <CurrentSlideComponent />
          <div className="absolute bottom-8 right-8 text-xl font-semibold text-slate-500">
            {currentSlide + 1} / {slideComponents.length}
          </div>
        </div>

        <div className={`absolute bottom-4 left-4 z-10 flex items-center gap-4 transition-all duration-300 ease-in-out ${controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <FullscreenButton isFullscreen={isFullscreen} onClick={handleFullscreen} />
          {!isFullscreen && <DownloadPdfButton onClick={handlePrint} />}
        </div>

        <div className={`absolute bottom-4 w-full flex justify-center items-center gap-4 transition-all duration-300 ease-in-out ${controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <Navigation onPrev={prevSlide} onNext={nextSlide} />
        </div>
      </main>

      <div className="hidden print:block">
        {slideComponents.map((SlideComponent, index) => (
          <div 
            key={index} 
            className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-300 to-yellow-200"
            style={{ pageBreakAfter: index === slideComponents.length - 1 ? 'auto' : 'always' }}
          >
            <div className="relative w-[95vw] h-[95vh]">
              <SlideComponent />
              <div className="absolute bottom-8 right-8 text-xl font-semibold text-slate-500">
                {index + 1} / {slideComponents.length}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;