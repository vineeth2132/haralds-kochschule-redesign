import ContactForm from "../components/ContactForm";

function Contact({ language }) {
  const isDe = language === "de";

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <span className="eyebrow">Contact</span>
        <h1>{isDe ? "Planen Sie Ihr Event" : "Plan Your Event"}</h1>
        <p>
          {isDe
            ? "Ob Firmenevent, Privatfeier, Kochkurs oder Locationmiete — senden Sie uns Ihre Anfrage und wir helfen Ihnen, das passende Format zu finden."
            : "Whether you are planning a corporate event, private celebration, cooking class, or location rental, send us your request and we will help you find the right format."}
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> info@haraldskochschule.de
          </p>
          <p>
            <strong>Phone:</strong> +49 (0)89 22 800 290
          </p>
          <p>
            <strong>Office:</strong> Stollbergstraße 8, 80539 München
          </p>
          <p>
            <strong>Main Entrance:</strong> Thomas-Wimmer-Ring 11, 80539 München
          </p>
        </div>
      </section>

      <ContactForm language={language} />
    </main>
  );
}

export default Contact;