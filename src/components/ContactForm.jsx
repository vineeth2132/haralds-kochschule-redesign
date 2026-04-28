function ContactForm({ language }) {
  const isDe = language === "de";

  return (
    <form className="contact-form">
      <div className="form-row">
        <input type="text" placeholder={isDe ? "Name" : "Name"} />
        <input type="email" placeholder={isDe ? "E-Mail" : "Email"} />
      </div>

      <div className="form-row">
        <input type="tel" placeholder={isDe ? "Telefon" : "Phone"} />
        <input
  type="date"
  min={new Date().toISOString().split("T")[0]}
  aria-label={isDe ? "Wunschtermin" : "Preferred Date"}
/>
      </div>

      <select>
        <option>{isDe ? "Eventart auswählen" : "Select Event Type"}</option>
        <option>Corporate Event</option>
        <option>Private Party</option>
        <option>Cooking Class</option>
        <option>Location Rental</option>
      </select>

      <input
  type="number"
  min="0"
  step="1"
  placeholder={isDe ? "Anzahl der Gäste" : "Number of Guests"}
/>

      <textarea
        rows="6"
        placeholder={isDe ? "Ihre Nachricht" : "Your Message"}
      />

      <button type="submit" className="btn primary">
        {isDe ? "Anfrage senden" : "Send Inquiry"}
      </button>
    </form>
  );
}

export default ContactForm;