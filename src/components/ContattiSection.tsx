import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContattiSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Messaggio inviato! Ti ricontatteremo presto.');
  };

  return (
    <section id="contatti" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6">
            Contatti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siamo pronti ad ascoltarti e realizzare insieme il progetto dei tuoi sogni.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-brown mb-6">Informazioni di Contatto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dark-brown rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-light-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-brown">Telefono</p>
                    <p className="text-muted-foreground">+39 0461 982 765</p>
                    <p className="text-muted-foreground">+39 347 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dark-brown rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-light-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-brown">Email</p>
                    <p className="text-muted-foreground">info@gianniarredamenti.it</p>
                    <p className="text-muted-foreground">progetti@gianniarredamenti.it</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dark-brown rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-light-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-brown">Indirizzo</p>
                    <p className="text-muted-foreground">Via della Mela, 14B</p>
                    <p className="text-muted-foreground">38010 - Tuenno (TN)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dark-brown rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-light-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-brown">Orari</p>
                    <p className="text-muted-foreground">Lun - Ven: 8:00 - 18:00</p>
                    <p className="text-muted-foreground">Sab: 9:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold text-dark-brown mb-6">Inviaci un Messaggio</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-brown mb-2">Nome</label>
                  <Input placeholder="Il tuo nome" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-brown mb-2">Email</label>
                  <Input type="email" placeholder="La tua email" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-2">Telefono</label>
                <Input placeholder="Il tuo numero di telefono" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-2">Oggetto</label>
                <Input placeholder="Oggetto del messaggio" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-brown mb-2">Messaggio</label>
                <Textarea 
                  placeholder="Descrivi il tuo progetto..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-dark-brown text-light-cream hover:bg-primary/90"
              >
                Invia Messaggio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;