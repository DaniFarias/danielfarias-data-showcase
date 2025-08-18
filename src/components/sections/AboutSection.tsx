import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "12+ Anos",
      description: "de experiência em análise de dados"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      title: "Graduado",
      description: "em Sistemas de Informação"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "MBA + Especialização",
      description: "em Gerenciamento de Projetos e Ciência de Dados"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Sobre <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <strong className="text-primary">Daniel Farias</strong>, Especialista em Dados com mais de 12 anos de experiência transformando informações em decisões estratégicas. 
              Minha trajetória combina conhecimento técnico sólido e visão de negócio, permitindo criar soluções de análise que realmente impactam resultados.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou graduado em <strong className="text-secondary">Sistemas de Informação</strong>, com <strong className="text-primary">MBA em Gerenciamento de Projetos</strong> e 
              <strong className="text-secondary"> Especialização em Ciência de Dados</strong> — formações que me capacitam a unir tecnologia, estratégia e inovação em cada projeto.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao longo da minha carreira, desenvolvi dashboards e relatórios que potencializaram o desempenho de equipes, otimizaram processos e revelaram oportunidades 
              ocultas para empresas de diferentes setores. Domino ferramentas que envolvem engenharia de dados, BI e Inteligência Artificial aplicada à análise de dados.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu compromisso é <strong className="text-primary">transformar dados em valor real para o negócio</strong>, unindo técnica, criatividade e foco em resultados.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;