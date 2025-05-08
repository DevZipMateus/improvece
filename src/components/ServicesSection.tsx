
import { Calculator, FileText, Users, PieChart, Building, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Financeira",
      description: "Escrituração contábil, elaboração de balanços e DRE com linguagem clara e acessível."
    },
    {
      icon: FileText,
      title: "Contabilidade Fiscal",
      description: "Apuração de impostos, escrituração fiscal e cumprimento das obrigações tributárias."
    },
    {
      icon: Users,
      title: "Contabilidade Trabalhista",
      description: "Folha de pagamento, férias, rescisões e todas as obrigações relacionadas a colaboradores."
    },
    {
      icon: PieChart,
      title: "Planejamento Tributário",
      description: "Estratégias para reduzir a carga tributária de forma legal e segura para sua empresa."
    },
    {
      icon: Building,
      title: "Abertura/Encerramento de Empresas",
      description: "Suporte completo para legalização, alterações contratuais ou encerramento de atividades."
    },
    {
      icon: BookOpen,
      title: "Obrigações Acessórias",
      description: "Entrega de declarações obrigatórias como SPED, ECD, ECF e outras exigências fiscais."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Gestão Financeira e Contábil completa</h2>
          <p className="section-subtitle">
            Soluções integradas que atendem todas as necessidades do seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="card-feature">
                  <div className="w-14 h-14 rounded-lg bg-improve/10 flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-improve" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-block mt-8">
            Solicitar orçamento personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
