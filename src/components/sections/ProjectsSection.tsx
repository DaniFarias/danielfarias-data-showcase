import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';

// Import project images
import comercialCapa from '@/assets/Comercial-Capa.jpg';
import financeiroCapa from '@/assets/Financeiro-Capa.jpg';
import logisticaCapa from '@/assets/Logistica-Capa.jpg';
import oeeCapa from '@/assets/Oee-Capa.jpg';
import dreCapa from '@/assets/DRE-Capa.jpg';
import npsCapa from '@/assets/NPS-Capa.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Relatório Comercial",
      image: comercialCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiNGM4YmJkMGEtZDE3NC00ZTk5LTk3NjMtMTdmZGRjZDI0MTEwIiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Dashboard completo para análise de vendas, performance de vendedores e acompanhamento de metas comerciais. Inclui métricas de conversão, análise de funil de vendas e projeções de receita.",
      tools: ["Power BI", "SQL", "Excel"],
      results: "Aumento de 25% na eficiência comercial"
    },
    {
      title: "Análise Financeira",
      image: financeiroCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiMDQ0MWJmYjgtMGNlYy00OGRjLTkyNTItOGVjNzIxYzI4MDllIiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Relatório financeiro estratégico com análise de fluxo de caixa, indicadores de rentabilidade e controle orçamentário. Visões executivas e operacionais para tomada de decisão.",
      tools: ["Power BI", "DAX", "SQL Server"],
      results: "Redução de 30% no tempo de fechamento"
    },
    {
      title: "Dashboard Logístico",
      image: logisticaCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiYWNlOGRiYTQtNDc4NS00ZmUwLTg5YTktMmYzN2U3NjhiNGI0IiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Monitoramento em tempo real da cadeia de suprimentos, tracking de entregas e análise de performance logística. KPIs de pontualidade, custos de frete e satisfação do cliente.",
      tools: ["Power BI", "Python", "APIs"],
      results: "Melhoria de 40% na pontualidade"
    },
    {
      title: "Produção (OEE)",
      image: oeeCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiNDhhODQwZDItODVhYS00YjZiLTk2MzgtZTcxN2U4YWEwZjE3IiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Dashboard de eficiência global de equipamentos (OEE) para monitoramento da produção industrial. Análise de disponibilidade, performance e qualidade dos equipamentos.",
      tools: ["Power BI", "IoT Data", "SQL"],
      results: "Aumento de 15% no OEE geral"
    },
    {
      title: "DRE Demonstrativo",
      image: dreCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjVjOGIwNzUtMTJhNy00YWRmLTlhYTgtYzAxYmZmOWQ1MTgzIiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Demonstração do Resultado do Exercício automatizada com análise comparativa por períodos, centros de custo e unidades de negócio. Drill-down detalhado por categoria.",
      tools: ["Power BI", "DAX", "Excel"],
      results: "Automatização de 90% dos relatórios"
    },
    {
      title: "Net Promoter Score",
      image: npsCapa,
      link: "https://app.powerbi.com/view?r=eyJrIjoiNDNiOTY4NGEtZTU0Ni00NWU5LTk0YWItYWU4OWU0Nzc1MjY5IiwidCI6IjVlZDI3MDgzLTdmMDItNDJmOC1iMTQyLWZkM2E1NWJiNGViMCJ9",
      description: "Análise completa de satisfação do cliente através do NPS, incluindo segmentação por perfil, análise de sentimentos e identificação de drivers de satisfação.",
      tools: ["Power BI", "Survey Data", "R"],
      results: "Aumento de 35% no NPS médio"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Meus <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos reais de sucesso onde transformei dados em valor para negócios de diferentes setores
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    onClick={() => window.open(project.link, '_blank')}
                    className="bg-primary/90 hover:bg-primary text-primary-foreground"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-secondary mb-2">Ferramentas:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-secondary mb-1">Resultado:</p>
                  <p className="text-sm text-muted-foreground">{project.results}</p>
                </div>

                <Button 
                  onClick={() => window.open(project.link, '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all duration-300"
                >
                  Ver Projeto
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Impacto dos Projetos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground">Horas de Desenvolvimento</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">15+</p>
                  <p className="text-muted-foreground">Empresas Atendidas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-muted-foreground">Satisfação dos Clientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;