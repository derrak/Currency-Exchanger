import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './services/currency-service.js';


function clearFields() {
  $('#value1').val("");
  $('.show-errors').text("");
}

function displayConversionResult(conversionResult) {
  $('.result').text(`The result is ${conversionResult}!`);
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

$(document).ready(function() {
  $('#btn-convert').click(function() {
    let baseCurrency = "USD";    
    let targetCurrency = $('#convertToCountry').val();
    let valueToConvert = $('#value1').val();
    clearFields();
    CurrencyExchangeRate.getConversionValue(baseCurrency, targetCurrency, valueToConvert)
      .then(function(currencyResponse) {
        if (currencyResponse instanceof Error) {
          throw Error(`Exchange Rate API error: ${currencyResponse.message}`);
        }
        const conversionResult = currencyResponse.conversion_result;
        displayConversionResult(conversionResult);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});