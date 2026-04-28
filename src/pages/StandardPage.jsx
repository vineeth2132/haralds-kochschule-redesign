import { motion } from "framer-motion";
import InquiryCTA from "../components/InquiryCTA";
import { content } from "../data/content";

function StandardPage({ page, language }) {
  const data = page[language];
  const nav = content[language].nav;
  const isDe = language === "de";

  return (
    <>
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">
            {isDe ? "Haralds Kochschule München" : "Haralds Kochschule Munich"}
          </span>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </motion.div>
      </section>

      <main className="page-content">
        {data.sections.map((section, index) => (
          <motion.section
            className={`content-block ${index % 2 === 1 ? "content-block-alt" : ""}`}
            key={section.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            {section.eyebrow && <span className="eyebrow">{section.eyebrow}</span>}

            <h2>{section.title}</h2>

            {section.text && <p>{section.text}</p>}

            {section.list && (
              <div className="list-grid">
                {section.list.map((item) => (
                  <div key={item} className="list-item">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        ))}
      </main>

      <InquiryCTA
        title={isDe ? "Planen Sie Ihr Firmenevent" : "Plan Your Corporate Event"}
        text={
          isDe
            ? "Senden Sie uns Ihre Anfrage mit Gästeanzahl, Wunschtermin und Eventformat. Wir melden uns mit einem passenden Vorschlag zurück."
            : "Send us your request with guest count, preferred date and event format. We will get back to you with a suitable proposal."
        }
        button={nav.inquiry}
      />
    </>
  );
}

export default StandardPage;