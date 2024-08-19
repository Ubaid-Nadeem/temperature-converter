function formula(temperature) {
  return {
    CelsiusToFahreheit: (temperature * 9) / 5 + 32,
    CelsiusToKelvin: (temperature + 273.15),
    FahreheitToCelsius: ((temperature - 32) * 5) / 9,
    FahreheitToKelvin: ((temperature - 32) * 5) / 9 + 273.15,
    KelvinToCelsius: temperature - 273.15,
    KelvinToFahreheit: ((temperature - 273.15) * 9) / 5 + 32,
    CelsiusToCelsius : temperature,
    KelvinToKelvin : temperature,
    FahreheitToFahreheit : temperature
  };
}

let [input, input2] = document.querySelectorAll("input");
let [select1, select2] = document.querySelectorAll("select");

input.addEventListener("keyup", (event) => {
  let formulaFormate = select1.value + "To" + select2.value;
  let res = formula(Number(input.value));
  for (data in res) {
    if (data === formulaFormate) {
      input2.value = Number(res[data]).toFixed(0);
    }
  }
});

input2.addEventListener("keyup", (event) => {
    let formulaFormate = select2.value + "To" + select1.value;
    let res = formula(Number(input2.value));
    for (data in res) {
      if (data === formulaFormate) {
        input.value = Number(res[data]).toFixed(0);
      }
    }
});

select1.addEventListener("change", (event) => {
    let formulaFormate = select2.value + "To" + select1.value;
    let res = formula(Number(input2.value));
    for (data in res) {
      if (data === formulaFormate) {
        input.value = Number(res[data]).toFixed(0);
      }
    }
});

select2.addEventListener("change", (event) => {
    let formulaFormate = select1.value + "To" + select2.value;
    let res = formula(Number(input.value));
    for (data in res) {
      if (data === formulaFormate) {
        input2.value = Number(res[data]).toFixed(0);
      }
    }
});
