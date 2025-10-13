import { useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Array di immagini - dividile in due righe
  const topImages = [
    { src: "/img/lizzano/Lizzano2.jpg", alt: "Poltrona moderna di design" },
    { src: "/img/lizzano/Lizzano3.jpg", alt: "Arredo contemporaneo" },
    { src: "/img/lizzano/Lizzano4.jpg", alt: "Soluzione di design" },
  ];

  const bottomImages = [
    { src: "/img/lizzano/Lizzano4.jpg", alt: "Soluzione di design" },
    { src: "/img/lizzano/Lizzano4.jpg", alt: "Soluzione di design" },
    { src: "/img/lizzano/Lizzano4.jpg", alt: "Soluzione di design" },
  ];

  // Duplica per loop infinito
  const topImagesLoop = [...topImages, ...topImages, ...topImages];
  const bottomImagesLoop = [...bottomImages, ...bottomImages, ...bottomImages];

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-light-cream to-warm-beige px-6 min-h-[70vh] lg:min-h-screen py-10 lg:py-0 overflow-hidden"
    >
      {/* Wrapper principale */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] gap-12">
        {/* Contenuto testuale */}
        <div className="flex-1 max-w-[500px] text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-brown leading-tight mb-6">
            Tradizione artigianale e design contemporaneo
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Da oltre sessant'anni, realizziamo soluzioni di arredo uniche,
            unendo alla maestria artigianale le più moderne tendenze del design
            contemporaneo.
          </p>
        </div>

        {/* Carosello doppia riga */}
        <div className="flex-1 flex flex-col justify-center w-full lg:max-w-[600px] gap-4 overflow-hidden">
          <style>{`
            @keyframes scrollLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            @keyframes scrollRight {
              0% {
                transform: translateX(-33.333%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-left {
              animation: scrollLeft 20s linear infinite;
            }
            .animate-scroll-right {
              animation: scrollRight 20s linear infinite;
            }
          `}</style>

          {/* Riga superiore - scorre da sinistra a destra */}
          <div className="overflow-hidden w-full">
            <div className="flex gap-3 md:gap-4 animate-scroll-right">
              {topImagesLoop.map((image, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-[140px] h-[180px] md:w-[180px] md:h-[240px] relative"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    onLoad={() => index === 0 && setIsLoaded(true)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Riga inferiore - scorre da destra a sinistra */}
          <div className="overflow-hidden w-full">
            <div className="flex gap-3 md:gap-4 animate-scroll-left">
              {bottomImagesLoop.map((image, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-[140px] h-[180px] md:w-[180px] md:h-[240px] relative"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
