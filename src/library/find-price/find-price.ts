import * as stores from '../find-price';
import { convertPriceUp } from '../../helpers';

export interface FoundPrice {
  name: string;
  price: string;
  priceRaw: number;
  url: string;
}

export const findPrice = async (url: string): Promise<FoundPrice> => {
  const patterns = [
    { name: 'Amazon UK', includes: 'amazon.co.uk', func: stores.amazon },
    { name: 'AO', includes: 'ao.com', func: stores.ao },
    { name: 'Currys', includes: 'currys.co.uk', func: stores.currys },
    { name: 'The Game Collection', includes: 'thegamecollection.net', func: stores.gamecollection },
    { name: 'ShopTo', includes: 'shopto.net', func: stores.shopto },
  ];

  let name: string = '';
  let func: Function = () => 'no price found';

  patterns.some(pattern => {
    const found = url.includes(pattern.includes);
    if (found) {
      name = pattern.name;
      func = pattern.func;
    }
    return found;
  });

  const priceRaw = await func(url);
  const price = convertPriceUp(priceRaw);

  return {
    name,
    price,
    priceRaw,
    url,
  };
};
