import { Code, Wrench, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website laten maken",
      description: "Van eenvoudige visitekaartje websites tot complexe webapplicaties. Wij bouwen wat jij nodig hebt.",
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Onderhoud",
      description: "Houd je website veilig, snel en up-to-date. Wij zorgen voor updates, backups en technische ondersteuning.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Domeinnaam",
      description: "Vind de perfecte domeinnaam voor je bedrijf. Wij helpen met registratie en beheer.",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="diensten" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van concept tot lancering en onderhoud - wij zorgen voor alles
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift cursor-pointer">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${service.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className={`${service.color} text-xl w-6 h-6`} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
