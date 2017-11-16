class FizzBuzz {
  calcul() {
    let tableau = [];

    for (let index = 0; index <= 100; index++) {
      if (index % 15 === 0) {
        tableau.push('FizzBuzz');
      } else if (index % 3 === 0) {
        tableau.push('Fizz');
      } else if (index % 5 === 0) {
        tableau.push('Buzz');
      } else {
        tableau.push(index);
      }
    }

    return tableau;
  }
}
