const { eq, and } = require('drizzle-orm/expressions');
const { sql } = require('drizzle-orm');

const { db } = require('../db');
const { users, journals } = require('../db/schema');


const getJournals = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Incomplete Request' })

  try {
    // Get the userId
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user.length) {
      return res.status(404).json({ message: 'Invalid User, Please logout and login again' });
    }

    const allJournals = await db.select().from(journals).where(eq(journals.userId, user[0].id));

    res.json(allJournals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createJournal = async (req, res) => {
  const { title, content, email } = req.body;
  if (!title || !content || !email) return res.status(400).json({ message: 'Incomplete Request' });

  try {
    // Get the userId
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user.length) {
      return res.status(404).json({ message: 'Invalid User, Please logout and login again' });
    }

    // Insert journal into database
    await db.insert(journals).values({ title, content, userId: user[0].id });

    res.status(201).json({ message: 'Journal entry added' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJournal = async (req, res) => {
  const { id } = req.params;
  const { title, content, email } = req.body;
  if (!id || !email || !title || !content) return res.status(400).json({ message: 'Incomplete Request' })

  try {
    // Get the userId
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user.length) {
      return res.status(404).json({ message: 'Invalid User, Please logout and login again' });
    }

    // Check if the journal exists and belongs to the user
    const journal = await db.select()
      .from(journals)
      .where(and(eq(journals.id, id), eq(journals.userId, user[0].id)))
      .limit(1);
    if (!journal.length) {
      return res.status(404).json({ message: 'Specified Journal does not exist or does not belong to the user' });
    }

    await db.update(journals).set({ title, content, updatedAt: sql`NOW()` }).where(eq(journals.id, id));

    res.json({ message: 'Journal Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJournal = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  if (!id || !email) return res.status(400).json({ message: 'Incomplete Request' })

  try {
    // Get the userId
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user.length) {
      return res.status(404).json({ message: 'Invalid User, Please logout and login again' });
    }

    // Check if the journal exists and belongs to the user
    const journal = await db.select()
      .from(journals)
      .where(and(eq(journals.id, id), eq(journals.userId, user[0].id)))
      .limit(1);
    if (!journal.length) {
      return res.status(404).json({ message: 'Specified Journal does not exist or does not belong to the user' });
    }

    await db.delete(journals).where(eq(journals.id, id));
    res.json({ message: 'Journal Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getJournals, createJournal, updateJournal, deleteJournal };
