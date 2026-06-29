//var,const,let:
var city = "Chennai"; // Old
let name = "Dilip Kumar"; // Can change
const Pincode = 600011; // Constant
name = "R. Dilip Kumar"; 
console.log("name".toLocaleUpperCase,city,name,Pincode);

//Number:
let age: number = 25;
let score: number = 99.5;
let temperature: number = -10;
console.log(age);
console.log(score);
console.log(temperature);
//Output
22
99.5
-10

//Boolean:
let isLoggedIn: boolean = true;
let hasError: boolean = false;
console.log(isLoggedIn);
console.log(hasError);
//Output
true
false

//any:
let data: any = 10;
console.log(data);
data = "Automation";
console.log(data);
data = true;
console.log(data);
//Output
10
Automation
true

//Unknown:
let value: unknown = "Playwright";
if (typeof value === "string") {
 console.log(value.toUpperCase());
}
//Output
Playwright

//Undefined:
let username: string | undefined;
console.log(username); // not assigned yet
username = "Giri";
console.log(username);
//Output
GIRI

//Enum:
enum Browser {
 Chrome,
 Firefox,
 Edge
}
let myBrowser: Browser = Browser.Firefox;
console.log(myBrowser);
//Output
1
//Code (String Enum): 
enum Browser {
 Chrome = "Google Chrome",
 Firefox = "Mozilla Firefox",
 Edge = "Microsoft Edge"
}
let selected: Browser = Browser.Edge;
console.log(selected);
//Output
Microsoft Edge
