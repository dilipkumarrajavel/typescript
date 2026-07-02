
let fullName: string = "Dilipkumar";
let limit: number = 27;
let isTester: boolean = true;
let score: any = 100;
let stage: unknown = "Playwright";
console.log(("fullName:"),("Dilipkumar").toLocaleUpperCase());
console.log(("age:"),limit);
console.log(("isTester:"),isTester);
console.log(("score:"),score);
console.log(("value:"),stage);


//below the console also can use

console.log(fullName, limit, isTester, score, stage);

let age: number=27;
console.log("Age:",age)

let username: string= "Dilipkumar R";
console.log("User:",username)

let istester: boolean=true;
console.log("tester:",istester)

let data: any = "dilip";
console.log(data);
data=100;
console.log(data);

let value: number | string = 10;
console.log(value);
value = "Dilip";
console.log(value);

let marks: number[] = [80, 90, 100];
console.log(marks);

let name: string[] = ["Diilp","Kumar"];
console.log(name)

let user: [string,number] = ["Dilip",27];
console.log(user)

let empty: null=null;
console.log(empty)

let notset: undefined = undefined;
console.log(notset)

let person: {name: string; age:number}={
    name:"Dilip",
    age:27
}
    console.log(person)

    let emp: { id: number; email?: string } = { id: 101 };
console.log(emp);

enum Status {
  Active,
  Inactive,
  Pending
}
let giriStatus: Status = Status.Active;
console.log(giriStatus);

//--------------------------------------------
// 18. Function return type
//--------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

//--------------------------------------------
// 19. Void function
//--------------------------------------------
function greet(): void {
  console.log("Hello Giri!");
}
greet();

//--------------------------------------------
// 20. Template string
//--------------------------------------------
let message = `Welcome, ${name}!`;
console.log(message);

//--------------------------------------------
// 21. Readonly array
//--------------------------------------------
const giriIds: readonly number[] = [1, 2, 3];
console.log(giriIds);

//--------------------------------------------
// 22. Type alias
//--------------------------------------------
type GiriType = { id: number; username: string };
let giriUser: GiriType = { id: 1, username: "giri" };
console.log(giriUser);

//--------------------------------------------
// 23. Nested object
//--------------------------------------------
let giriProfile = {
  name: "Giri",
  address: { city: "Chennai", pincode: 600028 }
};
console.log(giriProfile);

//--------------------------------------------
// 24. Union array
//--------------------------------------------
let giriCombo: (number | string)[] = ["Giri", 200];
console.log(giriCombo);

//--------------------------------------------
// 25. Tuple with optional
//--------------------------------------------
let giriTuple: [string, number?] = ["Giri"];
console.log(giriTuple);