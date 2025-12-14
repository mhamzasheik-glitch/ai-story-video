const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "AI Story Video Backend Running"
  });
});

// ===============================
// STORY → VIDEO (DEMO BACKEND)
// ===============================
app.post("/generate-video", async (req, res) => {
  const { story, language } = req.body;

  if (!story) {
    return res.status(400).json({
      success: false,
      message: "Story required"
    });
  }

  // Demo processing delay
  setTimeout(() => {
    res.json({
      success: true,
      demo: true,
      message: "Video processing complete (demo)",
      videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    });
  }, 3000);
});

// Server start
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
