import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Filipe Souza",
      role: "Gerente Financeiro",
      company: "Alubar",
      rating: 5,
      text: "Trabalhar com Daniel foi inspirador. Ele tem a rara habilidade de conectar áreas técnicas e de negócio, sempre traduzindo objetivos complexos em planos claros e factíveis. Sua comunicação assertiva e empatia garantem que todos estejam alinhados e motivados ao longo dos projetos."
    },
    {
      name: "Diego Macario",
      role: "Engenheiro de Software",
      company: "Velp Tecnologia",
      rating: 5,
      text: "O que mais me impressiona em Daniel é sua capacidade de transformar dados em valor real para o negócio. Ele não apenas gerencia projetos, mas também identifica oportunidades estratégicas e propõe soluções inovadoras. Os resultados falam por si: insights relevantes, processos otimizados e impacto direto nos objetivos da empresa."
    },
    {
      name: "Cliente Anônimo",
      role: "Gerente de Projetos",
      company: "Empresa Multinacional",
      rating: 5,
      text: "Profissional organizado e focado, Daniel conduz projetos complexos com maestria, garantindo entregas consistentes e de alto impacto."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Depoimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground">O que dizem sobre meu trabalho</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;