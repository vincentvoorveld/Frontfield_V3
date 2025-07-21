import { Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mwpqvyvg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Formulier kon niet worden verzonden');
      }
    } catch (error) {
      alert('Er ging iets mis bij het verzenden. Probeer het opnieuw of neem direct contact op via info@frontfield.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Bedankt voor je bericht!</h3>
                <p className="text-muted-foreground">
                  We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op.
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Nog een bericht versturen
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertel ons over je project en wij nemen contact met je op
          </p>
        </div>
        
        <Card className="shadow-sm">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Naam <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Je volledige naam"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mailadres <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="je@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Bedrijfsnaam
                </label>
                <Input 
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Je bedrijfsnaam (optioneel)"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-foreground">
                  Budget indicatie
                </label>
                <select 
                  id="budget"
                  name="budget"
                  className="w-full h-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border border-input bg-background rounded-md"
                >
                  <option value="">Selecteer een budget</option>
                  <option value="500-1000">€500 - €1.000</option>
                  <option value="1000-2500">€1.000 - €2.500</option>
                  <option value="2500-5000">€2.500 - €5.000</option>
                  <option value="5000+">€5.000+</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Projectomschrijving <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Vertel ons over je project, doelen en wensen..."
                  className="resize-none w-full"
                  rows={5}
                  required
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-12 py-4 text-lg disabled:opacity-50 disabled:transform-none"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Bezig met verzenden...' : 'Verzend aanvraag'}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-sm">
                <Shield className="inline w-4 h-4 text-accent mr-2" />
                Je gegevens worden vertrouwelijk behandeld volgens ons privacybeleid
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}