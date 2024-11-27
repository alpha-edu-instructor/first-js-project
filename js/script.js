// While
let balance = 100;

while (balance > 0) {
  const input = +prompt(`Остаток: ${balance}. Введите любое число:`);

  if (isNaN(input)) {
    alert("Вы ввели некорректное значение!");
    continue;
  }

  balance -= input;
  console.log(`Остаток баланса: ${balance}`);
}

alert("Ваш баланс отрицательный. Игра окончена!");

// For In
const grades = {
  math: 5,
  physics: 4,
  history: 3,
  english: 4
};

for (const key in grades) {
  console.log(`${key}: ${grades[key]} `);
}

// For Of
const contries = ["Kazakhstan", "Great Britain", "France", "Italy"];

for (let i = 0; i < contries.length; i++) {
  console.log(`${i+1}. ${contries[i]}`);
}

for (const country of contries) {
  console.log(country);
}