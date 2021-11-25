const calculateCurrencyBtn = document.querySelector('.calculateCurrency') 
const conversionResult = document.querySelector('.result')
const inputField = document.querySelector('input[type="number"]')


calculateCurrencyBtn.addEventListener('click', calculateCurrency)


function calculateCurrency() {
    let amount = inputField.value;
    let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    let selectedCurrency = document.getElementById("currencyOptions").value; 

    fetch(url)
    .then(response => { 
        return response.json();
    })
    .then(data => {
        let convertedAmount = null;
        let output = '';
        if (selectedCurrency === 'USD') {
            convertedAmount = Math.floor(data.bpi.USD.rate_float * amount);
            output = `${amount} Bitcoin is ${convertedAmount} ${selectedCurrency}`;
        } else if (selectedCurrency === 'EUR') {
            convertedAmount = Math.floor(data.bpi.EUR.rate_float * amount);
            output = `${amount} Bitcoin is ${convertedAmount} ${selectedCurrency}`;
        } else if (selectedCurrency === 'GBP') {
            convertedAmount = Math.floor(data.bpi.GBP.rate_float * amount);
            output = `${amount} Bitcoin is ${convertedAmount} ${selectedCurrency}`;
        }
        conversionResult.innerHTML = output;
    });
}
