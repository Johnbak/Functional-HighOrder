//Functionnal Programming

// 1.Pure Function
function addPure(a, b) {
  return a + b;
}
console.log("Pure Function", addPure(1, 6));

//2.Avoid Side Effect

//3.First class Function
//// 3.1 Assigning a function to a variable
const addAssigning = function(a, b) {
  return a + b;
};
console.log("Assigning", addAssigning(1, 6));

//// 3.2 Return a Functionnal
function addReturning(a, b) {
  return function() {
    return a + b;
  };
}
const addTwoNumbber = addReturning(1, 6);
console.log("Returning ", addTwoNumbber());

////3 Acepting a function as an argument
//// pass function to another function
function addNumber(a, b) {
  return a + b;
}
function addAcepting(add, a, b) {
  return add(a, b);
}
console.log("Accepting", addAcepting(addNumber, 1, 6));

/**
 *  Higher-Order Functions
 *  - Returning a function
 *  - Accepting a function as an argument
 **/

const bands = [
  { name: "Iron Maiden", age: 60 },
  { name: "Metallica", age: 49 },
  { name: "Ozzy Osbourne", age: 55 }
];

//filter
const old = bands.filter(band => {
  return band.age >= 50;
});

const oldShort = bands.filter(band => band.age >= 50);
console.log("Old :", old);
console.log("Old1 :", oldShort);

//map
const olderBands = bands.map(band => {
  return {
    ...band,
    age: band.age * 2
  };
});

const olderBands1 = bands.map(band => ({
  ...band,
  age: band.age * 2
}));
console.log("Older Bands :", olderBands);

//reduce

const totalAge = bands.reduce((age, band) => {
  return age + band.age;
}, 0);
console.log(totalAge);

//forEach

bands.forEach(band => {
  console.log(`Band : ${band.name} , Age : ${band.age}`);
});

//find , findIndex
const ironMaiden = bands.find(band => band.name === "Iron Maiden");
console.log(`Name : ${ironMaiden.name} , Age :${ironMaiden.age}`);

const ironMaidenIndex = bands.findIndex(band => band.name === "Metallica");
console.log(ironMaidenIndex);

//every
const isFifty = bands.every(band => {
  return band.age >= 50;
});
console.log(isFifty); //if change to 49 that return true

//some
const isFif = bands.some(band => {
  return band.age >= 55;
});
console.log(isFif);

/* *
 * Closures
 * Data Privacy
 * Stateful function
 * */

//Closures
function outer() {
  const name = "Outer";
  return function inner() {
    console.log("Outer nmae: ", name);
  };
}

const innerFuction = outer();
innerFuction();

//Data privacy
//Ex.Count time to use function

function createtime() {
  let counter = 0;
  return function time() {
    counter += 1;
    console.log("Counter:", counter);
  };
}

const times = createtime();
times();
times();

//Stateful function
//Ex.Similar working

function createAdd(a) {
  return function(b) {
    return a + b;
  };
}
//fix  and plus value input
//keep some state and use
const addOne = createAdd(1);
const addTen = createAdd(10);

console.log(`AddOne : ${addOne(10)}`);
console.log(`AddTen : ${addTen(10)}`);

/**
 * Recursion
 **/

//count down 10-0

//What is Recursion?
function countDown(n) {
  if (n < 0) return; //stop function
  console.log(`Countdown: ${n}`);
  countDown(n - 1);
}
countDown(10);

//factorial
// 4! = 4*3*2*1
// f(1) = 1;
// f(2) = 2*f(1)
// f(3) = 3*f(2)
// f(4) = 4*f(3)
// ex.n=4
function factorail(n) {
  if (n === 1) return 1; //base Case
  return n * factorail(n - 1);
}
console.log(`Factorail : ${factorail(4)}`);

//Ex.reverse text
//abc
//abc => cba  //reverse(bc)+a
//bc => cb  //reverse(c) + b
//c => c    //basecase

function reverse(str) {
  if (str.length === 1) return str; //basecase
  const [firstCharacter] = str;
  const remainingCharacters = str.substring(1);
  console.log(firstCharacter);
  console.log(remainingCharacters);
  return reverse(remainingCharacters) + firstCharacter;
}

console.log(`Reverse ${reverse("abcef")}`);

//basicLoop reverse
function reverseLoop(str) {
  let txt = "";
  for (i = str.length; i >= 0; i--) {
    txt = txt + str.charAt(i);
  }
  return txt;
}
console.log(`ReverseLoop ${reverseLoop("abcef")}`);

//Loop SortArray
function sortArray(str) {
  str = str.split("");

  return str.reverse().join("");
}
console.log(`ReverseArray ${sortArray("abcef")}`);
