const db = require('../db');
const journals = require('../db/schema/journals');


const getJournals = async (req, res) => {
  try {
    const allJournals = await db.select(journals);
    res.json(allJournals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createJournal = async (req, res) => {
  const { title, content, date, userId } = req.body;

  try {
    await db.insert(journals).values({ title, content, date, userId });
    res.status(201).json({ message: 'Journal created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getJournals, createJournal };
