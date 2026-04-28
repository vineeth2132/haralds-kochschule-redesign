import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { content } from "../data/content";

function Navbar({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const t = content[language].nav;
  const isDe = language === "de";

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
    <Link to="/" className="logo" onClick={closeMenu}>
      Haralds <span className="logo-koch">Koch</span>schule
    </Link>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={closeMenu}>
          {t.home}
        </Link>

        <div className="dropdown">
          <button className="dropdown-title">
            {t.cookingEvents} <ChevronDown size={14} />
          </button>

          <div className="dropdown-menu">
            <Link to="/corporate-events/team-building" onClick={closeMenu}>
              {isDe ? "Firmenevents & Teambuilding" : "Corporate Events & Team Building"}
            </Link>

            <Link to="/corporate-events/business-cooking" onClick={closeMenu}>
              Business Cooking
            </Link>

            <Link to="/corporate-events/company-events" onClick={closeMenu}>
              {isDe ? "Weihnachtsfeiern & Firmenfeiern" : "Company Celebrations"}
            </Link>

            <Link to="/corporate-events/kitchen-rental" onClick={closeMenu}>
              {isDe ? "Workshops & Seminare" : "Workshops & Seminars"}
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-title">
            {t.private} <ChevronDown size={14} />
          </button>

          <div className="dropdown-menu">
            <Link to="/private-events/private-celebrations" onClick={closeMenu}>
              {isDe ? "Private Feiern" : "Private Celebrations"}
            </Link>

            <Link to="/private-events/social-cooking-events" onClick={closeMenu}>
              {isDe ? "Social Cooking Events" : "Social Cooking Events"}
            </Link>

            <Link to="/private-events/cooking-classes" onClick={closeMenu}>
              {isDe ? "Kochkurse" : "Cooking Classes"}
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropdown-title">
            {t.venueRental} <ChevronDown size={14} />
          </button>

          <div className="dropdown-menu">
            <Link to="/locations/cooking-gallery-lounge" onClick={closeMenu}>
              {isDe ? "Kochgalerie & Lounge" : "Cooking Gallery & Lounge"}
            </Link>

            <Link to="/locations/lounge" onClick={closeMenu}>
              {isDe ? "Esszimmer-Lounge" : "Dining Lounge"}
            </Link>

            <Link to="/corporate-events/kitchen-rental" onClick={closeMenu}>
              {isDe ? "Eventlocation mit Küche" : "Event Location with Kitchen"}
            </Link>
          </div>
        </div>

        <Link to="/media" onClick={closeMenu}>
          {t.media}
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          {t.contact}
        </Link>

        <button
          className="language-btn"
          onClick={() => setLanguage(language === "en" ? "de" : "en")}
        >
          {language === "en" ? "DE" : "EN"}
        </button>

        <Link to="/contact" className="nav-cta" onClick={closeMenu}>
          {t.inquiry}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;