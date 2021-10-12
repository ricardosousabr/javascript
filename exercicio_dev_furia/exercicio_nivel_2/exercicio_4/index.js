function conversorCelsius(celsius){
  let resultadoCelsius = (celsius * 9/5) + 32;
  return resultadoCelsius;
};
console.log(conversorCelsius(1))

function conversorFahrenheit(fahrenheit){
  let resultadoFahrenheit = (fahrenheit - 32) * 5/9;
  return resultadoFahrenheit;
}
console.log(conversorFahrenheit(50))
