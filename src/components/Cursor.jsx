import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Track mouse position
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Handle hover state for links, buttons, etc.
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Hide cursor on mobile
  const isMobile = window.innerWidth <= 768;

  return !isMobile ? (
    <motion.div
      className={`custom-cursor ${isHovered ? "hovered" : ""}`}
      animate={{
        x: position.x - 16, // center the cursor
        y: position.y - 16, // center the cursor
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        mass: 0.1,
      }}
    >
      {/* Optional: You can add any hover-related effects here */}
    </motion.div>
  ) : null;
};

export default Cursor;
