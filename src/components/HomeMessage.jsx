import React from "react";
import { Box, Typography } from "@mui/material";
import borderCorner from "../assets/border-corner-cream.png";

const HomeMessage = () => {
  return (
    <Box
      sx={{
        //boxShadow: 1,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 500,
        backgroundColor: "black",
        height: "fit-content",
      }}
    >
      <Box
        sx={{
          minHeight: 300,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={"img"}
            src={borderCorner}
            sx={{ width: 100, height: 100 }}
          />
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 100,
              height: 100,
              transform: "scaleX(-1)",
            }}
          />
        </Box>
        <Typography
          textAlign={"center"}
          fontFamily={"Della Respira"}
          sx={{
            color: "#f5f2f1",
            marginX: 10,
          }}
        >
          Plan your perfect <b>holiday movie night</b> or a{" "}
          <b>cozy December day</b> filled with <b>winter magic</b>. Answer a few
          fun questions to get <b>personalized recommendations</b> for{" "}
          <b>holiday movies</b> and <b>treats</b>. Let’s make this season{" "}
          <b>unforgettable</b>!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 100,
              height: 100,
              transform: "scaleY(-1)",
            }}
          />
          <Box
            component={"img"}
            src={borderCorner}
            sx={{
              width: 100,
              height: 100,
              transform: "scale(-1)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeMessage;
