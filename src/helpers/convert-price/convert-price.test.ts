import { convertPriceDown, convertPriceUp } from './convert-price';

describe('convert-price', () => {
  it('converts the price down to a basic format', () => {
    let prices = ['£12.34', '12.34', 12.34, 1234, 6.66, 0.52, '911.0'];
    let expected = [1234, 1234, 1234, 1234, 666, 52, 91100];

    prices.forEach((price, index) => {
      const output = convertPriceDown(price);
      expect(output).toBe(expected[index]);
    });
  });

  it('converts the price up to a standard format', () => {
    let prices = [1234, 666, 52, 1010];
    let expected = ['12.34', '6.66', '0.52', '10.10'];

    prices.forEach((price, index) => {
      const output = convertPriceUp(price);
      expect(output).toBe(expected[index]);
    });
  });
});
