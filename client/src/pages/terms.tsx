import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-primary">Algemene Voorwaarden</h1>
          <p className="text-muted-foreground mt-2">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Voorwaarden & Bepalingen</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral max-w-none">
            <h3>1. Toepasselijkheid</h3>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Frontfield Websites en de opdrachtgever, tenzij uitdrukkelijk anders overeengekomen.
            </p>

            <h3>2. Dienstverlening</h3>
            <p>
              Frontfield Websites verleent diensten op het gebied van webontwikkeling, onderhoud en gerelateerde digitale diensten. De specifieke dienstverlening wordt per project vastgelegd in een aparte overeenkomst.
            </p>

            <h3>3. Prijzen en betaling</h3>
            <p>
              Alle prijzen zijn exclusief BTW tenzij anders vermeld. Betaling dient te geschieden conform de overeengekomen betalingsvoorwaarden. Bij niet-tijdige betaling kunnen wij rente en kosten in rekening brengen.
            </p>

            <h3>4. Intellectueel eigendom</h3>
            <p>
              Alle intellectuele eigendomsrechten op door ons ontwikkelde websites en applicaties blijven bij Frontfield Websites, tenzij uitdrukkelijk anders overeengekomen.
            </p>

            <h3>5. Aansprakelijkheid</h3>
            <p>
              Onze aansprakelijkheid is beperkt tot de waarde van de opdracht. Wij zijn niet aansprakelijk voor indirecte schade, gevolgschade of bedrijfsschade.
            </p>

            <h3>6. Gratis website actie</h3>
            <p>
              De gratis website actie is geldig zolang de voorraad strekt en onder voorwaarden die per geval worden bepaald. Frontfield Websites behoudt zich het recht voor deze actie op elk moment te wijzigen of te beëindigen.
            </p>

            <h3>7. Toepasselijk recht</h3>
            <p>
              Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
            </p>

            <h3>Contact</h3>
            <p>
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via info@frontfield.nl
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
