//Operation on array
//function in js
//parameters and arguments
//arguments object
//return value in function
//global variable and local variable
//anonymous function
//immediately invoked function
//objects in js
//this keyword
//math object
//random number
//date object

//no 1 operation on array

let arr = [1, 'asad', 2];
console.log(arr.length);
console.log(typeof arr);
console.log(arr);
arr.push('basit');
arr.push(3);
arr.push('ahmed'); //add value in the array at the last index
console.log(arr);
arr.pop(); // remove value from the last index
console.log(arr);
arr.unshift('Javascript');
arr.unshift('MERN'); // add value in array at 0 index
console.log(arr);
arr.shift(); //remove value from the 0 index
console.log(arr);
arr.splice(2, 1); //it will remove value of 2nd index and 1 means only remove 2nd index value
//if value is 2 or 3 it will starting remove from 2nd index till 3 values removed from the array
console.log(arr);
console.log(arr.indexOf('basit'));

let str = 'This is new string i will convert it into array';
console.log(str);
let newstr = str.split(' '); // it will convert the value into array sirf onko jinke beech space hei
console.log(newstr);
let joinstr = newstr.join(' '); // it will convert the value of array into sentence or ye har value k beech space le aye ga
console.log(joinstr);

let book = [1, 2, 3, 'mybook', 'c++'];

book.forEach((element) => {
  console.log(' ' + element);
});

// functions

function table(value) {
  for (let num = 1; num <= 10; num++) {
    console.log(`${value} x ${num} = ${num * value}`);
  }
}

table(2);

//argument object function

function add() {
  if (arguments.length == 0) {
    console.log('No argument passed');
  } else {
    let sum = 0;
    let mul = 1;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
      if (i + 1 <= arguments.length) {
        mul = mul * arguments[i];
      }
    }
    console.log(sum);
    console.log(mul);
  }
}
add(2, 4, 6);

function addret(a, b) {
  console.log(a + b);
  return a + b;
}

console.log(addret(2, 5));

//Anonymous function
//vo function jis ka name na ho

//function expression
let myvar = function () {
  //mean k koi name assign krna lazmi ei
  console.log('Annonumous Function');
};
myvar();

//real life me is ka use ye hei
setTimeout(function () {
  console.log('Annonumous Function');
}, 2000); //lkin ye function sab se end me chale ga jab isey settimout
// assign kr dein ge q k vo asynchronous js hei
// or async js synchronous k bad chalti

//immediate invoke /iffi function
//vo functions jinhe call nhi krna parta

(function () {
  console.log('Immediately invoke function / iffi function');
})();

(function (name) {
  console.log(`Immediately invoke function ${name} / iffi function`);
})('Iffi function ');
// in ka use jab aap ne function ko use kr k foren delete
//kr dena ho os ka use na krna ho bd me

//palindrome program
let palin = 'maam';
let pla = [];

for (let i = 0; i < palin.length; i++) {
  pla[palin.length - 1 - i] = palin[i];
}

let newpla = pla.join('');
if (newpla == palin) {
  console.log('Palindrome');
} else {
  console.log('Not a Palindrome');
}

// console.log(newpla);
let palindrome = 'madam';
const reval = () => {
  let newpalin = palindrome.split().reverse().join();
  // let newpalin = palindrome.split('').reverse().join('');
  console.log(newpalin);
  if (palindrome == newpalin) {
    console.log('It Palindrome');
  } else {
    console.log('Not a palindrome');
  }
};

reval();

//Objects

let obj1 = {
  user: 1,
  userinfo: {
    name: 'Ahmed',
    age: 18,
  },
};

//Methods in objets

let person = {
  fname: 'M',
  lname: 'Ehtesham',
  // sayhey: function () {
  //   console.log('Hey');
  // },

  sayhey() {
    //es6 version methods
    console.log(`Hey `);
  },
};

// person.sayhey = function () {
//   console.log('Hey');
// };

// person.sayhey();

person.sayhey();

//this keyword
//in objects
//kisi method k ande os ki property ko use krne k liye this. ka use krte hein

let thisobj = {
  fname: 'M',
  lname: 'Ehtesham',
  // sayhey: function () {
  //   console.log('Hey');
  // },

  sayhey() {
    //es6 version methods
    console.log(`Hey ${this.fname + ' ' + this.lname}`);
  },
};

thisobj.sayhey();

//Math objects
console.log(Math.round(4.9));
console.log(Math.ceil(4.2)); // = 5 os se bara nmbr print kre ga
console.log(Math.floor(4.2)); // ans = 4 value choti de ga ye
console.log(Math.floor(4.8));
console.log(Math.trunc(4.7)); // value se point hata de ga
console.log(Math.pow(4, 2)); //16 base,power
console.log(Math.max(4, 80, 9, 70)); // return max

// random numbers

console.log(Math.random()); //0 to 1
console.log(Math.random() * 10); //0 to 9
console.log(Math.random() * 10) + 1; // 0 to 10
console.log(Math.floor(Math.random() * 100) + 1); // point me nhi de ga
console.log(Math.floor(Math.random() * 25 - 10)) + 10; // 10 to 25

//Date object

let dt = new Date(2023, 11, 27, 20, 40, 34, 6); // can do in any format
// year, month, date, timehout, min, sec , millisec
// and if you want to remove any one you can not an issue
console.log(dt);
console.log(dt.getDay());
console.log(dt.setMonth(4));
dt.setDate(dt.getDate() * 40); //* by40 days
console.log(dt);
