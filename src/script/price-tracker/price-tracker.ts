import { findPrice } from '../../library/find-price';
import { PRODUCTS } from '../../products';

interface SearchProduct {
  name: string;
  storeUrls: string[];
}

export const checkPrices = (products: SearchProduct[] = PRODUCTS) => {
  console.log('');
  console.log('---------------');
  console.log(' Price Tracker');
  console.log('---------------');

  products.forEach(async ({ name, storeUrls }: SearchProduct) => {
    console.info('');
    console.info('Product: ', name);
    let best = {
      priceRaw: 0,
      price: '0',
      name: '',
      url: '',
    };
    await storeUrls.forEach(async (storeUrl, index) => {
      const { name, url, price, priceRaw } = await findPrice(storeUrl);
      if (priceRaw < best.priceRaw || index === 0) {
        best = {
          priceRaw,
          price,
          name,
          url,
        };
      }
      console.info('-', name, price, url);
    });
  });
};
