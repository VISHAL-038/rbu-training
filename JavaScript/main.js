// external java script
// print values in java script
console.log("This is log")
console.warn("this is warning")
console.error("this is error")

// data types :- 
// 1. primetive data typeof(PDTs):- 

//number
variable_one = 100000000
console.log(variable_one);
console.log(typeof(variable_one))

//string = '' : " " : ``
variable_one="welcome to java scrpit"
console.log(variable_one);
console.log(typeof(variable_one))

//boolean
variable_two=true
console.log(typeof(variable_two))
console.log(variable_two)
variable_two=false
console.log(typeof(variable_two))
console.log(variable_two)

//null
variable_three = null
console.log(variable_three)
console.log(typeof(variable_three))   // value =object (this is an mistake)
    
//undefined
variable_four=undefined
console.log(variable_four)
console.log(typeof(variable_four))

// console.log(variable_five) (show error as variable_five is not defined)


//conditional statement

//ES 5 SYNTAX
demo=10;
if(demo>=0)
{
    console.log(demo + " demo is a +ve number");
}
else{
    console.log(demo +" demo is a negative number")
}

// ES 6 SYNTAX
//condition ? true statement : false statement
demo2=-10;
demo2>=0 ? console.log(demo2 + " demo is a +ve number"):console.log(demo2 +" demo is a negative number");

demo2=-10;
demo2>=0 ? console.log(`${demo2} is a +ve number`):console.log(`${demo2} is a -ve number`);

//let, var , const -> keyword of java script
//let is used to only access the data within the scope.(private access)
//var is used to acess the data anywhere where we need.(public access)
//const .the value inside this is constant can not change the value. it must be initialize while declaring.(private access)
Flag = true;
if(Flag){
    let a
    a=10;
    var b
    b=12;
    const c=110;
    // c=250; //error
    //let a=100;
    console.log(`the value of a inside the block is ${a}`)
    console.log(`the value of b inside the block is ${b}`)
    console.log(`the value of c inside the block is ${c}`)
}
else{
    let b=123100
    console.log(`the value inside the block is ${b}`)
}
console.log(`a outside block is ${b}`)
//console.log(`b outside block is ${a}`) //error not defined
//console.log(`c outside block is ${c}`) //error not defined


//loops :- for , while
// the loops will generate value
console.log("loop for")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("while loop")
let i=0;
while (i<5) {
    console.log(i);
    i++;
}

//non primitve data type
// arrays []->identify by this , contiguous

console.log("array");
let numbers = [10,21,23,43,321]
console.log(numbers)

let arr=[];
console.log(arr);

//arrray object
let arrObj = new Array(10);
console.log(arrObj);
console.log(typeof(arrObj));

console.log(numbers)

// array methods
numbers.push(60);
console.log(numbers)

let myarr1=[100,200,300,400,500]
//array spread operator
//let myarr2=myarr1  // location is copied (address) (not a copy mechanism)
//console.log(myarr1);
//console.log(myarr2);
//myarr2.push(54);
//console.log(myarr)   //100 200 300 400 500 54
let myarr2=[...myarr1];
myarr2.push(90)
console.log(myarr2);
console.log(myarr1)

let deletedElement = myarr1.shift()
console.log(myarr1)

let newLength = myarr1.unshift(50);
console.log(newLength)                          // 5
console.log(myarr1)

let num1 = [10, 20, 30, 40]
let num2 = [100, 200, 300, 400, 500]
let combinedArray = num2.concat(num1);
console.log(combinedArray)                      // 

let dummyArray = [10, "String", true, null, undefined, []]
console.log(dummyArray)