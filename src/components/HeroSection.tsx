import heroImage from "@/assets/hero-chair.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-light-cream to-warm-beige"
    >
      {/* Wrapper principale */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 gap-12 mx-auto">
        {/* Contenuto testuale, occupa meno spazio */}
        <div className="flex-1 max-w-[400px]">
          <h1 className="text-4xl md:text-6xl font-bold text-dark-brown leading-tight mb-6">
            Tradizione artigianale e design contemporaneo
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            Da oltre sessant’anni, realizziamo soluzioni di arredo uniche,
            unendo alla maestria artigianale, le più moderne tendenze del design
            contemporaneo.
          </p>
        </div>

        {/* Immagine, occupa il resto dello spazio */}
        <div className="flex-1 flex justify-center">
          <img
            src="/img/lizzano/Lizzano2.jpg"
            alt="Poltrona moderna di design"
            className="w-full h-auto object-cover rounded-2xl shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
