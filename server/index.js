const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const apiMiddleware = require('./middlewares/apiMiddleware');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

// Routes
app.use('/', require('./routes/root'));
app.use('/login', require('./routes/login'));
app.use(apiMiddleware);
app.use('/register', require('./routes/register'));
app.use('/journal', require('./routes/journal'));
app.use('/download', require('./routes/download'));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
