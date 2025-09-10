const ChiSiamoSection = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-8">
            Chi Siamo
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6 text-xl leading-relaxed">
              Artigianato d'eccellenza nato nel 1970 dall'esperienza e dall'ingegno della tradizione 
              artigianale trentina ma senza mai dimenticare lo sguardo contemporaneo 
              su materiali e tecniche di lavorazione.
            </p>
            <p className="text-lg leading-relaxed">
              La nostra esperienza si basa su tre pilastri fondamentali: 
              la qualità dei materiali, l'attenzione ai dettagli e l'innovazione continua. 
              Ogni pezzo che realizziamo racconta una storia di passione e dedizione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoSection;