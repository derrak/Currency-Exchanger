
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangeRate from './services/currency-service.js';

function clearFields() {
  $('#value1').val("");
  $('.show-errors').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(baseCurrency, targetCurrency, valueToConvert) {
  const response = await CurrencyExchangeRate.getConversionValue(baseCurrency, targetCurrency, valueToConvert);
  getElements(response);
}

$(document).ready(function() {
  $('#btn-convert').click(function() {
    let baseCurrency = "USD";    
    let targetCurrency = $('#convertToCountry').val();
    let valueToConvert = $('#value1').val();
    clearFields();
    makeApiCall(baseCurrency, targetCurrency, valueToConvert);
  });
});