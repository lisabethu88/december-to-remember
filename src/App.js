import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Select from "./components/Select";
import santa_cc from "./assets/santa-cc.png";
import hand_coco from "./assets/hand-coco.png";
import snowman_present from "./assets/snowman-present.png";
import tree_mitens from "./assets/tree-mittens.png";
import HomeMessage from "./components/HomeMessage";
import branch_deer from "./assets/branch-deer.png";
import globe_ornament from "./assets/globe-ornament.png";
function App() {
  useEffect(() => {
    AOS.init({
      // Optional settings:
      duration: 1200, // Animation duration in ms
      offset: 200, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array ensures this runs only once

  const imgStyle = {
    width: "100%",
    zIndex: "-1",
    display: { xs: "none", sm: "block" },
  };
  return (
    <>
      <Header />

      <Box
        component={"main"}
        sx={{
          my: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          maxWidth: "none",
        }}
      >
        <HomeMessage />
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              component="img"
              src={santa_cc}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={imgStyle}
            />
            <Box
              component="img"
              src={tree_mitens}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={branch_deer}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={hand_coco}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={snowman_present}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={globe_ornament}
              loading="lazy"
              data-aos="fade-right"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
          </Box>
          <Select />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              top: 150,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={hand_coco}
              loading="lazy"
              ly
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={snowman_present}
              loading="lazy"
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={globe_ornament}
              loading="lazy"
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={santa_cc}
              loading="lazy"
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={imgStyle}
            />
            <Box
              component="img"
              src={tree_mitens}
              loading="lazy"
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
            <Box
              component="img"
              src={branch_deer}
              loading="lazy"
              data-aos="fade-left"
              alt="Zoom in animation"
              sx={{
                ...imgStyle,
              }}
            />
          </Box>
        </Box>
      </Box>
      <footer />
    </>
  );
}

export default App;
