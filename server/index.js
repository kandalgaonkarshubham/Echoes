const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
