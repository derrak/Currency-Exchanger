
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './services/currency-service.js';

function clearFields() {
  $('#value1').val("");
  $('.result').text("");
  $('.show-errors').text("");
}

function getElements(response) {
  if (response.conversion_result) {
    $('.result').text(`The value is ${response.conversion_result}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(baseCurrency,targetCurrency,valueToConvert) {
  const response = await CurrencyExchangeRate.getConversionValue(baseCurrency,targetCurrency,valueToConvert);
  getElements(response);
}

$(document).ready(function() {
  $('#btn-convert').click(function() {
    event.preventDefault();
    let baseCurrency = "usd";
    let targetCurrency = $('#convertToCountry').val();
    let valueToConvert = $('#value1').val();
    clearFields();
    makeApiCall(baseCurrency,targetCurrency,valueToConvert);
  });
});