import { motion } from "framer-motion";

function CulinaryDecor({ variant = "default" }) {
  return (
    <div className={`culinary-decor ${variant}`}>
      <motion.div
        className="decor-shape decor-sauce"
        animate={{
          y: [0, -14, 0],
          rotate: [-8, -4, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="decor-shape decor-plate"
        animate={{
          rotate: [0, 8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="decor-shape decor-oil"
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="decor-shape decor-herb herb-1"
        animate={{ y: [0, -10, 0], rotate: [12, 24, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="decor-shape decor-herb herb-2"
        animate={{ y: [0, 12, 0], rotate: [-18, -6, -18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default CulinaryDecor;