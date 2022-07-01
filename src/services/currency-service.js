export default class CurrencyExchangeRate {  
  static async getConversionValue(baseCurrency,targetCurrency,valueToConvert) {
    try {
      let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}/${valueToConvert}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else{
        return response.json();}
    } catch(error) {
      return error.message;
    }
  }
}