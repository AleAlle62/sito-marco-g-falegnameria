import { useEffect, useState } from "react";

const HeroSection = () => {
  // Tutte le immagini disponibili
  const allImages = [
    { src: "/img/lizzano/Lizzano1.jpg", alt: "Design contemporaneo" },
    { src: "/img/lizzano/Lizzano2.jpg", alt: "Poltrona moderna di design" },
    { src: "/img/lizzano/Lizzano3.jpg", alt: "Arredo contemporaneo" },
    { src: "/img/lizzano/Lizzano4.jpg", alt: "Soluzione di design" },
    { src: "/img/lizzano/Lizzano5.jpg", alt: "Artigianato italiano" },
  ];

  // Stato per le 4 immagini attualmente visibili
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 4));

  // Indice per tenere traccia di dove siamo nell’elenco
  const [nextIndex, setNextIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      // scegli un'immagine casuale tra le 4 da sostituire
      const randomSlot = Math.floor(Math.random() * 4);
      const newImages = [...visibleImages];

      // prendi la prossima immagine (ciclo)
      const newImage = allImages[nextIndex % allImages.length];

      newImages[randomSlot] = newImage;
      setVisibleImages(newImages);
      setNextIndex((prev) => (prev + 1) % allImages.length);
    }, 3000); // ogni 3 secondi cambia una

    return () => clearInterval(interval);
  }, [visibleImages, nextIndex]);

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-light-cream to-warm-beige px-6 min-h-[70vh] lg:min-h-screen py-10 lg:py-0 overflow-hidden"
    >
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

        {/* Griglia di immagini dinamica */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 w-full lg:max-w-[600px] relative">
          {visibleImages.map((image, index) => (
            <FadeImage
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// 🔹 Componente immagine con effetto dissolvenza
const FadeImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HeroSection;
