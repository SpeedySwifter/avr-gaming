const SEO = {
  title: "AVR Gaming",
  titleTemplate: "%s | AVR Gaming",
  defaultTitle: "AVR Gaming",
  description: "AVR ist ein aktiver eSport-Verein auf Xbox Live – mit Teams, News, Turnieren und Community-Events.",
  canonical: "https://avr-gaming.de",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://avr-gaming.de",
    site_name: "AVR Gaming",
    title: "AVR Gaming",
    description: "Neuigkeiten, Events und Teaminfos rund um AVR eSport.",
    images: [
      {
        url: "https://avr-gaming.de/og-image.jpg", // <–– falls du ein Open Graph Bild hast
        width: 1200,
        height: 630,
        alt: "AVR Gaming Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@avrgaming",      // falls vorhanden
    site: "@avrgaming",        // falls vorhanden
    cardType: "summary_large_image",
  },
};

export default SEO;
