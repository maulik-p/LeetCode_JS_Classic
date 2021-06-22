/**
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
 * For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4
 */

function cons(a, b) {
  return (f) => f(a, b);
}

function car(f) {
  return f((a, b) => a);
}

function cdr(f) {
  return f((a, b) => b);
}

const testCases = [
  {
    a: 3,
    b: 4,
    car: 3,
    cdr: 4,
  },
  {
    a: 5,
    b: 64,
    car: 5,
    cdr: 64,
  },
];

function testAlgorithms(func1, func2) {
  testCases.forEach((item) => {
    describe(`Pair Test Case`, () => {
      test(`${func1.name}: (${item.a},${item.b}) returns ${item.car}`, () => {
        expect(func1(cons(item.a, item.b))).toEqual(item.car);
      });
      test(`${func2.name}: (${item.a},${item.b}) returns ${item.cdr}`, () => {
        expect(func2(cons(item.a, item.b))).toEqual(item.cdr);
      });
    });
  });
}

testAlgorithms(car, cdr);
