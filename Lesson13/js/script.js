const btn = document.querySelector('.js-get-data');

btn.addEventListener("click", getURL);

function getURL() { 
    return fetch("https://api.monobank.ua/bank/currency")
} 