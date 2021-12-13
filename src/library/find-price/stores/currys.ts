import { openPage, close } from '../../../helpers/browser';
import { convertPriceDown } from '../../../helpers/convert-price';

export const currys = async (url: string): Promise<number> => {
  const { browser, page } = await openPage(url);
  const selector = '[property="og:price:amount"]';

  await page.waitForSelector(selector);

  const price = await page.evaluate(selector => {
    return document.querySelector(selector).attributes.content.value;
  }, selector);

  await close(browser);
  return convertPriceDown(price);
};
