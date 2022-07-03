
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
    clearFields()
    let baseCurrency = "USD";    
    // let targetCurrency = $('#convertToCountry').val();
    let targetCurrency = "CAD";
    // let valueToConvert = $('#value1').val();
    let valueToConvert = "88888888";
    // clearFields();
    makeApiCall(baseCurrency,targetCurrency,valueToConvert);
  });
});



// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import CurrencyExchangeRate from './services/currency-service.js';


// function clearFields() {
//   $('#value1').val("");
//   $('.show-errors').text("");
// }

// function displayConversionResult(conversionResult) {
//   $('.result').text(`The result is ${conversionResult}!`);
// }

// function displayErrors(error) {
//   $('.show-errors').text(`${error}`);
// }

// $(document).ready(function() {
//   $('#btn-convert').click(function() {
//     let baseCurrency = "USD";    
//     let targetCurrency = $('#convertToCountry').val();
//     let valueToConvert = $('#value1').val();
//     //clearFields();
//     CurrencyExchangeRate.getConversionValue(baseCurrency, targetCurrency, valueToConvert)
//       .then(function(currencyResponse) {
//         console.log(currencyResponse);
//         if (currencyResponse instanceof Error) {
//           throw Error(`Exchange Rate API error: ${currencyResponse.message}`);
//         }
//         const conversionResult = currencyResponse.conversion_result;
//         displayConversionResult(conversionResult);
//       })
//       .catch(function(error) {
//         displayErrors(error.message);
//       });
//   });
// });