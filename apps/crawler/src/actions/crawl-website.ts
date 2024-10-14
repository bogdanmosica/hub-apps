import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

type GetCrawlWebsiteArgs = {
  url: string;
  selectors: { name: string; selector: string }[];
};
type CrawlWebsiteResult = { [key: string]: string }[];
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

  // Crawl based on selectors independently and group by index
  // Reduce each selector to capture elements based on the dynamic selector names
  const parsedData = selectors.reduce(
    (acc: CrawlWebsiteResult, { name, selector }) => {
      const elements = $(selector);

      if (elements.length === 0) {
        console.warn(`Selector "${selector}" returned no elements.`);
      }

      // For each element, capture text nodes only and skip irrelevant tags
      elements.each((index, element) => {
        let textContent = '';
        $(element)
          .contents()
          .each((_, node) => {
            // Check if the node is text and its parent is not a script/style tag
            if (
              node.type === 'text' &&
              !$(node).closest('script, style, img, meta').length
            ) {
              textContent += $(node).text().replace(/\s+/g, ' ').trim();
            }
          });

        if (!textContent) {
          console.warn(
            `No visible text found for selector "${selector}" at index ${index}`
          );
        } else {
          console.log(
            `Extracted text for "${name}" at index ${index}: "${textContent}"`
          );
        }

        // Initialize the object at this index if it doesn't exist
        if (!acc[index]) {
          acc[index] = {};
        }

        // Only add non-empty content
        if (textContent) {
          acc[index][name] = textContent;
        }
      });

      return acc;
    },
    []
  );

  // Filter out entries that don't have all required selectors populated
  const result = parsedData.filter(
    (item) => selectors.every(({ name }) => item[name]) // Ensure all selector names have values
  );

  await browser.close();

  return result;
}
