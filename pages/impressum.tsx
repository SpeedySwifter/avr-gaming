import { Metadata } from 'next';
import HeaderDezent from '@/components/HeaderDezent';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum | AVengeR Gaming e.V.',
  description: 'Impressum von AVengeR Gaming e.V. gemäß § 5 TMG',
};

export default function ImpressumPage() {
  return (
    <>
      <HeaderDezent />

      <main className="prose prose-lg max-w-4xl mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold">Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          AVengeR Gaming e.V.<br />
          Mannichswalder Platz 7<br />
          08451 Crimmitschau<br />
          E-Mail: <a href="mailto:contact@avr-gaming.de">contact@avr-gaming.de</a><br />
          Telefon: (+49)172 8716348
        </p>

        <h2>Vertreten durch</h2>
        <p>
          Kevin Scheibel<br />
          Marco Bodenbenner<br />
          Henning Meier
        </p>

        <h2>Registereintrag</h2>
        <p>
          Registergericht: Amtsgericht Chemnitz<br />
          Registernummer: VR 4953
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
          <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
            http://ec.europa.eu/odr
          </a>
        </p>
        <p>
          Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
          Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2>Bildernachweis</h2>
        <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
          Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
        </p>
        <ul>
          <li>AVengeR Gaming e.V.</li>
          <li>Bildquellen, die sich auf Erzeugnisse Dritter beziehen, werden mit einem entsprechenden Quellenhinweis markiert.</li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
