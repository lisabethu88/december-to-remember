import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const ScrollIndicator = ({ recommendation }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;

      // Hide the indicator if scrolled near the bottom
      if (scrollPosition >= scrollHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div className="scroll-indicator">
        <Typography sx={{ fontFamily: "Della Respira", fontWeight: 600 }}>
          Scroll down to view your{" "}
          {recommendation ? "recommendation" : "answers and submit"}
        </Typography>
        <span className="arrow">
          <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
        </span>
      </div>
    )
  );
};

export default ScrollIndicator;
