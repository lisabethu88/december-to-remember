import React from "react";
import { Box } from "@mui/material";
import { IMG_STYLE } from "../constants/constants";
import santa_cc from "../assets/santa-cc.png";
import hand_coco from "../assets/hand-coco.png";
import snowman_present from "../assets/snowman-present.png";
import tree_mitens from "../assets/tree-mittens.png";
import branch_deer from "../assets/branch-deer.png";
import globe_ornament from "../assets/globe-ornament.png";

const LeftImages = () => {
  return (
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
        sx={IMG_STYLE}
      />
      <Box
        component="img"
        src={tree_mitens}
        loading="lazy"
        data-aos="fade-right"
        alt="Zoom in animation"
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={branch_deer}
        loading="lazy"
        data-aos="fade-right"
        alt="Zoom in animation"
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={hand_coco}
        loading="lazy"
        data-aos="fade-right"
        alt="Zoom in animation"
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={snowman_present}
        loading="lazy"
        data-aos="fade-right"
        alt="Zoom in animation"
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={globe_ornament}
        loading="lazy"
        data-aos="fade-right"
        alt="Zoom in animation"
        sx={{
          ...IMG_STYLE,
        }}
      />
    </Box>
  );
};

export default LeftImages;
