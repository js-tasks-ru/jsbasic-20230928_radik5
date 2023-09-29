function factorial(n) {
  // будем считать что входной параметр есть положительное число или ноль
  if (n === 0) return 1;
  if (n === 1) return 1;
  let accumulator = 1;
  for (let i = 1; i <= n; i++) {
    accumulator = accumulator*i;
  }
  return accumulator;
}
