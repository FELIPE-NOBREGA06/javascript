function encontrarMaximo(array, indice = 0, maxAtural = -Infinity) {
  if (indice === array.length) return maxAtural;

  maxAtural = array[indice] > maxAtural ? array[indice] : maxAtural;

  return encontrarMaximo(array, indice + 1, (maxAtural = -Infinity));
}

console.log(encontrarMaximo([1, 5, 3, 9, 22]));
console.log(encontrarMaximo([-5, -2, -3, -1]));
