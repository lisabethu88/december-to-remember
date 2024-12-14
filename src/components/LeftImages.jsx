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
        alt="Victorian etching-style illustration featuring a candy cane in the upper left corner and a laughing Santa Claus from the shoulders up in the bottom right corner."
        sx={IMG_STYLE}
      />
      <Box
        component="img"
        src={tree_mitens}
        loading="lazy"
        data-aos="fade-right"
        alt="Victorian etching-style illustration featuring mittens in the upper right corner and a Christmas tree in the bottom left corner."
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={branch_deer}
        loading="lazy"
        data-aos="fade-right"
        alt="Victorian etching-style illustration featuring a branch in the upper left corner and a deer in the bottom right corner."
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={hand_coco}
        loading="lazy"
        data-aos="fade-right"
        alt="Victorian etching-style illustration of a hand holding an ornament in the upper right corner and a hot cocoa in the bottom left corner."
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={snowman_present}
        loading="lazy"
        data-aos="fade-right"
        alt="Victorian etching-style illustration of a snowman in the upper left corner and a present in the bottom right corner."
        sx={{
          ...IMG_STYLE,
        }}
      />
      <Box
        component="img"
        src={globe_ornament}
        loading="lazy"
        data-aos="fade-right"
        alt="Victorian etching-style illustration of a snowglobe in the upper right corner and an ornament in the bottom left corner."
        sx={{
          ...IMG_STYLE,
        }}
      />
    </Box>
  );
};

export default LeftImages;
