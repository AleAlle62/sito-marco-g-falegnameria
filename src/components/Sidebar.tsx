import { useState } from 'react';
import { Menu, X, Home, Info, Users, Grid, Wrench, Mail } from 'lucide-react';

interface SidebarProps {
  onNavigate: (section: string) => void;
}

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chi-siamo', label: 'Chi Siamo', icon: Info },
    { id: 'valori', label: 'I Nostri Valori', icon: Users },
    { id: 'galleria', label: 'Galleria', icon: Grid },
    { id: 'servizi', label: 'I Nostri Servizi', icon: Wrench },
    { id: 'contatti', label: 'Contatti', icon: Mail },
  ];

  const handleMenuClick = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-dark-brown text-light-cream transition-all duration-300 ${
          isOpen ? 'w-3/4 md:w-1/3' : 'w-16'
        }`}
      >
        {/* Header with hamburger/close button */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {isOpen && (
            <div className="text-xl font-bold">Gianni</div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center px-4 py-4 hover:bg-primary/10 transition-colors ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
              >
                <Icon className="h-6 w-6" />
                {isOpen && (
                  <span className="ml-4 text-lg font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;