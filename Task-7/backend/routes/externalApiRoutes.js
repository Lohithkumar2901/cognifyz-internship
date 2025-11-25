const express = require("express");
const axios = require("axios");
const router = express.Router();
const apiKey = process.env.WEATHER_API_KEY;

// Example: Weather API
router.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching weather data",
      error: error.response?.data || error.message,
    });
  }
});

module.exports = router;

//http://localhost:5000/api/external/weather/Chennai
