import { motion } from "framer-motion";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";
import FeatureCard from "../components/FeatureCard";
import InquiryCTA from "../components/InquiryCTA";
import { content } from "../data/content";

function Home({ language }) {
  const t = content[language].home;
  const nav = content[language].nav;
  const isDe = language === "de";

  const offers = [
    {
      title: isDe ? "Firmenevents & Teamevents" : "Corporate Events & Team Events",
      text: isDe
        ? "Individuelle Kochevents für Firmenfeiern, Teambuilding, Incentives und Business Events."
        : "Individual cooking events for company celebrations, team building, incentives and business events.",
      link: "/corporate-events/team-building",
    },
    {
      title: isDe ? "Private Feiern & Geburtstage" : "Private Celebrations & Birthdays",
      text: isDe
        ? "Besondere Kochpartys für Geburtstage, private Feiern und gemeinsame Genussmomente."
        : "Special cooking parties for birthdays, private celebrations and shared culinary moments.",
      link: "/private-events/cooking-party",
    },
    {
      title: isDe ? "Workshops & Seminare" : "Workshops & Seminars",
      text: isDe
        ? "Eine zentrale Location mit Küche für Workshops, Seminare, Meetings und kreative Formate."
        : "A central kitchen location for workshops, seminars, meetings and creative event formats.",
      link: "/corporate-events/kitchen-rental",
    },
    {
      title: isDe ? "Kochkurse in München" : "Cooking Classes in Munich",
      text: isDe
        ? "Mediterrane, französische und saisonale Kochkurse mit wechselnden Schwerpunkten."
        : "Mediterranean, French and seasonal cooking classes with changing culinary themes.",
      link: "/private-events/cooking-classes",
    },
    {
      title: isDe ? "Show-Cooking & Live-Cooking" : "Show Cooking & Live Cooking",
      text: isDe
        ? "Kulinarische Highlights mit Live-Cooking, Fusionsküche und regionalen Spezialitäten."
        : "Culinary highlights with live cooking, fusion cuisine and regional specialities.",
      link: "/corporate-events/business-cooking",
    },
    {
      title: isDe ? "Esszimmer-Lounge" : "Dining Lounge",
      text: isDe
        ? "Elegante Sitzveranstaltungen, Networking-Abende und private Dinner in stilvoller Atmosphäre."
        : "Elegant seated events, networking evenings and private dinners in a stylish atmosphere.",
      link: "/locations/lounge",
    },
  ];

  const benefits = isDe
    ? [
        "Zentrale Innenstadtlage in München",
        "Transparente Preise",
        "Individuelle Planung & maßgeschneiderte Konzepte",
        "Hochwertige Küche & professionelle Betreuung",
        "Einzigartige Atmosphäre mit Erlebnischarakter",
        "Alles aus einer Hand – entspannt & stressfrei",
      ]
    : [
        "Central city location in Munich",
        "Transparent pricing",
        "Individual planning & tailor-made concepts",
        "High-quality kitchen & professional support",
        "Unique atmosphere with experience character",
        "Everything from one source – relaxed & stress-free",
      ];

  const cookingClassTopics = isDe
    ? [
        "Mediterrane & französische Küche",
        "Fisch-, Fleisch- und Saucenkurse",
        "Saisonale Spezialitäten",
        "Regionale Spezialitäten",
      ]
    : [
        "Mediterranean & French cuisine",
        "Fish, meat and sauce classes",
        "Seasonal specialities",
        "Regional specialities",
      ];

  return (
    <>
      <Hero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryText={t.heroButtonPrimary}
        secondaryText={t.heroButtonSecondary}
      />

      <section className="split-section">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t.aboutEyebrow}</span>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </motion.div>

        <motion.div
          className="image-panel"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section" id="experiences">
        <div className="section-heading">
          <span className="eyebrow">{isDe ? "Angebote" : "Experiences"}</span>
          <h2>{t.offersTitle}</h2>
          <p>{t.offersSubtitle}</p>
        </div>

        <div className="offer-grid">
          {offers.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </section>

      <section className="split-section dark-section">
        <motion.div
          className="image-panel image-panel-secondary"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{isDe ? "Erlebnis" : "Experience"}</span>
          <h2>{t.connectionTitle}</h2>
          <p>{t.connectionText}</p>
        </motion.div>
      </section>

      <section className="split-section">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{isDe ? "Kochkurse" : "Cooking Classes"}</span>
          <h2>{t.classesTitle}</h2>
          <p>{t.classesText}</p>

          <div className="mini-list">
            {cookingClassTopics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="image-panel image-panel-classes"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <section className="section rental-section">
        <div className="section-heading">
          <span className="eyebrow">{isDe ? "Location mieten" : "Venue Rental"}</span>
          <h2>{t.rentalTitle}</h2>
          <p>{t.rentalText}</p>
        </div>

        <div className="list-grid">
          {(isDe
            ? [
                "Eventraum mit voll ausgestatteter Küche",
                "Tagungsraum & Meetinglocation",
                "Mietstudio für Workshops & Seminare",
                "Open-Kitchen-Bereich",
                "Esszimmer-Lounge",
                "Live-Cooking auf Wunsch",
              ]
            : [
                "Event room with fully equipped kitchen",
                "Meeting and conference location",
                "Rental studio for workshops and seminars",
                "Open-kitchen area",
                "Dining lounge",
                "Live cooking on request",
              ]
          ).map((item) => (
            <div className="list-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">{isDe ? "Vorteile" : "Benefits"}</span>
          <h2>{t.featuresTitle}</h2>
        </div>

        <div className="feature-grid">
          {benefits.map((feature) => (
            <FeatureCard key={feature} title={feature} />
          ))}
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <span className="eyebrow">
            {isDe ? "Kundenstimmen" : "Guest Experiences"}
          </span>
          <h2>
            {isDe
              ? "Momente, die Gäste in Erinnerung behalten"
              : "Moments Guests Remember"}
          </h2>
          <p>
            {isDe
              ? "Von Firmenevents bis zu privaten Feiern — Gäste schätzen die besondere Atmosphäre, das gemeinsame Kochen und die persönliche Betreuung."
              : "From corporate events to private celebrations, guests value the atmosphere, shared cooking experience, and personal attention."}
          </p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              {isDe
                ? "Eine wunderschöne Location für unser Teamevent. Die Atmosphäre war persönlich, hochwertig und sehr entspannt."
                : "A beautiful location for our team event. The atmosphere felt personal, premium, and very relaxed."}
            </p>
            <h4>{isDe ? "Firmenkunde" : "Corporate Client"}</h4>
          </div>

          <div className="testimonial-card featured">
            <div className="stars">★★★★★</div>
            <p>
              {isDe
                ? "Das gemeinsame Kochen war perfekt organisiert und hat alle Gäste sofort zusammengebracht."
                : "The shared cooking experience was perfectly organized and brought everyone together immediately."}
            </p>
            <h4>{isDe ? "Privatfeier" : "Private Celebration"}</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              {isDe
                ? "Ideal für Kundenabende und Networking. Professionell, herzlich und kulinarisch sehr überzeugend."
                : "Ideal for client evenings and networking. Professional, warm, and culinarily impressive."}
            </p>
            <h4>{isDe ? "Business Event" : "Business Event"}</h4>
          </div>
        </div>

        <div className="satisfaction-strip">
          <div>
            <strong>Viele</strong>
            <span>{isDe ? "erfolgreiche Events" : "successful events"}</span>
          </div>
          <div>
            <strong>Individuell</strong>
            <span>{isDe ? "geplante Konzepte" : "planned concepts"}</span>
          </div>
          <div>
            <strong>Zentral</strong>
            <span>{isDe ? "in München gelegen" : "located in Munich"}</span>
          </div>
        </div>
      </section>

      <section className="split-section">
        <div>
          <span className="eyebrow">Location</span>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <p>
            <strong>Office:</strong> Stollbergstraße 8, 80539 München
          </p>
          <p>
            <strong>Main Entrance:</strong> Thomas-Wimmer-Ring 11, 80539 München
          </p>
        </div>

        <div className="map-box">
          <iframe
            title="Haralds Kochschule Map"
            src="https://www.google.com/maps?q=Stollbergstraße%208,%2080539%20München&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <InquiryCTA
        title={t.contactTitle}
        text={t.contactText}
        button={nav.inquiry}
      />
    </>
  );
}

export default Home;