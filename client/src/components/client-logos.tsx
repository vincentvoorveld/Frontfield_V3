import sterLogo from "@assets/Ster van het Verhaal_1752928699315.png";
import virtualAssistantLogo from "@assets/Virtual Assistent_1752928699316.png";
import fitnessLogo from "@assets/Fitness Center_1752928699317.png";
import barbershopLogo from "@assets/Barbershop_1752928699318.png";
import ariaLogo from "@assets/Aria Silverwood_1752928699319.png";

export default function ClientLogos() {
  const logos = [
    { src: sterLogo, alt: "Ster van het Verhaal" },
    { src: virtualAssistantLogo, alt: "Virtual Assistant" },
    { src: fitnessLogo, alt: "Fitness Center" },
    { src: barbershopLogo, alt: "Barbershop Nieuwland" },
    { src: ariaLogo, alt: "Aria Silverwood" }
  ];

  return (
    <section className="py-16 bg-primary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center min-w-[400px] h-48 mx-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-48 max-w-80 object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
