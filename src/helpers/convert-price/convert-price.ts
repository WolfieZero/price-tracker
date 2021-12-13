export const convertPriceDown = (value: string | number) => {
  if (typeof value === 'number') {
    value = value.toString();
  }
  const removedCurrencySymbol = /(\d.*)/.exec(value) || [];
  value = removedCurrencySymbol[removedCurrencySymbol.length - 1];
  if (value.includes('.')) {
    return parseInt(parseFloat(value).toFixed(2).replace('.', ''));
  }
  return parseInt(value.replace('.', ''));
};

export const convertPriceUp = (value: number): string => {
  return (value / 100).toFixed(2).toString();
};
