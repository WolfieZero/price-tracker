import { openPage, close } from '../../../helpers/browser';
import { convertPriceDown } from '../../../helpers/convert-price';

export const amazon = async (url: string): Promise<number> => {
  const { browser, page } = await openPage(url);
  const selector = '#priceblock_ourprice';

  await page.waitForSelector(selector);

  const price = await page.evaluate(selector => {
    return document.querySelector(selector).innerText;
  }, selector);

  await close(browser);
  return convertPriceDown(price);
};
