import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Header from "./components/Header";
import Select from "./components/Select";
import HomeMessage from "./components/HomeMessage";
import Answers from "./components/Answers";
import { BUTTON_STYLE, MIN_ANSWERS } from "./constants/constants";
import axios from "axios";
import SubmitButton from "./components/SubmitButton";
import LeftImages from "./components/LeftImages";
import RightImages from "./components/RightImages";
import film from "./assets/film.png";
import snack from "./assets/snack.png";

function App() {
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Load the API key from environment

    try {
      setLoading(true); // Start loading

      const prompt = `Based on the following preferences, recommend a movie and a snack: ${JSON.stringify(
        answers
      )}. 

Please return your response in the following JSON format:

{
  "movie": {
    "title": "Movie Title",
    "description": "Brief description of the movie."
  },
  "snack": {
    "name": "Snack Name",
    "description": "Brief description of the snack."
  }
}

Only return the JSON object and ensure it is properly formatted.`;

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the recommendation and parse it into JSON
      const movieSnackRecommendation = JSON.parse(
        response.data.choices[0].message.content
      );
      setRecommendation(movieSnackRecommendation);

      console.log("Recommendation:", movieSnackRecommendation);
      setAnswers({});
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      alert("Failed to fetch recommendation. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      // Optional settings:
      duration: 1200, // Animation duration in ms
      offset: 200, // Offset (in px) from the original trigger point
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Header />

      <Box
        component={"main"}
        sx={{
          my: 25,
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
          <LeftImages />
          <Select
            answers={answers}
            setAnswers={setAnswers}
            recommendation={recommendation}
            setRecommendation={setRecommendation}
          />
          <RightImages />
        </Box>
        {(Object.keys(answers).length >= MIN_ANSWERS || recommendation) && (
          <>
            <Box
              sx={{
                maxWidth: 750,
                backgroundColor: "white",
                padding: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Center horizontally
                alignItems: "center",
                textAlign: "left",
                boxShadow: 2,
                textWrap: "wrap",
              }}
            >
              <Box>
                {Object.keys(answers).length >= MIN_ANSWERS && (
                  <Answers answers={answers} />
                )}
              </Box>
              {loading && (
                <CircularProgress
                  sx={{ color: "black", width: "100px", height: "100px" }} // Set a fixed size for the circle if needed
                />
              )}
              {!loading && recommendation && (
                <Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    {" "}
                    <Box
                      component={"img"}
                      src={film}
                      sx={{
                        maxWidth: 100,
                        height: "fit-content",
                        display: { xs: "none", sm: "block" },
                      }}
                    ></Box>
                    <Box>
                      <Typography sx={{ fontFamily: " Della Respira" }}>
                        <b>Movie Title:</b>

                        <Typography
                          variant="span"
                          sx={{ fontFamily: "Lexend Deca", fontWeight: 300 }}
                        >
                          {recommendation.movie?.title || "N/A"}
                        </Typography>
                      </Typography>
                      <Typography sx={{ fontFamily: " Della Respira" }}>
                        <b>Movie Description:</b>{" "}
                        <Typography
                          variant="span"
                          sx={{ fontFamily: "Lexend Deca", fontWeight: 300 }}
                        >
                          {" "}
                          {recommendation.movie?.description || "N/A"}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                  <br />
                  <br />
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    {" "}
                    <Box
                      component={"img"}
                      src={snack}
                      sx={{
                        maxWidth: 100,
                        height: "fit-content",
                        display: { xs: "none", sm: "block" },
                      }}
                    ></Box>
                    <Box>
                      <Typography sx={{ fontFamily: " Della Respira" }}>
                        <b>Snack Name:</b>{" "}
                        <Typography
                          variant="span"
                          sx={{ fontFamily: "Lexend Deca", fontWeight: 300 }}
                        >
                          {recommendation.snack?.name || "N/A"}
                        </Typography>
                      </Typography>
                      <Typography sx={{ fontFamily: " Della Respira" }}>
                        <b>Snack Description:</b>{" "}
                        <Typography
                          variant="span"
                          sx={{ fontFamily: "Lexend Deca", fontWeight: 300 }}
                        >
                          {recommendation.snack?.description || "N/A"}
                        </Typography>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>

            {!recommendation && (
              <SubmitButton answers={answers} handleSubmit={handleSubmit} />
            )}
            {recommendation && (
              <Button
                onClick={() => {
                  setRecommendation(null);
                }}
                sx={BUTTON_STYLE}
              >
                Start Over
              </Button>
            )}
          </>
        )}
      </Box>
      <footer />
    </>
  );
}

export default App;
