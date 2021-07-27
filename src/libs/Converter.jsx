export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
    const input = parseFloat(temperature);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = Math.round(convertTo(input) * 1000) / 1000;

    return output.toString();
}
