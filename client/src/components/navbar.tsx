import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-primary cursor-pointer">
                  Frontfield
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="#diensten" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 font-medium"
                >
                  Diensten
                </a>
                <a 
                  href="#portfolio" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 font-medium"
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200 font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-muted-foreground hover:text-secondary"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-64 h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/">
                <span className="text-xl font-bold text-primary cursor-pointer">
                  Frontfield
                </span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-muted-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="space-y-4">
              <a 
                href="#diensten" 
                className="block text-lg text-muted-foreground hover:text-secondary"
                onClick={toggleMobileMenu}
              >
                Diensten
              </a>
              <a 
                href="#portfolio" 
                className="block text-lg text-muted-foreground hover:text-secondary"
                onClick={toggleMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="block text-lg text-muted-foreground hover:text-secondary"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
