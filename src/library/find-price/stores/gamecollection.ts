import { openPage, close } from '../../../helpers/browser';
import { convertPriceDown } from '../../../helpers/convert-price';

export const gamecollection = async (url: string): Promise<number> => {
  const { browser, page } = await openPage(url);
  const selector = '.product-info-main [data-price-type] .price';

  await page.waitForSelector(selector);

  const price = await page.evaluate(selector => {
    return document.querySelector(selector).innerText;
  }, selector);

  await close(browser);
  return convertPriceDown(price);
};
