import { Metadata } from 'next';
import HeaderDezent from '@/components/HeaderDezent';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | AVengeR Gaming e.V.',
  description: 'Informationen zum Datenschutz gemäß DSGVO bei AVengeR Gaming e.V.',
};

export default function DatenschutzPage() {
  return (
    <>
      <HeaderDezent />

      <main className="prose prose-lg max-w-4xl mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
          verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
          Bestimmungen (DSGVO, TMG). In diesen Datenschutzinformationen informieren wir Sie
          über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          AVengeR Gaming e.V.<br />
          Mannichswalder Platz 7<br />
          08451 Crimmitschau<br />
          E-Mail: contact@avr-gaming.de
        </p>

        <h2>2. Zugriffsdaten / Server-Logfiles</h2>
        <p>
          Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite
          und speichert diese als „Server-Logfiles“ ab. Folgende Daten werden so protokolliert:
        </p>
        <ul>
          <li>Besuchte Website</li>
          <li>Uhrzeit zum Zeitpunkt des Zugriffes</li>
          <li>Menge der gesendeten Daten in Byte</li>
          <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
          <li>Verwendeter Browser</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Verwendete IP-Adresse</li>
        </ul>

        <p>
          Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur
          Verbesserung der Website. Der Websitebetreiber behält sich allerdings vor, die
          Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine
          rechtswidrige Nutzung hinweisen.
        </p>

        <h2>3. Ihre Rechte</h2>
        <p>Sie haben grundsätzlich das Recht auf:</p>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>

        <p>
          Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
          verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
          worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
        </p>

        <h2>4. Kontakt</h2>
        <p>
          Bei Fragen oder Anliegen zum Thema Datenschutz erreichen Sie uns unter:
          <br />
          <a href="mailto:contact@avr-gaming.de" className="text-avrblue underline">
            contact@avr-gaming.de
          </a>
        </p>
      </main>

      <Footer />
    </>
  );
}
