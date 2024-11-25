const skills = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < skills.length; i++) {
  for (let j = 0; j < skills[i].length; j++) {
    console.log(skills[i][j]);
  }
}

// 1 - i, 2 - j, 3 - k

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + "  ";
  }
  console.log(row);
}

// matrix.length = 3
// matrix[i].length = 4