import { Rocket, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-neutral to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Eenvoudige websites die doen wat ze moeten doen
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary mb-4">
            Bezoekers omzetten in klanten
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Wij maken heldere, effectieve websites. Gebouwd om je bedrijf te laten groeien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start je project
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transform hover:scale-105 transition-all duration-200 w-full sm:w-auto text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan je gratis gesprek
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
