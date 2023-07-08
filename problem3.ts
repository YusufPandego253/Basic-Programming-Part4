function Prime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function primaSegiEmpat(wide: number, high: number, start: number): string {
  let result = '';

  let sum = 0;
  let currentNum = start+1;

  for (let i = 0; i < high; i++) {
    let row = '';
    for (let j = 0; j < wide; j++) {
      while (!Prime(currentNum)) {
        currentNum++;
      }
      row += currentNum + ' ';
      sum += currentNum;
      currentNum++;
    }
    result += row.trim() + '\n';
  }

  result += sum;

  return result;
}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/

console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/
