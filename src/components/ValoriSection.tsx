import { Palette, Cog, Users, ShieldCheck } from 'lucide-react';

const ValoriSection = () => {
  const valori = [
    {
      icon: Palette,
      title: 'Qualità',
      description: 'Utilizziamo solo i migliori materiali e tecniche artigianali per garantire prodotti di eccellenza.',
      color: 'from-amber-100 to-orange-100'
    },
    {
      icon: Cog,
      title: 'Realizzazione',
      description: 'Ogni progetto è curato nei minimi dettagli, dalla progettazione alla realizzazione finale.',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      icon: Users,
      title: 'Esperienza',
      description: 'Oltre 50 anni di esperienza nel settore dell\'arredamento e del design d\'interni.',
      color: 'from-green-100 to-emerald-100'
    },
    {
      icon: ShieldCheck,
      title: 'Assistenza',
      description: 'Offriamo supporto completo e assistenza post-vendita per tutti i nostri clienti.',
      color: 'from-purple-100 to-pink-100'
    }
  ];

  return (
    <section id="valori" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            I Nostri Valori
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Questi principi guidano il nostro lavoro quotidiano e ci permettono di 
            offrire sempre il massimo ai nostri clienti.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valori.map((valore, index) => {
            const Icon = valore.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${valore.color} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-dark-brown" />
                </div>
                <h3 className="text-xl font-bold text-dark-brown mb-4">{valore.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{valore.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValoriSection;