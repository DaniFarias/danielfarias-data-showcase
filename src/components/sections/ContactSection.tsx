import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Entre em <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground">Vamos conversar sobre como posso ajudar seu negócio</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 inline-block">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">E-mail</h3>
                <p className="text-muted-foreground mb-6">Entre em contato direto por e-mail</p>
                <Button 
                  onClick={() => window.open('mailto:danielfariasgv@hotmail.com', '_blank')}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                >
                  danielfariasgv@hotmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 inline-block">
                    <Linkedin className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">LinkedIn</h3>
                <p className="text-muted-foreground mb-6">Conecte-se comigo profissionalmente</p>
                <Button 
                  onClick={() => window.open('https://linkedin.com/in/danifarias', '_blank')}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
                >
                  linkedin.com/in/danifarias
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Pronto para Transformar Seus Dados?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Vamos conversar sobre como posso ajudar sua empresa a tomar decisões mais inteligentes através dos dados
                </p>
                <Button 
                  size="lg"
                  onClick={() => window.open('mailto:danielfariasgv@hotmail.com?subject=Interesse em Serviços de Análise de Dados', '_blank')}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all duration-300"
                >
                  Iniciar Conversa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;