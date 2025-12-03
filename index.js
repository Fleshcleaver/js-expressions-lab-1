//! Start by creating the variables for the data recorded
const day1TempF = 32
const day2TempC = 25  //77F
const day3TempF = 70
const day4TempC = 18  //64.4F
const day5TempF = 80
const day6TempC = 15  //59F
const day7TempF = 72
const day8TempC = 28  //82.4F
const day9TempF = 68
const day10TempC = 20  //68F
const day11TempF = 75
const day12TempC = 23  //73.4F
const day13TempF = 82
const day14TempC = 30  //86F
const day15TempF = 65
const day16TempC = 22  //71.6F
const day17TempF = 77
const day18TempC = 26  //78.8F
const day19TempF = 78
const day20TempC = 24  //75.2F
const day21TempF = 73
const day22TempC = 21  //69.8F
const day23TempF = 79
const day24TempC = 27  //80.6F
const day25TempF = 71
const day26TempC = 19  //66.2F
const day27TempF = 74
const day28TempC = 17  //62.6F
const day29TempF = 76
const day30TempC = 29  //84.2F

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
//Fahrenheit to Celsius
let day1C = (32 - 32) * 5/9
let day2C = 25
let day3C = (70 - 32) * 5/9
let day4C = 18
let day5C = (80 - 32) * 5/9
let day6C = 15
let day7C = (72 - 32) * 5/9
let day8C = 28
let day9C = (68 - 32) * 5/9
let day10C = 20
let day11C = (75 - 32) * 5/9
let day12C = 23
let day13C = (82 - 32) * 5/9
let day14C = 30
let day15C = (65 - 32) * 5/9
let day16C = 22
let day17C = (77 - 32) * 5/9
let day18C = 26
let day19C = (78 - 32) * 5/9
let day20C = 24
let day21C = (73 - 32) * 5/9
let day22C = 21
let day23C = (79 - 32) * 5/9
let day24C = 27
let day25C = (71 - 32) * 5/9
let day26C = 19
let day27C = (74 - 32) * 5/9
let day28C = 17
let day29C = (76 - 32) * 5/9
let day30C = 29
//! Start the calculation of the total temperatures
const totalTemperatureC = 
  0 + 25 + 21.11 + 18 + 26.67 + 15 + 22.22 + 28 + 20 + 20 +
  23.89 + 23 + 27.78 + 30 + 18.33 + 22 + 25 + 26 + 25.56 + 24 +
  22.78 + 21 + 26.11 + 27 + 21.67 + 19 + 23.33 + 17 + 24.44 + 29;

console.log(totalTemperatureC); //672.89

//* Then apply the conversion to calculate the total in the other unit of measurement
let day1F = 32
let day2F = (25 * 9 / 5) + 32
let day3F = 70
let day4F = (18 * 9 / 5) + 32
let day5F = 80
let day6F = (15 * 9 / 5) + 32
let day7F = 72
let day8F = (28 * 9 / 5) + 32
let day9F = 68 
let day10F = (20 * 9 / 5) + 32
let day11F = 75
let day12F = (23 * 9 / 5) + 32
let day13F = 82
let day14F = (30 * 9 / 5) + 32
let day15F = 65
let day16F = (22 * 9 / 5) + 32
let day17F = 77
let day18F = (26 * 9 / 5) + 32
let day19F = 78
let day20F = (24 * 9 / 5) + 32
let day21F = 73
let day22F = (21 * 9 / 5) + 32
let day23F = 79
let day24F = (27 * 9 / 5) + 32
let day25F = 71
let day26F = (19 * 9 / 5) + 32
let day27F = 74
let day28F = (17 * 9 / 5) + 32
let day29F = 76
let day30F = (29 * 9 / 5) + 32

const totalTemperatureF =
  32 + 77 + 70 + 64.4 + 80 + 59 + 72 + 82.4 + 68 + 68 +
  75 + 73.4 + 82 + 86 + 65 + 71.6 + 77 + 78.8 + 78 + 75.2 +
  73 + 69.8 + 79 + 80.6 + 71 + 66.2 + 74 + 62.6 + 76 + 84.2;

console.log(totalTemperatureF); //2171.2
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
const tot_temperature_in_fahrenheit = 2171.2;
const tot_temperature_in_celsius = 672.89;
//! Start the calculation of the average temperatures
const avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit / 30);
console.log(avg_temperature_in_fahrenheit); //72.3733333333

const avg_temperature_in_celsius = (tot_temperature_in_celsius / 30);
console.log(avg_temperature_in_celsius); //22.4296666667
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

console.log(avg_temperature_in_fahrenheit); 
console.log(avg_temperature_in_celsius); 
//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};
