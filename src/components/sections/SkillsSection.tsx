import { Card, CardContent } from '@/components/ui/card';
import { 
  Database, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Eye, 
  Puzzle, 
  Target, 
  MessageSquare 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "SQL",
      description: "Consultas complexas e otimização de bancos de dados"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Power BI",
      description: "Dashboards interativos e visualizações avançadas"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Inteligência Artificial",
      description: "Aplicação de IA na análise de dados e automação"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Análise de Dados",
      description: "Identificação de padrões e insights estratégicos"
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Visualização de Dados",
      description: "Transformação de dados em narrativas visuais"
    },
    {
      icon: <Puzzle className="w-12 h-12" />,
      title: "Resolução de Problemas",
      description: "Abordagem analítica para desafios complexos"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Conhecimento de Negócio",
      description: "Visão estratégica e alinhamento com objetivos"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Comunicação",
      description: "Tradução de dados para diferentes públicos"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Minhas <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise técnica e soft skills que me permitem entregar soluções de dados de alto impacto
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ferramentas e Tecnologias
              </h3>
              <p className="text-lg text-muted-foreground">
                <strong className="text-primary">Domínio avançado:</strong> Excel, Power BI, SQL Server, Python, R, Tableau, Google Analytics
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                <strong className="text-secondary">Conhecimento complementar:</strong> Azure, AWS, Machine Learning, ETL/ELT, Git, Agile/Scrum
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;