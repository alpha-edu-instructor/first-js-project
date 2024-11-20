const temp = +prompt("Введите текущую температуру:");
const isVeryCold = temp < -10;
const isCold = temp >= -10 && temp < 0;
const isWarm = temp >= 0 && temp <= 20

if (isVeryCold) {
  alert("Очень холодно! Наденьте всё самое тёплое.");
} else if (isCold) {
  alert("Холодно. Убедитесь, что вы в зимней одежде.");
} else if (isWarm) {
  alert("Прохладно. Наденьте куртку.");
} else {
  alert("Тёпло. Одевайтесь легко.");
}