const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')



const convertValues = async () => { // Async Await
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = 6.76
    const bitcoin = data.BTCBRL.high

    //console.log(data)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue / dolar) 
    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputCurrencyValue / euro) 
    }

    if(currencySelect.value == 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'GBP'
    }).format(inputCurrencyValue / libra) 
    }

    if(currencySelect.value == 'bitcoin'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'BTC'
    }).format(inputCurrencyValue / bitcoin) 
    }
}

function changeCurrency() {
    const currencyName = document.querySelector('#currency-name')
    const currencyImg = document.querySelector('.currency-img')

    console.log(currencyName)
    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/flag EUA.png'
    }
    if(currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/flag Euro.png'
    }
    if(currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = './assets/flag Libra.png'
    }
    if(currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/flag Bitcoin.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)