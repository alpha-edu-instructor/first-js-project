// 1st task
const book = {
  title: "Abay zholy",
  author: "Mukhtar Auezov"
};

book.year = 1961;
console.log(book);

book.title = "Bakytsyz Zhamal";
console.log(book);

delete book.author;
console.log(book);

// 2nd task
const user = {};
user.name = prompt("Введите ваше имя:").trim();
user.age = +prompt("Введите ваш возраст:");
user.email = prompt("Введите ваш email:").trim();
console.log(user);

user.isAdmin = false;
console.log(user);

user.age += 1;
console.log(user);

delete user.email;
console.log(user);