import galleriaKitchen from '@/assets/gallery-kitchen.jpg';
import galleriaLiving from '@/assets/gallery-living.jpg';
import galleriaBedroom from '@/assets/gallery-bedroom.jpg';

const GalleriaSection = () => {
  const progetti = [
    {
      image: galleriaKitchen,
      title: 'Cucina Moderna',
      category: 'Cucine',
      description: 'Design contemporaneo con materiali naturali'
    },
    {
      image: galleriaLiving,
      title: 'Soggiorno Elegante',
      category: 'Soggiorni',
      description: 'Comfort e stile in perfetto equilibrio'
    },
    {
      image: galleriaBedroom,
      title: 'Camera da Letto',
      category: 'Camere',
      description: 'Atmosfera rilassante e design raffinato'
    },
    {
      image: galleriaKitchen,
      title: 'Spazio Aperto',
      category: 'Open Space',
      description: 'Funzionalità e bellezza unite'
    },
    {
      image: galleriaLiving,
      title: 'Studio Privato',
      category: 'Uffici',
      description: 'Produttività in un ambiente ispirante'
    },
    {
      image: galleriaBedroom,
      title: 'Bagno Luxury',
      category: 'Bagni',
      description: 'Relax e benessere quotidiano'
    }
  ];

  return (
    <section id="galleria" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            Galleria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            La nostra realizzazioni
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-dark-brown text-light-cream rounded-full">Tutti</button>
            <button className="px-6 py-2 bg-warm-beige text-dark-brown rounded-full hover:bg-dark-brown hover:text-light-cream transition-colors">Cucine</button>
            <button className="px-6 py-2 bg-warm-beige text-dark-brown rounded-full hover:bg-dark-brown hover:text-light-cream transition-colors">Soggiorni</button>
            <button className="px-6 py-2 bg-warm-beige text-dark-brown rounded-full hover:bg-dark-brown hover:text-light-cream transition-colors">Camere</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {progetti.map((progetto, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={progetto.image} 
                  alt={progetto.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{progetto.category}</p>
                  <h3 className="text-lg font-bold">{progetto.title}</h3>
                  <p className="text-sm">{progetto.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleriaSection;