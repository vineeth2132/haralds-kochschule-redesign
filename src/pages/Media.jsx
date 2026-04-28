import { motion } from "framer-motion";
import InquiryCTA from "../components/InquiryCTA";
import { content } from "../data/content";

function Media({ language }) {
  const isDe = language === "de";
  const nav = content[language].nav;

  const mediaItems = [
    {
      type: isDe ? "Blog" : "Blog",
      title: isDe
        ? "Wie ein Kochevent Teams näher zusammenbringt"
        : "How a Cooking Event Brings Teams Closer Together",
      text: isDe
        ? "Ein gemeinsames Kocherlebnis schafft Kommunikation, Vertrauen und echte Begegnungen außerhalb des Arbeitsalltags."
        : "A shared cooking experience creates communication, trust, and real connection outside the usual work environment.",
    },
    {
      type: isDe ? "Event Galerie" : "Event Gallery",
      title: isDe
        ? "Einblicke in besondere Events"
        : "Moments from Special Events",
      text: isDe
        ? "Bilder und Eindrücke von privaten Feiern, Firmenevents, Kochkursen und exklusiven Abenden."
        : "Photos and impressions from private celebrations, corporate events, cooking classes, and exclusive evenings.",
    },
    {
      type: isDe ? "Video" : "Video",
      title: isDe
        ? "Die Atmosphäre der Kochschule erleben"
        : "Experience the Atmosphere of the Cooking School",
      text: isDe
        ? "Kurze Videos zeigen die Stimmung, das gemeinsame Kochen und das besondere Ambiente der Location."
        : "Short videos show the atmosphere, the shared cooking experience, and the unique feeling of the location.",
    },
  ];

  return (
    <>
      <section className="page-hero media-hero">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">
            {isDe ? "Medien, Geschichten & Inspiration" : "Media, Stories & Inspiration"}
          </span>
          <h1>{isDe ? "Media & Blog" : "Media & Blog"}</h1>
          <p>
            {isDe
              ? "Entdecken Sie Einblicke in Events, Kundenerlebnisse, Videos, Rezepte und Geschichten rund um Haralds Kochschule."
              : "Discover event highlights, client experiences, videos, recipes, and stories from Haralds Kochschule."}
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">
            {isDe ? "Aktuelles" : "Latest Updates"}
          </span>
          <h2>
            {isDe
              ? "Einblicke, Events & kulinarische Geschichten"
              : "Insights, Events & Culinary Stories"}
          </h2>
          <p>
            {isDe
              ? "Dieser Bereich kann später regelmäßig mit Blogbeiträgen, Eventfotos, Videos und Kundenmomenten aktualisiert werden."
              : "This section can later be updated regularly with blog posts, event photos, videos, and client moments."}
          </p>
        </div>

        <div className="media-grid">
          {mediaItems.map((item, index) => (
            <motion.article
              className="media-card"
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="media-image" />
              <div className="media-content">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button>{isDe ? "Mehr erfahren" : "Read More"}</button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <InquiryCTA
        title={isDe ? "Möchten Sie Ihr Event hier sehen?" : "Want Your Event Featured Here?"}
        text={
          isDe
            ? "Planen Sie ein besonderes Event in Haralds Kochschule und schaffen Sie Erinnerungen, die bleiben."
            : "Plan a special event at Haralds Kochschule and create moments worth remembering."
        }
        button={nav.inquiry}
      />
    </>
  );
}

export default Media;