export const convertPriceDown = (value: string | number) => {
  if (typeof value === 'number') {
    value = value.toString();
  }
  const removedCurrencySymbol = /(\d.*)/.exec(value) || [];
  value = removedCurrencySymbol[removedCurrencySymbol.length - 1];
  value = parseInt(value.replace('.', ''));
  return value;
};

export const convertPriceUp = (value: number): string => {
  return (value / 100).toFixed(2).toString();
};
