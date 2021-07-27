let gramsOutput = document.querySelector('#gramsOutput');
let kgOutput = document.querySelector('#kgOutput');
let ozOutput = document.querySelector('#ozOutput');

let input = document.querySelector('#lbsInput');

input.addEventListener('input', function (e) {
  const weightInGrams = e.target.value / 0.0022046;
  const weightInKiloGrams = e.target.value / 2.2046;
  const weightInOunces = e.target.value * 16;

  gramsOutput.innerHTML = `<h4>${weightInGrams.toFixed(3)}`;
  kgOutput.innerHTML = `<h4>${weightInKiloGrams.toFixed(3)}`;
  ozOutput.innerHTML = `<h4>${weightInOunces}`;
});
