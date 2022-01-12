// const calculateTip = (total, tipPercent) => {
//     const tip = total * tipPercent
//     return total + tip
// }

// //shorter 
const calculateTip = (total, tipPercent) => total + (total * tipPercent)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}


module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit
}