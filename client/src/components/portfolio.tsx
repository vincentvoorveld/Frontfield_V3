import { Gift, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sterImage from "@assets/Ontwerp zonder titel_1752929121475.png";
import silverwoodImage from "@assets/600x400 pixels voorbeeld website_1753030380557.png";
import barbershopImage from "@assets/600x400 pixels voorbeeld website (1)_1753108344348.png";

export default function Portfolio() {
  const portfolioItems = [
    {
      image: sterImage,
      title: "Ster van het Verhaal",
      description: "Volledig gepersonaliseerde boeken met jouw kind(eren) als de ster van het verhaal",
      link: "https://stervanhetverhaal.nl/"
    },
    {
      image: silverwoodImage,
      title: "Silverwood Coloring", 
      description: "Portfolio website met kleurboeken, te bestellen op Amazon",
      link: "https://silverwoodcoloring.com/"
    },
    {
      image: barbershopImage,
      title: "Barbershop Nieuwland",
      description: "Professionele barbershop website voor de kapper in Amersfoort",
      link: "https://vincentvoorveld.github.io/BarberShop-Nieuwland/"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bekijk enkele van onze recent gerealiseerde projecten
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover-lift cursor-pointer overflow-hidden"
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Free website offer card */}
          <Card className="hover-lift cursor-pointer border-2 border-dashed border-secondary/40 bg-white/50 backdrop-blur-sm overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300" 
                alt="Laptop met dashboard"
                className="w-full h-48 object-cover opacity-80" 
              />
              <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Gratis Website
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-secondary mb-3">Jouw Website Hier!</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Wil je een gratis website? Wij hebben op dit moment de ruimte om één gratis website te maken.*
              </p>
              <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-200 mb-3 w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim jouw gratis website!
              </Button>
              <p className="text-muted-foreground text-xs">*voorwaarden zijn van toepassing</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg px-8 py-4 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Bespreek jouw project
          </Button>
        </div>
      </div>
    </section>
  );
}
