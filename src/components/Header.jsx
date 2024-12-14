import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import logo from "../assets/Merry Flickmas (1).png";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Header(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ boxShadow: 0 }}>
          <Toolbar sx={{ padding: 1, backgroundColor: " #f5f2f1" }}>
            <Box
              alt="Black and white logo in a Victorian etching style, featuring a pair of drama and comedy masks at the center with holly illustrations on both sides. The website name 'Merry Flickmas' is written above, and 'Est 2024' is displayed below."
              component={"img"}
              loading="lazy"
              data-aos="zoom-in"
              src={logo}
              sx={{
                maxWidth: { xs: 150, sm: 200 },
                margin: "0 auto",
              }}
            ></Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
