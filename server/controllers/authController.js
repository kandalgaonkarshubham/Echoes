const bcrypt = require('bcryptjs');
const db = require('../db');
const users = require('../db/schema/users');


const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await db.select(users).where(users.email.eq(email));
    if (existingUser.length) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await db.insert(users).values({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await db.select(users).where(users.email.eq(email)).limit(1);
    if (!user.length) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isValid = await bcrypt.compare(password, user[0].password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      message: 'Login successful',
      user: { email: user[0].email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
