# GitHub Pages Upload Instructies

## Probleem
De live website op GitHub Pages toont nog de oude versie met placeholders, terwijl de nieuwe versie wel werkt in de preview hier.

## Oplossing
Upload deze bestanden naar je GitHub repository om de website bij te werken:

### Bestand 1: index.html
- **Locatie**: Vervang de huidige index.html in de root van je repository
- **Belangrijk**: Dit bestand bevat nu de nieuwe portfolio items (Ster van het Verhaal en Silverwood Coloring) en het werkende contactformulier

### Bestand 2: assets/ folder
- **Locatie**: Vervang de hele assets/ folder in je repository
- **Inhoud**: 
  - Alle afbeeldingen (inclusief de nieuwe portfolio afbeeldingen)
  - CSS bestand (index-DPtpajHn.css)
  - JavaScript bestand (index-BOGbVBQU.js)

## Stappen voor upload:
1. Ga naar je GitHub repository
2. Vervang index.html met het nieuwe bestand
3. Verwijder de oude assets/ folder 
4. Upload de nieuwe assets/ folder
5. Commit de wijzigingen
6. Wacht 1-2 minuten voor GitHub Pages om bij te werken

## Na upload:
- Portfolio zou "Ster van het Verhaal" en "Silverwood Coloring" moeten tonen
- Contactformulier zou een bevestigingsbericht moeten geven en je e-mailprogramma openen
- Alle afbeeldingen zouden correct moeten laden

## Let op:
- Zorg dat alle paden in index.html beginnen met "./" (geen leading slash)
- De assets/ folder moet in de root van je repository staan
- Refresh je browser cache na upload (Ctrl+F5 of Cmd+Shift+R)