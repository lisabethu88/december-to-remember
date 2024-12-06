// 1. General Preferences
// What’s your favorite holiday vibe: heartwarming, hilarious, magical, or action-packed?
// Are you in the mood for a classic holiday movie or something more modern?
// Do you prefer movies set around Christmas, Hanukkah, or just winter in general?
// 2. Themes and Genres
// Do you want a romantic holiday story or something focused on family and friendship?
// Would you enjoy a movie about Santa, snowmen, or magical adventures?
// Are you looking for a musical, a comedy, a drama, or even a holiday thriller?
// 3. Audience
// Are you watching alone, with kids, or with a group of adults?
// Do you want something kid-friendly, family-oriented, or a little more grown-up?
// 4. Setting and Mood
// Do you prefer a cozy small-town holiday or a bustling big-city Christmas?
// Are you into snowy, magical settings, or something a bit more tropical and unconventional?
// 5. Favorites and Nostalgia
// Do you have a favorite holiday tradition or character you’d like to see in the movie?
// Do you want a movie you've seen before or something completely new?
// 6. Time Commitment
// How much time do you have: a quick hour-long special, a standard movie, or a full marathon?
// 7. Quirky Fun Questions
// Which would you rather: rescuing Christmas, saving the family dinner, or winning a holiday contest?
// What’s your favorite holiday treat: hot cocoa, gingerbread, candy canes, or fruitcake?
// If you could spend Christmas with anyone, would it be Santa, a snowman, or a reindeer?

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography, Divider } from "@mui/material";
import { questions } from "../data/data";

const Select = () => {
  const [answers, setAnswers] = React.useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
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
      }}
    >
      {questions.map((question) => (
        <Box key={question.id} sx={{ width: "100%", maxWidth: 700 }}>
          <Typography variant="h6" gutterBottom>
            {question.label}
          </Typography>
          <Autocomplete
            disablePortal
            options={question.options}
            value={answers[question.id] || null}
            onChange={(e, newValue) => handleChange(question.id, newValue)}
            renderInput={(params) => (
              <TextField {...params} label={"Select"} fullWidth />
            )}
          />
          <Divider sx={{ my: 2 }} />
        </Box>
      ))}

      <Typography variant="body1" sx={{ mt: 2 }}>
        Your answers: {JSON.stringify(answers, null, 2)}
      </Typography>
    </Box>
  );
};

export default Select;
