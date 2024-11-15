// String
// Явное пр. - String(), num.toString()
// Неявное пр. - "" + num

// Number
// Явное пр. - Number()
// Неявное пр. - +str

// Boolean
// Явное пр. - Boolean()
// Неявное пр. - !!variable
// Когда false - '', 0
// Когда true - все остальное


const fileName = "data.csv";
const fileSize = 2048;
const message = `Файл ${fileName} успешно загружен. 
Размер файла ${fileSize} КВ.`;
console.log(message); 