import { MessageCircle, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6B3D0E] text-light-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Colonna sinistra: Social cliccabili */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contatti Rapidi</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <a
                  href="https://wa.me/391234567890"
                  className="hover:text-white"
                >
                  [Whatsapp] +39 123 45 67 890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@gianniarredamenti.it"
                  className="hover:text-white"
                >
                  [Mail] info@gianniarredamenti.it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                <a
                  href="https://www.facebook.com/tuaprofilo"
                  target="_blank"
                  className="hover:text-white"
                >
                  [Facebook] /tuaprofilo
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <a
                  href="https://www.instagram.com/tuoprofilo"
                  target="_blank"
                  className="hover:text-white"
                >
                  [Instagram] /tuaprofilo
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna centrale: vuota */}
          <div></div>

          {/* Colonna destra: dati ufficiali */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Dati Ufficiali</h4>
            <p>Falegnameria Gianni SNC</p>
            <p>Via delle Pierone, 776/B</p>
            <p>55100 Lucca, Toscana, Italia</p>
            <p>P.IVA: 01234567890</p>
            <p>Cod. Fisc: 01234567890</p>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-cream/60">
            © 2024 Falegnameria Gianni SNC. Tutti i diritti riservati.
          </p>
          <p>
            <a
              href="#/privacy"
              className="text-cream/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
