import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

type GetCrawlWebsiteArgs = {
  url: string;
  selectors: { name: string; selector: string }[];
};
export async function getCrawlWebsite({
  url = '',
  selectors = [],
}: GetCrawlWebsiteArgs) {
  // Puppeteer logic to scrape the webpage
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const customUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36';
  await page.setUserAgent(customUserAgent);
  await page.goto(url);
  const content = await page.content();
  const $ = cheerio.load(content);

  // Find the common container that wraps all elements you're interested in
  const containers = $(selectors[0].selector).parent(); // Get the parent of the first selector

  // Parse data for each container and ensure it's grouped by selector names
  const parsedData = containers
    .toArray()
    .map((container) => {
      const parsedItem: { [key: string]: string } = {};

      selectors.forEach(({ name, selector }) => {
        const element = $(container).find(selector);

        if (element.length) {
          parsedItem[name] = element
            .contents()
            .filter(function () {
              return this.type === 'text';
            })
            .text()
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/[^\S\r\n]+/g, ' '); // Clean up whitespace
        }
      });

      // Only add parsed item if it has data for all selectors
      return Object.keys(parsedItem).length > 0 ? parsedItem : null;
    })
    .filter(Boolean); // Ensure no invalid entries are included

  await browser.close();

  return parsedData;
}
