import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const isMobile = window.innerWidth <= 768;

  return !isMobile ? (
    <motion.div
      className={`custom-cursor ${isHovered ? "hovered" : ""}`}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        mass: 0.1,
      }}
    ></motion.div>
  ) : null;
};

export default Cursor;
