//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

//Используйте Arrow Function синтаксис.

//Протестируйте функцию на любых значениях и выведите результат в консоль.

const x = 5;
const n = 3;

const stepen=(x, n)=> {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(stepen (x, n));
