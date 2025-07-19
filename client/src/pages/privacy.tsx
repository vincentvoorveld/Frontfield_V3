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
            <h3>Inleiding</h3>
            <p>
              Frontfield Websites ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. Dit privacybeleid informeert u over hoe wij uw gegevens verzamelen, gebruiken en beschermen wanneer u gebruik maakt van onze website en diensten.
            </p>

            <h3>Welke gegevens verzamelen wij?</h3>
            <p>Wij kunnen de volgende persoonlijke gegevens van u verzamelen:</p>
            <ul>
              <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsinformatie</li>
              <li>Projectvereisten en voorkeuren</li>
              <li>Communicatie tussen u en ons</li>
            </ul>

            <h3>Hoe gebruiken wij uw gegevens?</h3>
            <p>Uw gegevens worden gebruikt om:</p>
            <ul>
              <li>Contact met u op te nemen over uw project</li>
              <li>Onze diensten te leveren</li>
              <li>U te informeren over updates en nieuwe diensten</li>
              <li>Onze website en diensten te verbeteren</li>
            </ul>

            <h3>Gegevensbescherming</h3>
            <p>
              Wij implementeren passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
            </p>

            <h3>Uw rechten</h3>
            <p>
              Onder de AVG heeft u verschillende rechten met betrekking tot uw persoonlijke gegevens, waaronder het recht op toegang, rectificatie, verwijdering en overdraagbaarheid van uw gegevens.
            </p>

            <h3>Contact</h3>
            <p>
              Voor vragen over dit privacybeleid kunt u contact met ons opnemen via info@frontfield.nl
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
