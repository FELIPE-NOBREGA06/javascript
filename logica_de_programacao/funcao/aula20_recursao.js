function fatoria(n) {
  if (n === 0) {
    return 1;
  }

  return n * fatoria(n - 1);
}

console.log(fatoria(5));
console.log(fatoria(9));
console.log(fatoria(3));
