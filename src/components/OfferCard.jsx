import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function OfferCard({ title, text, link }) {
  return (
    <motion.div
      className="offer-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="offer-img" />
      <div className="offer-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link to={link}>Explore</Link>
      </div>
    </motion.div>
  );
}

export default OfferCard;