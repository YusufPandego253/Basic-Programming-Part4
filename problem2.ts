function fibonacci(n: number): number {
  if (n === 0) {
    return 0
  } 
  else if (n === 1){
    return 1;
  }
  else if (n === 2){
    return 1
  }
    

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(9)); // 34
console.log(fibonacci(10)); // 55
console.log(fibonacci(12)); // 144
