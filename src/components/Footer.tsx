const Footer = () => {
  return (
    <footer className="bg-[#6B3D0E] text-light-cream py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Gianni</h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Arredamenti di qualità dal 1970. Tradizione artigianale e design
              contemporaneo per i tuoi spazi.
            </p>
            <p className="text-cream/60 text-sm">
              P.IVA: 01234567890
              <br />
              Cod. Fisc: 01234567890
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rapidi</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <a
                  href="#chi-siamo"
                  className="hover:text-white transition-colors"
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#valori"
                  className="hover:text-white transition-colors"
                >
                  I Nostri Valori
                </a>
              </li>
              <li>
                <a
                  href="#galleria"
                  className="hover:text-white transition-colors"
                >
                  Galleria
                </a>
              </li>
              <li>
                <a
                  href="#servizi"
                  className="hover:text-white transition-colors"
                >
                  Servizi
                </a>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="hover:text-white transition-colors"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-cream/80">
              <p>Via della Mela, 14B</p>
              <p>38010 - Tuenno (TN)</p>
              <p>Tel: +39 0461 982 765</p>
              <p>Email: info@gianniarredamenti.it</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-cream/60">
            © 2024 Gianni Arredamenti. Tutti i diritti riservati.
          </p>
          <p>
            <a
              href="/privacy"
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
