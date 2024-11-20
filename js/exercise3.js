const a = +prompt("Введите первое число:");
const b = +prompt("Введите второе число:");
const operation = prompt("Введите математическую операцию (+, -, *, /):").trim();
let result = 0;

if (isNaN(a) || isNaN(b)) {
  alert("Ошибка: введите числовые значения.");
} else {
  if (operation === "+") {
    result = a + b;
  } else if (operation === "-") {
    result = a - b;
  } else if (operation === "*") {
    result = a * b;
  } else if (operation === "/") {
    result = a / b;
  } else {
    alert("Вы ввели неверную математическую операцию!");
  }

  if (result) {
    alert(`Результат: ${result}`);
  }
}