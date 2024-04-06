function power() {
  let display = document.getElementsByName("display")[0];
  let value = parseFloat(display.value);

  if (isNaN(value)) {
    display.value = "Error: Invalid input";
    return;
  }

  display.value = value ** 2; // Power in changing by 2.
}

function squareRoot() {
  let display = document.getElementsByName("display")[0];
  let value = parseFloat(display.value);

  if (isNaN(value) || value < 0) {
    display.value = "Error: Invalid input";
    return;
  }

  display.value = Math.sqrt(value);
}

function sin() {
  let display = document.getElementsByName("display")[0];
  let value = parseFloat(display.value);

  if (isNaN(value)) {
    display.value = "Error: Invalid input";
    return;
  }

  display.value = Math.sin(value);
}

function modulo() {
  let display = document.getElementsByName("display")[0];
  let value = parseFloat(display.value);

  if (isNaN(value)) {
    display.value = "Error: Invalid input";
    return;
  }

  display.value = value % 2; // Modulo by 2 
}