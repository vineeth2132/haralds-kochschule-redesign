import { Link } from "react-router-dom";

function InquiryCTA({ title, text, button }) {
  return (
    <section className="inquiry-cta">
      <div>
        <span className="eyebrow">Plan Your Experience</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <Link to="/contact" className="btn primary">
        {button}
      </Link>
    </section>
  );
}

export default InquiryCTA;