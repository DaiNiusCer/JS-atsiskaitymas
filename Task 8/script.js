/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  //sum() - priima du skaičius ir grąžina jų sumą;
  sum = (a, b) => {
    let answer = a + b
    return answer
  }
  //subtraction() - priima du skaičius ir grąžina jų skirtumą;
  subtraction = (a, b) => {
    let answer = a - b
    return answer
  }
  //multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
  multiplication = (a, b) => {
    let answer = a * b
    return answer
  }
  //division() - priima du skaičius ir grąžina jų dalybos rezultatą;
  division = (a, b) => {
    let answer = a / b
    return answer
  }
}

let skaiciuotuvas = new Calculator

console.log(skaiciuotuvas.sum(6, 2))
console.log(skaiciuotuvas.subtraction(6, 2))
console.log(skaiciuotuvas.multiplication(6, 2))
console.log(skaiciuotuvas.division(6, 2))