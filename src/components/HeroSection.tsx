import { useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-light-cream to-warm-beige px-6 min-h-[70vh] lg:min-h-screen py-10 lg:py-0"
    >
      {/* Wrapper principale */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] gap-12">
        {/* Contenuto testuale */}
        <div className="flex-1 max-w-[500px] text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-brown leading-tight mb-6">
            Tradizione artigianale e design contemporaneo
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Da oltre sessant’anni, realizziamo soluzioni di arredo uniche,
            unendo alla maestria artigianale le più moderne tendenze del design
            contemporaneo.
          </p>
        </div>

        {/* Immagine con skeleton */}
        <div className="flex-1 flex justify-center max-w-[600px] relative">
          {/* Skeleton loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
          )}

          <img
            src="/img/lizzano/Lizzano2.jpg"
            alt="Poltrona moderna di design"
            className={`w-full h-auto object-cover rounded-2xl shadow-elegant transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
