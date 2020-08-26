import puppeteer, { Browser, Page } from 'puppeteer';

interface OpenedPage {
  browser: Browser;
  page: Page;
}

export const initialiseBrowser = async (): Promise<Browser> => {
  let browser;
  try {
    // console.log('Opening the browser......');
    browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    throw new Error('Could not create a browser instance => : ' + error.message);
  }

  return browser;
};

export const openPage = async (url: string): Promise<OpenedPage> => {
  const browser = await initialiseBrowser();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (
      request.resourceType() === 'stylesheet' ||
      request.resourceType() === 'font' ||
      request.resourceType() === 'image'
    ) {
      request.abort();
    } else {
      request.continue();
    }
  });
  await page.goto(url);

  return {
    browser,
    page,
  };
};

export const close = async (browser: Browser): Promise<void> => {
  browser.close();
};
