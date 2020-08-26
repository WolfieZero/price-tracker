import { openPage, close } from '../../../helpers/browser';
import { convertPriceDown } from '../../../helpers/convert-price';

export const shopto = async (url: string) => {
  const { browser, page } = await openPage(url);
  let price = '0';

  const html = await page.content();
  const findPrice = /data-purchase_amount="([0-9]*)"/g;
  const results = findPrice.exec(html);
  if (results) {
    price = results[1];
  }

  await close(browser);
  return convertPriceDown(price);
};
