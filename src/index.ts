import { checkPrices } from './script/price-tracker';
process.removeAllListeners('warning');
checkPrices();
