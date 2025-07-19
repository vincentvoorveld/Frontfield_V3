import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
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
          <h1 className="text-3xl font-bold text-primary">Privacybeleid</h1>
          <p className="text-muted-foreground mt-2">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Privacy & Gegevensbescherming</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral max-w-none">
            <p>
              Bij Frontfield respecteren wij de privacy van onze klanten en bezoekers. In dit privacybeleid leggen we uit welke persoonsgegevens wij verzamelen, met welk doel, en hoe wij hiermee omgaan.
            </p>

            <h3>Welke gegevens verzamelen wij?</h3>
            <p>
              Wij verzamelen uitsluitend persoonsgegevens die u zelf verstrekt via ons contactformulier of per e-mail. Dit kunnen de volgende gegevens zijn:
            </p>
            <ul>
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Eventuele andere informatie die u zelf verstrekt in uw bericht</li>
            </ul>

            <h3>Waarvoor gebruiken wij deze gegevens?</h3>
            <p>Uw persoonsgegevens worden uitsluitend gebruikt voor de volgende doeleinden:</p>
            <ul>
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het opstellen van offertes en overeenkomsten</li>
              <li>Het leveren van onze diensten (bouwen en onderhouden van uw website)</li>
              <li>Administratieve doeleinden (zoals facturatie)</li>
            </ul>
            <p>
              Wij verkopen uw gegevens niet aan derden en delen deze alleen indien dit strikt noodzakelijk is voor de uitvoering van onze diensten (bijv. voor hosting of domeinnaamregistratie).
            </p>

            <h3>Hoe worden uw gegevens opgeslagen?</h3>
            <p>
              Uw gegevens worden opgeslagen op beveiligde servers van onze hostingpartner en in ons e-mailaccount (bijv. info@frontfield.nl). Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen.
            </p>

            <h3>Bewaartermijn</h3>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor het leveren van onze diensten en het voldoen aan wettelijke verplichtingen (zoals de bewaartermijn voor facturen).
            </p>

            <h3>Uw rechten</h3>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te laten corrigeren of te laten verwijderen. U kunt hiervoor contact opnemen via: info@frontfield.nl
            </p>

            <h3>Cookies</h3>
            <p>
              Onze website maakt geen gebruik van cookies.
            </p>

            <h3>Contactgegevens</h3>
            <p>
              <strong>Frontfield</strong><br/>
              Website: <a href="http://www.frontfield.nl" className="text-blue-600 hover:underline">www.frontfield.nl</a><br/>
              E-mail: info@frontfield.nl
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
