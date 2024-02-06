let x1: number = 1; //we are predefining that x is a no data type
//x = "shreyas" this is not possible in ts but ok in js
console.log(x1);

// the same eqivalent code for js would be
const x = 1;
console.log(x);

function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("shreyas");

function sum(a: number, b: number) {
  console.log("sum is: " + (a + b));
}

sum(10, 20);

function sum2(a1: number, b1: number): number {
  // we are explcititely telling that the return datatype should be a number
  return a1 + b1;
}

console.log(sum2(2, 3));

// type inference we will didnt write as number at the end of the function arguments still ts will not give us error as it automatically converts the return type to number but still it is better to write the return type

function cal(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

cal(45);
cal(10);

function run(fn: () => void) {
  // () means arguments that fn will pass and after => we see what type it will return
  setTimeout(fn, 400);
}

run(function () {
  console.log("this is possible");
});

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // optional user can or cannot pass this wouldnt make much of a difference
}

function calAge(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

calAge({
  firstName: "shreyas",
  lastName: "nayak",
  age: 20,
});

type GreetMe = number | string;

function greet(user: GreetMe) {
  console.log(user);
}
greet("shreyas");
greet(1);

function greet2(user2: number | string) {
  console.log(user2);
}
greet2("shreyas");
greet2(1);

// interview questions = when to user interface and when to user type

// so the basic difference would be interface lets us extend a class by implementing it
// and type does the same thing but we can do & and or(|) with the data types

type Empo = {
  name: string;
  age: number;
  Gender?: string | number;
};

type manager = {
  name: string;
  dept: string;
  startDate?: Date;
};

type HR = Empo & manager;

const me: HR = {
  name: "shreyas",
  age: 20,
  dept: "accounting",
};

function MaxC(arr: number[]): void {
  let maxi = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }
  console.log(maxi);
}

MaxC([13, 22, 45, 74, 12, 0]);

interface Animal {
  name: string;
}

class Dog implements Animal {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
}

interface Usr {
  // we can do this but
  no: number | string;
}

// interface USer = name: string //not this

type KeyInput = "up" | "down" | "left" | "right";

function DoSmthing(KeyPressed: KeyInput): void {
  if (KeyPressed == "up") console.log("up");
  else if (KeyPressed == "down") console.log("down");
  else if (KeyPressed == "left") console.log("left");
  else console.log("right");
}
DoSmthing("up");
// DoSmthing("fnei") //this will cause an error

enum Direction {
  up, // 0
  down, // 1
  left, // 2
  right, // 3
}

function DoBetterSmthing(KeyPressed1: Direction): void {
  if (Direction.up) console.log("up");
  else if (Direction.down) console.log("down");
  else if (Direction.left) console.log("left");
  else console.log("right");
}
DoBetterSmthing(Direction.up);

// doing the same thing for backend

const app = express();

enum ResponseStatus {
  success = 300,
  NotFound = 404,
  Error = 500,
}

app.get("./", async (req: any, res: any) => {
  try {
    if (!req.query.userId) {
      res.status(ResponseStatus.NotFound).json({});
    }
    res.json({});
  } catch (error) {}
});

// Problem statement is to return the 1st element in the array irrespective of it being a no or string

type ac = number | string;

function FirstEle(params: ac[]): ac {
  return params[0];
}

const val = FirstEle(["shreyas", "nayak"]);
const val2 = FirstEle([7, 69, 54]);
console.log(val.toUpperCase()); // this is also wrong
console.log(val2.toUpperCase()); // the error lies in here

function identity2(arg: string | number) {
  return arg;
}
// this kinds of works but the identity dosnt know what are you passing to the function
//(function identity2(arg: string | number): string | number)
let op14 = identity2("shreyas");
let op24 = identity2(69);

function identity<T>(arg0: T) {
  // T could be anything which the calling functions passes
  // T here means genreric functions
  return arg0;
}

let op1 = identity<string>("shreyas");
let op2 = identity<numsber>(69);

// think this as a creating 2 functions one accepting the string and another just accepting the no

function identityMulti(arg3: string) {
  // T here means genreric functions
  return arg3;
}

function identityMultiPle(arg4: number) {
  return arg4;
}

//sol to original problem

function Getme<T>(passing: T[]): T {
  return passing[0];
}

const sendingString = Getme<string>(["shreyas", "nayak"]);
const sendingNumber = Getme<number>([321, 834, 912]);

console.log(sendingString.toUpperCase()); // no problem here now


//also could do

function xyz <T>(Ar: T[]):T{
    return Ar[0]
}

interface User{
    name: string,
    age: number
}

const e1 = xyz<User>([{name: "shreyas", age: 20}])
