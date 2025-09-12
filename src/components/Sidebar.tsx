import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

interface SidebarProps {
  onNavigate: (section: string) => void;
}

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "chi-siamo", label: "Chi Siamo" },
    { id: "galleria", label: "Galleria" },
    { id: "contatti", label: "Contatti" },
  ];

  const handleMenuClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      {/* ------------------- */}
      {/* Mobile: logo piccolo + hamburger chiusa */}
      {/* ------------------- */}
      {!isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white h-16 z-50 flex items-center justify-between px-4 shadow-md">
          {/* Logo piccolo */}
          <img
            src="/img/logo_marco_small_dark.png"
            alt="Logo"
            style={{ height: "32px" }}
          />

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-black hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Apri menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* ------------------- */}
      {/* Mobile: overlay aperta */}
      {/* ------------------- */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300">
          {/* Top bar: logo, X, social */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            {/* Logo grande a sinistra */}
            <div>
              <img
                src="/img/logo_marco_dark.png"
                alt="Logo"
                style={{ height: "80px" }}
              />
            </div>

            {/* X al centro */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-black hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Chiudi menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Social a destra */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-black hover:text-[#6B3D0E]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-black hover:text-[#6B3D0E]" />
              </a>
            </div>
          </div>

          {/* Menu centrale */}
          <nav className="flex-1 flex flex-col justify-center px-6 space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full text-left text-2xl font-thin text-black transition-colors hover:text-[#6B3D0E]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* ------------------- */}
      {/* Desktop sidebar */}
      {/* ------------------- */}
      <div
        className={`hidden md:flex fixed top-0 left-0 h-full bg-white z-50 flex-col transition-all duration-300 ${
          isOpen ? "w-1/4" : "w-16"
        }`}
      >
        {/* Logo desktop */}
        <div className="flex justify-center mt-6">
          {isOpen ? (
            <img src="/img/logo_marco_dark.png" style={{ height: "120px" }} />
          ) : (
            <img
              src="/img/logo_marco_small_dark.png"
              alt="Logo piccolo"
              style={{ height: "40px" }}
            />
          )}
        </div>

        {/* Menu desktop */}
        {isOpen && (
          <nav className="mt-8 flex-1 flex flex-col items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full flex items-center px-4 py-6 transition-colors justify-center group"
              >
                <span className="text-3xl font-thin duration-300 group-hover:text-[#6B3D0E] group-hover:translate-x-2">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        )}

        {/* Hamburger desktop */}
        <div
          className={`flex items-center p-4 ${
            isOpen ? "justify-start mt-0" : "justify-start mt-auto"
          }`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black rounded-lg transition-colors hover:bg-primary/10"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
