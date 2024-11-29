// 1st task
function add(a, b) {
  return a + b;
}

console.log(add(5, 9));
console.log(add(41, 17));
console.log(add(55, 21));

// 2nd task
function convertToCelcius(f) {
  return ((f - 32) * 5/9).toFixed(2);
}

console.log(convertToCelcius(240));

// 3rd task
function compareAges(age1, age2) {
  if (age1 > age2) {
    return "Первый человек старше!";
  } else if (age1 < age2) {
    return "Второй человек старше!";
  } else {
    return "Оба человека одного возраста!";
  }
}

console.log(compareAges(25, 30))
console.log(compareAges(60, 50))
console.log(compareAges(45, 45))

// 4th task
function sumArray(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([9, 5, 7, 25, 14]));
console.log(sumArray([10, 20, 30, 40, 50, 60]));

// 5th task
function findMax(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log("findMax: " + findMax([9, 5, 39, 7, 25, 14]));
console.log("findMax: " + findMax([10000, 210, 1050, -4, 4000, 20, 14, 8000]));

function findMin(arr) {
  let min = arr[0];

  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log("findMin: " + findMin([9, 5, 39, 7, 25, 14]));
console.log("findMin: " + findMin([10000, 210, 1050, -4, 4000, 20, 14, 8000]));

// 6th task
function countEvenAndOdd(arr) {
  const obj = {even: 0, odd: 0};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    
    if (num % 2 === 0) {
      obj.even += num
    } else {
      obj.odd += num;
    }
  }

  return obj;
}

console.log(countEvenAndOdd([9, 5, 38, 7, 25, 14]));