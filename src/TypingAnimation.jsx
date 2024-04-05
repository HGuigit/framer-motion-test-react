import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TypingAnimation.css"; // Import your CSS file for styling

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === text.length) {
        setTimeout(() => {
          setIndex(1);
          setDisplayText("");
        }, 4000);
      }
      setDisplayText(text.substring(0, index));
      setIndex((prevIndex) => prevIndex + 1);
    }, 200);
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <>
      <span className="typing-animation" style={{ marginRight: "10px" }}>
        {">"}
      </span>
      <motion.span
        className="typing-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="typing-animation"
      >
        |
      </motion.span>
    </>
  );
};

export default TypingAnimation;
