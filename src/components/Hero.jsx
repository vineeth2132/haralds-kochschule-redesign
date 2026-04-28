import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero({ title, subtitle, primaryText, secondaryText }) {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="eyebrow">Munich Culinary Event Location</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className="hero-actions">
          <Link to="/contact" className="btn primary">
            {primaryText}
          </Link>
          <a href="#experiences" className="btn secondary">
            {secondaryText}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;