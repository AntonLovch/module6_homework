//Задания по функциям JS//

const arrNew = [0, 1, 8, 8, 7, 5, 42, 55, 10, 0, 47, 'вааптчапо', 0];
function raznyeSumm(){
let odd = 0
let even = 0
let zero = 0

for (let i = 0; i < arrNew.length; i++) {
  if (arrNew[i] === 0) {
    zero += 1
  } else if (typeof(arrNew[i]) !== 'number') {
    console.log(`это не число: ${arrNew[i]}`)
  } else if (arrNew[i] % 2 === 0) {
    even += 1
  } else {
    odd +=1
  }
}
console.log(` ${even} - четных чисел`)
console.log(` ${odd} - нечетных чисел`)
console.log(` ${zero} - нулей`)
}

raznyeSumm();


