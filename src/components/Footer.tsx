
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-improve-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/c739e515-dccc-4a07-98f5-852b9262e5eb.png" 
              alt="Improve - BPO Financeiro" 
              className="h-12 mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-xs">
              Soluções financeiras com foco em clareza e resultados para pequenas e médias empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-improve transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-improve transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-improve transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-improve transition-colors">Home</a></li>
              <li><a href="#quem-somos" className="text-gray-300 hover:text-improve transition-colors">Quem Somos</a></li>
              <li><a href="#problemas" className="text-gray-300 hover:text-improve transition-colors">Problemas que Resolvemos</a></li>
              <li><a href="#solucoes" className="text-gray-300 hover:text-improve transition-colors">Soluções</a></li>
              <li><a href="#metodologia" className="text-gray-300 hover:text-improve transition-colors">Metodologia</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-improve transition-colors">Serviços</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-improve transition-colors">Contabilidade Financeira</a></li>
              <li><a href="#" className="text-gray-300 hover:text-improve transition-colors">Contabilidade Fiscal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-improve transition-colors">Contabilidade Trabalhista</a></li>
              <li><a href="#" className="text-gray-300 hover:text-improve transition-colors">Planejamento Tributário</a></li>
              <li><a href="#" className="text-gray-300 hover:text-improve transition-colors">Abertura/Encerramento de Empresas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-improve mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+55 (XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-improve mr-3 flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@improve.com.br" className="text-gray-300 hover:text-improve transition-colors">contato@improve.com.br</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-improve mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {year} Improve - BPO Financeiro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
