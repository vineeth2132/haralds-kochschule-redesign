import { Link } from "react-router-dom";
import { content } from "../data/content";

function Footer({ language }) {
  const t = content[language].footer;

  return (
    <footer className="footer">
      <div>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
      </div>

      <div>
        <h4>Contact</h4>
        <p>info@haraldskochschule.de</p>
        <p>+49 (0)89 22 800 290</p>
      </div>

      <div>
        <h4>Location</h4>
        <p>Stollbergstraße 8</p>
        <p>80539 München</p>
      </div>

      <div>
        <h4>Explore</h4>
        <Link to="/contact">Contact</Link>
        <Link to="/corporate-events/team-building">Team Building</Link>
        <Link to="/private-events/cooking-party">Private Events</Link>
      </div>
    </footer>
  );
}

export default Footer;