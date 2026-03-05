const convertbutton = document.querySelector(".convertbutton");
const currencySelectFrom = document.querySelector(".currency-select-real");
const currencySelectTo = document.querySelector(".currency-select-dolar-euro");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueFrom = document.querySelector(".currency-value-real");
    const currencyValueTo = document.querySelector(".currency-value-dolar");

    const rates = {
        real: 1,
        dolar: 5.1,
        euro: 5.2,
        libra: 6.0,
        iene: 0.035

    };

    const from = currencySelectFrom.value;
    const to = currencySelectTo.value;

    // Passo 1: converte o valor digitado para Real
    const valueInBRL = inputCurrencyValue * rates[from];

    // Passo 2: converte de Real para a moeda de destino
    const convertedValue = valueInBRL / rates[to];

    // mostra o valor digitado na moeda de origem
    currencyValueFrom.innerHTML = new Intl.NumberFormat(getLocale(from), {
        style: "currency",
        currency: getCurrencyCode(from)
    }).format(inputCurrencyValue);

    // mostra o valor convertido na moeda de destino
    currencyValueTo.innerHTML = new Intl.NumberFormat(getLocale(to), {
        style: "currency",
        currency: getCurrencyCode(to)
    }).format(convertedValue);

    // atualiza textos e imagens
    updateCurrencyDisplay(from, to);
}

// funções auxiliares
function getCurrencyCode(currency) {
    if (currency === "real") return "BRL";
    if (currency === "dolar") return "USD";
    if (currency === "euro") return "EUR";
    if (currency === "libra") return "GBP";
    if (currency === "iene") return "JPY";
}

function getLocale(currency) {
    if (currency === "real") return "pt-BR";
    if (currency === "dolar") return "en-US";
    if (currency === "euro") return "de-DE";
     if (currency === "libra") return "en-GB";
    if (currency === "iene") return "ja-JP";
}

function getCurrencyName(currency) {
    if (currency === "real") return "Real";
    if (currency === "dolar") return "Dólar";
    if (currency === "euro") return "Euro";
    if (currency === "libra") return "Libra Esterlina";
    if (currency === "iene") return "Iene Japonês";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateCurrencyDisplay(from, to) {
    document.querySelector(".currencyReal").innerHTML = getCurrencyName(from);
    document.querySelector(".currencyDolar").innerHTML = getCurrencyName(to);

    document.querySelector(".currency-box img").src = `./assets/${capitalize(from)}.png`;
    document.querySelectorAll(".currency-box img")[1].src = `./assets/${capitalize(to)}.png`;
}

// listeners
convertbutton.addEventListener("click", convertValues);
currencySelectFrom.addEventListener("change", convertValues);
currencySelectTo.addEventListener("change", convertValues);

const inputCurrency = document.querySelector(".input-currency");
inputCurrency.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // evita enviar formulário ou quebrar linha
        convertValues();        // chama a função de conversão
    }
});
