const input = document.getElementById("temperature");
const options = document.getElementById("unit");
const convertBtn = document.getElementById("btn");
const result = document.getElementById("result");

function converteTemp() {
    const temperature = parseFloat(input.value);
    const unit = options.value;

    if (isNaN(temperature)) {
        result.textContent = "Ingrese un numero valido";
        result.style.color = "red";
        return;
    }

    let newTemperature;
    let resultOptions;

    switch (unit) {
        case 'celsius':
            newTemperature = temperature;
            resultOptions = '°C';
            break;
        case 'fahrenheit':
            newTemperature = (temperature * 9/5) + 32;
            resultOptions = '°F';
            break;
        case 'kelvin':
            newTemperature = temperature + 273.15;
            resultOptions = 'K';
            break;
        default:
            return;
    }

    result.textContent = `La temperatura convertida es: ${newTemperature.toFixed(2)} ${resultOptions}`;
    result.style.color = "black";
}

convertBtn.addEventListener("click", converteTemp)
input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        converteTemp();
    }
})