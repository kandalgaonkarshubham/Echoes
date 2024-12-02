const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

// Routes
app.use('/', require('../routes/root'));
app.use('/auth', require('../routes/auth'));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
