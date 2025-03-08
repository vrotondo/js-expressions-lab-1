//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

// Temperature Data
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 24, 21, 27, 19, 26, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Data Conversions
const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32) * 1.0);

// Data in one format, full list

celsiusTemps.forEach(item => {
    let f_temp = celsiusToFahrenheit(item);
    fahrenheitTemps.push(f_temp);
})

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9.0);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * (9.0 / 5) + 32;
}

var total = 0;
fahrenheitTemps.forEach(item => {
    total += item;
})

// Calculate the total temperatures
const tot_temperature_in_fahrenheit = total;
const tot_temperature_in_celsius = fahrenheitToCelsius(tot_temperature_in_fahrenheit);

// Calculate mean of temperatures
const avg_temperature_in_celsius = tot_temperature_in_celsius / fahrenheitTemps.length;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length;

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
