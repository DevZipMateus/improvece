
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar menu ao clicar em links de navegação
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="z-10 relative">
          <img 
            src="/lovable-uploads/c739e515-dccc-4a07-98f5-852b9262e5eb.png" 
            alt="Improve - BPO Financeiro" 
            className="h-12 md:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#quem-somos" 
            className={`text-sm font-medium transition-colors hover:text-improve ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Quem Somos
          </a>
          <a 
            href="#problemas" 
            className={`text-sm font-medium transition-colors hover:text-improve ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Problemas
          </a>
          <a 
            href="#solucoes" 
            className={`text-sm font-medium transition-colors hover:text-improve ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Soluções
          </a>
          <a 
            href="#metodologia" 
            className={`text-sm font-medium transition-colors hover:text-improve ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Metodologia
          </a>
          <a 
            href="#servicos" 
            className={`text-sm font-medium transition-colors hover:text-improve ${
              scrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            className="btn-primary text-sm"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
            isMenuOpen ? 'focus:ring-white' : 'focus:ring-gray-300'
          }`}
          aria-expanded="false"
        >
          <span className="sr-only">Abrir menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          <a 
            href="#quem-somos" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-improve"
          >
            Quem Somos
          </a>
          <a 
            href="#problemas" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-improve"
          >
            Problemas
          </a>
          <a 
            href="#solucoes" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-improve"
          >
            Soluções
          </a>
          <a 
            href="#metodologia" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-improve"
          >
            Metodologia
          </a>
          <a 
            href="#servicos" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-improve"
          >
            Serviços
          </a>
          <a 
            href="#contato" 
            onClick={handleNavClick}
            className="block px-3 py-2 rounded-md text-base font-medium bg-improve text-improve-black hover:bg-improve/90 text-center mt-4"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
