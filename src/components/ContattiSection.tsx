import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const ContattiSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    oggetto: "",
    messaggio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2t5zm8g",
        "template_0xjplsz",
        formData,
        "OYNspbVVoIFXedYAQ"
      )
      .then(
        () => setIsSubmitted(true),
        (err) => alert("Errore nell'invio: " + err.text)
      );
  };

  const closeOverlay = () => setIsSubmitted(false);

  return (
    <section id="contatti" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-dark-brown mb-6 text-center">
          Contatti
        </h2>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="nome"
              placeholder="Nome"
              required
              value={formData.nome}
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="telefono"
              placeholder="Telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <Input
              name="oggetto"
              placeholder="Oggetto"
              required
              value={formData.oggetto}
              onChange={handleChange}
            />
            <Textarea
              name="messaggio"
              placeholder="Messaggio..."
              required
              className="min-h-[120px]"
              value={formData.messaggio}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="w-full bg-[#6B3D0E] text-light-cream hover:bg-primary/90"
            >
              Invia Messaggio
            </Button>
          </form>
        </div>
      </div>

      {/* Overlay email inviata */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 text-center max-w-sm mx-4">
            <h3 className="text-2xl font-bold text-dark-brown mb-4">
              Email Inviata!
            </h3>
            <p className="text-muted-foreground mb-6">
              Grazie per averci contattato. Ti risponderemo il prima possibile.
            </p>
            <Button
              onClick={closeOverlay}
              className="bg-dark-brown text-light-cream hover:bg-primary/90"
            >
              Chiudi
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContattiSection;
