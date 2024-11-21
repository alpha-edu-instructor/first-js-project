// 1st task
const countries = ["Kazakhstan", "China", "Italy", "France"];
countries.push("Spain");
console.log(countries);

const deletedCountries = [];
const firstDeletedCountry = countries.shift();
deletedCountries.push(firstDeletedCountry);
console.log(countries);
console.log(deletedCountries);

const secondDeletedCountry = countries.shift();
deletedCountries.push(secondDeletedCountry);
console.log(countries);
console.log(deletedCountries);

console.log(countries.join(", "));

// 2nd task
const participants = ["Ернар", "Айгуль", "Данияр"];
participants.splice(1, 0, "Гульмира"); // Добавление
console.log(participants);

participants.splice(3, 1); // Удаление
console.log(participants);

participants.splice(2, 1, "Еркебулан"); // Замена
console.log(participants);