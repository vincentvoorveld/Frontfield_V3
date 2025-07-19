import { Gift, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Restaurant Website",
      description: "Moderne website voor lokaal restaurant"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Webshop Platform", 
      description: "Complete e-commerce oplossing"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      title: "Bedrijfswebsite",
      description: "Professionele consultancy website"
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
            <Card key={index} className="hover-lift cursor-pointer overflow-hidden">
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
          <Card className="hover-lift cursor-pointer animate-float bg-gradient-to-br from-secondary to-blue-600 text-white border-none">
            <CardContent className="p-6 text-center">
              <Gift className="text-3xl mb-4 opacity-90 w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Jouw Website Hier!</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Wil je een gratis website? Wij hebben op dit moment de ruimte om één gratis website te maken. Dit geeft ons de kans om te groeien, te leren en ons portfolio uit te breiden en geeft jou een gratis website!*
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-secondary hover:bg-blue-50 transition-colors duration-200 w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim jouw gratis website!
              </Button>
              <p className="text-blue-200 text-xs mt-3">*(voorwaarden zijn van toepassing)</p>
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
