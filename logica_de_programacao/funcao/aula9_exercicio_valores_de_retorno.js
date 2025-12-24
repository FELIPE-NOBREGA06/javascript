/** @format */

function eBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(eBissexto(2020));
console.log(eBissexto(2100));
console.log(eBissexto(2000));
console.log(eBissexto(2024));
console.log(eBissexto(2019));
