import { Link } from "wouter";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "Website ontwikkeling",
    "E-commerce oplossingen", 
    "Website onderhoud",
    "Domeinnaam registratie",
    "SEO optimalisatie",
    "Hosting services"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Frontfield</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Wij maken eenvoudige, effectieve, no-nonsense websites die bedrijven helpen groeien en online succesvol te zijn.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@frontfield.nl"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Diensten</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#diensten" 
                    className="hover:text-primary-foreground transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-3 text-primary-foreground/80 mb-8">
              <li>
                <Link href="/privacy" className="hover:text-primary-foreground transition-colors duration-200">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-foreground transition-colors duration-200">
                  Algemene Voorwaarden
                </Link>
              </li>
            </ul>
            
            <div>
              <h5 className="font-semibold mb-2">Contact</h5>
              <p className="text-primary-foreground/80 text-sm">
                <Mail className="inline w-4 h-4 mr-2" />
                info@frontfield.nl
              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                📞 +31 6 12345678
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Frontfield Websites. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
