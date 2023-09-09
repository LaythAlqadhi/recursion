function fibs(n) {
  const fib = [0, 1];
  for (let i = 1; i < n; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  return fib[n];
};

function fibsRec(a, b = 1, fib = [0, 1]) {
  if (a === 2) return;
  fib.push(fib[b] + fib[b - 1]) + fibsRec(a - 1, b += 1, fib);
  return fib;
}
