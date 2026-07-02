//if statement:
let age:number=20;
if(age>=18){console.log("you are eligible to vote.")}

//if else statement:
let isRaining: boolean = false;
if (isRaining) {
 console.log("Take an umbrella");
} else {
 console.log("Enjoy your day");}
//example:
 let issunday: boolean = false;
 if(issunday) {console.log("play cricket");
 } else{console.log("Noooo");} 
 
 //if, else if, else statement:
 let marks: number=30;
 if(marks>=90) {console.log("rank1");}
 else if(marks>=75) {console.log("rank2");}
 else if(marks>=47) {console.log("rank3");}
 else{console.log("fail");}

 let eligible:number=25;
 if(eligible>=26){console.log("you are eligible to vote.")}
 else if(eligible>=32){console.log("you are not eligible to vote.")}
 else{console.log("None of the above");}

 //switch statement:
 let department: number = 5;
switch (department) {
 case 1:
 console.log("department:","HR");
 break;
 case 2:
 console.log("department:","admin");
 break;
 case 3:
 console.log("department:","vault");
 break;
case 4:
 console.log("department:","pantry");
 break;
case 5:
 console.log("department:","playing area");
 break;
 default:
 console.log("department:","entrance!");}
