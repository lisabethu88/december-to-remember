import React from "react";
import { Typography, Divider } from "@mui/material";
import { MIN_ANSWERS } from "../constants/constants";

const Answers = ({ answers }) => {
  return (
    <>
      <Typography variant="h6" sx={{}}>
        <b>Your answers:</b>
      </Typography>

      {Object.entries(answers).map(([key, value], index, array) => (
        <>
          <Typography
            className="answers"
            key={key}
            variant="body1"
            sx={{ m: 2 }}
          >
            {key} <b>{value}</b>
          </Typography>
          {index < array.length - 1 && <Divider />}
        </>
      ))}
      {Object.keys(answers).length < MIN_ANSWERS && (
        <Typography>None selected.</Typography>
      )}
    </>
  );
};

export default Answers;
