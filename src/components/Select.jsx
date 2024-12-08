import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography, Divider } from "@mui/material";
import { questions } from "../data/data";

const Select = ({ answers, setAnswers, recommendation, setRecommendation }) => {
  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setRecommendation(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "100%",
        minWidth: 300,
        mx: 2,
        my: 5,
      }}
    >
      {questions.map((question) => (
        <Box key={question.id} sx={{ width: "100%", maxWidth: 700 }}>
          <Typography variant="h6" gutterBottom>
            {question.label}
          </Typography>
          <Autocomplete
            disabled={recommendation ? true : false}
            disablePortal
            options={question.options}
            value={answers[question.id] || null}
            onChange={(e, newValue) => handleChange(question.label, newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={answers[question.label] || "Select"}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(171, 166, 166, 0.87) ",
                    },
                  },
                  backgroundColor: "white",
                }}
              />
            )}
          />
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export default Select;
