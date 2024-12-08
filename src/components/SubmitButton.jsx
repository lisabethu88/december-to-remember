import React from "react";
import { Button } from "@mui/material";
import { MIN_ANSWERS, BUTTON_STYLE } from "../constants/constants";

const SubmitButton = ({ handleSubmit, answers }) => {
  return (
    <Button
      onClick={handleSubmit}
      disabled={Object.keys(answers).length < MIN_ANSWERS}
      sx={BUTTON_STYLE}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
