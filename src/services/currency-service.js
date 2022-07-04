export default class CurrencyExchangeRate {  
  static async getConversionValue(baseCurrency,targetCurrency,valueToConvert) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}/${valueToConvert}`);
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}