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
            <h3>Artikel 1 - Algemeen</h3>
            <ol>
              <li>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van Frontfield, gevestigd te Amersfoort.</li>
              <li>Door gebruik te maken van de diensten van Frontfield, verklaart de klant akkoord te gaan met deze algemene voorwaarden.</li>
            </ol>

            <h3>Artikel 2 - Diensten</h3>
            <ol>
              <li>Frontfield levert eenvoudige websites en onderhoudsdiensten op basis van de wensen en het budget van de opdrachtgever. De inhoud en omvang van het project (zoals aantal pagina's, functionaliteiten, contactformulieren, domeinnaam, e-mail en onderhoud) worden vooraf afgestemd en vastgelegd in een offerte of opdrachtbevestiging.</li>
              <li>Eventuele maandelijkse pakketten voor onderhoud en hosting worden apart overeengekomen en zijn inclusief hosting, tenzij anders vermeld.</li>
            </ol>

            <h3>Artikel 3 - Totstandkoming overeenkomst</h3>
            <ol>
              <li>Een overeenkomst komt tot stand wanneer de klant een schriftelijke of mondelinge opdracht verstrekt en Frontfield deze schriftelijk bevestigt.</li>
              <li>Offertes zijn geldig gedurende 14 dagen, tenzij anders vermeld.</li>
            </ol>

            <h3>Artikel 4 - Levering en uitvoering</h3>
            <ol>
              <li>Frontfield zal de overeengekomen diensten naar beste kunnen en binnen redelijke termijn uitvoeren.</li>
              <li>Frontfield is afhankelijk van externe hosting- en domeinleveranciers en kan niet aansprakelijk worden gesteld voor uitval buiten zijn controle.</li>
            </ol>

            <h3>Artikel 5 - Vergoeding en betaling</h3>
            <ol>
              <li>De betalingswijze en -termijn worden per project overeengekomen en vastgelegd in de offerte of opdrachtbevestiging.</li>
              <li>Voor onderhouds- en hostingdiensten geldt doorgaans een maandelijkse betaling, tenzij anders overeengekomen.</li>
              <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum.</li>
              <li>Bij uitblijven van (tijdige) betaling is Frontfield gerechtigd de geleverde diensten, zoals hosting, updates of toegang tot de website, tijdelijk op te schorten tot volledige betaling heeft plaatsgevonden.</li>
            </ol>

            <h3>Artikel 6 - Duur en opzegging</h3>
            <ol>
              <li>De maandelijkse pakketten worden aangegaan voor onbepaalde tijd en zijn per maand opzegbaar, met een opzegtermijn van 1 maand.</li>
              <li>Opzegging dient schriftelijk of per e-mail te gebeuren.</li>
            </ol>

            <h3>Artikel 7 - Aansprakelijkheid</h3>
            <ol>
              <li>Frontfield is niet aansprakelijk voor schade die voortvloeit uit het gebruik van de website of uit tijdelijke onbeschikbaarheid van de website.</li>
              <li>De klant blijft zelf verantwoordelijk voor de inhoud en de juistheid van teksten en afbeeldingen op de website.</li>
            </ol>

            <h3>Artikel 8 - Wijzigingen</h3>
            <ol>
              <li>Frontfield behoudt zich het recht voor om deze algemene voorwaarden te wijzigen.</li>
              <li>Wijzigingen worden ten minste 14 dagen van tevoren bekendgemaakt/doorgevoerd op de website van Frontfield.</li>
            </ol>

            <h3>Artikel 9 - Toepasselijk recht</h3>
            <ol>
              <li>Op deze algemene voorwaarden is uitsluitend Nederlands recht van toepassing.</li>
              <li>Geschillen worden bij voorkeur onderling opgelost. Indien dit niet mogelijk is, worden geschillen voorgelegd aan de bevoegde rechter in Nederland.</li>
            </ol>

            <h3>Contactgegevens:</h3>
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
