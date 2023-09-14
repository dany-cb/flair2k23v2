import puppeteer from "puppeteer";

export default async (req, res) => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the URL provided in the request query parameters
  const { url } = req.query;
  await page.goto(url, { waitUntil: "networkidle0" });

  // Take a screenshot
  const screenshot = await page.screenshot({
    type: "png",
    fullPage: true,
  });

  // Close the browser
  await browser.close();

  // Send the screenshot as a response
  res.setHeader("Content-Type", "image/png");
  res.status(200).send(screenshot);
};
