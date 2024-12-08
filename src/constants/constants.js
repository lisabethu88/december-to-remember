export const MIN_ANSWERS = 1;
export const BUTTON_STYLE = {
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  color: "#f5f2f1",
  textTransform: "none",
  fontFamily: " Della Respira",
  fontSize: "1rem",
  fontWeight: 600,
  letterSpacing: 1,
  transition: "0.3s ease-in-out",
  ":hover": {
    transform: "scale(0.9)",
    transition: "0.3s ease-in-out",
  },
  "&.Mui-disabled": {
    backgroundColor: "lightgray",
    color: "darkgray",
  },
};

export const IMG_STYLE = {
  width: "100%",
  zIndex: "-1",
  display: { xs: "none", sm: "block" },
};
