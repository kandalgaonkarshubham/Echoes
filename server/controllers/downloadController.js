const puppeteer = require("puppeteer");
const fs = require('fs');
const path = require('path');


const downloadJournal = async (req, res) => {
  const { url, journal, format } = req.body;
  if (!url || !journal || !format) {
    return res.status(400).json({ message: "Incomplete Request" });
  }

  try {
    if (format === "pdf") {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      const context = browser.defaultBrowserContext();
      await context.setCookie({
        name: 'allowAccess',
        value: "true",
        domain: 'localhost',
        path: '/',
      });

      await page.goto(`${url}?title=${journal.title}&content=${journal.content}&date=${journal.createdAt}`, {
        waitUntil: 'networkidle2',
      });
      await page.waitForSelector('#puppeteer', { timeout: 10000 });

      const pdfPath = path.join(process.cwd(), 'public', 'puppeteer', 'output.pdf');
      const dir = path.dirname(pdfPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const pdf = await page.pdf({
        printBackground: true,
        path: pdfPath,
      });
      const pdfBuffer = fs.readFileSync(pdfPath);

      await browser.close();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="journal.pdf"');
      return res.send(pdfBuffer);

    } else if (format === "json") {
      const jsonData = JSON.stringify(journal, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename="journal.json"');
      return res.send(jsonData);
    } else {
      return res.status(400).json({ message: "Invalid format specified" });
    }
  } catch (error) {
    console.error('Error during Puppeteer process:', error.message);
    return res.status(500).json({ message: error.message });
  }
};


module.exports = { downloadJournal };
