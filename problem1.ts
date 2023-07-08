function prima(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeSeries(count: number): number[] {
  let primes: number[] = [];
  let num = 2;

  while (primes.length < count) {
    if (prima(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function PrimeX(index: number): any {
  if (index <= 0) {
    return "Index harus lebih besar dari 0.";
  }

  let primes = getPrimeSeries(index);

  if (primes.length >= index) {
    return primes[index - 1];
  } else {
    return "Deret bilangan prima terlalu pendek.";
  }
}



console.log(PrimeX(1)); // 2
console.log(PrimeX(5)); // 11
console.log(PrimeX(10)); // 29
console.log(PrimeX(15)); // 47
console.log(PrimeX(20)); // 71
