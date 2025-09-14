import heroImage from "@/assets/hero-chair.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-light-cream to-warm-beige"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-dark-brown leading-tight mb-6">
              Tradizione artigianale e design contemporaneo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Da oltre 50 anni realizziamo soluzioni di arredamento uniche,
              unendo la maestria artigianale tradizionale con le più moderne
              tendenze del design contemporaneo.
            </p>
            <button className="px-8 py-4 bg-[#6B3D0E] text-light-cream rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Scopri i nostri progetti
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Poltrona moderna di design"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
