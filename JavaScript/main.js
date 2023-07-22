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

myarr1.pop()
console.log(myarr1)


let deletedElement = myarr1.shift()
console.log(myarr1)

let newLength = myarr1.unshift(50);
console.log(newLength)                          // 5
console.log(myarr1)

let num1 = [10, 20, 30, 40]
let num2 = [100, 200, 300, 400, 500]
let combinedArray = num2.concat(num1);  //combine arrays
console.log(combinedArray)                      
let combinedArray2 = num1.concat(num2);
console.log(combinedArray2);

let dummyArray = [10, "String", true, null, undefined, []]
console.log(dummyArray)
console.log(dummyArray.length);  //find length of array

// twoDArray=[ [],[],[] ]
let twoDArray = [[10,20,30],[40,50,60],[70,80,90]]   //3X3 matrix
console.log(twoDArray);
console.log(twoDArray[1][1]);
console.log(twoDArray[1][2]);

//non primitive data type = JS OBJECTS {}this denote object
// 2 ways to make = 
// let myObj = {key 1 : value1 , key 2 : value 2}
// console.log(myObj);
// console.log(typeof(myObj));

let myObj ={
    name: "user one",
    email:"gr@gmil.com",
    password: "dsfdknv",
    empNo: 21,
    boolena:true,
    hobbies:["drawing" , "photography"],
    address: {
        street: "vista",
        city: "kharar",
        state: "punjab",
        pincode :[140301,160047]
    }
}
console.log(myObj);
console.log(`hi this is uer ${myObj.name}, my email is ${myObj.email},  my password is ${myObj.password} , my employe number is ${myObj.empNo} , my hobnies are ${myObj.address.city} and my address is ${myObj.address}. the all things are written above is ${myObj.boolena} `);  // access specific this in JS object
// we store object in a key value pair in this type of data type.
console.log(myObj.hobbies[0]); // accesing array inside object
console.log(myObj.address.city);
console.log(myObj.address.pincode);

//camel casing -> two letters firest letter word lower case and second letter uppercase

let myObj1= new Object
myObj1.name = "vdd"
myObj1.email="fDS@greg"
console.log(myObj1);

// array of objects :- [{}, {}, {}]
const users = [
    {
        name: "user one",
        email:"user1@gmil.com",
        password: "dsfdknv",
        empNo: 21,
        boolena:true,
        hobbies:["drawing" , "photography"],
        address: {
            street: "vista",
            city: "kharar",
            state: "punjab",
            pincode :[140301,160047]
        } 
    } , 

    {
        name: "user two",
        email:"user2@gmil.com",
        password: "dsfdknv",
        empNo: 21,
        boolena:true,
        hobbies:["drawing" , "photography"],
        address: {
            street: "vista",
            city: "kharar",
            state: "punjab",
            pincode :[140301,160047]
        }
    } ,

    {  
        name: "user three",
        email:"user3@gmil.com",
        password: "dsfdknv",
        empNo: 21,
        boolena:true,
        hobbies:["drawing" , "photography"],
        address: {
            street: "vista",
            city: "kharar",
            state: "punjab",
            pincode :[140301,160047]
        }
    }
]
console.log(users)
console.log(users[0].password)
console.log(users[0].address.pincode[1]);

//4 . stringified array of object (JSON code) (looks like array of object but keys and value is of string type)
//JSON :- java script object notation 
// JS  -> interface -> json -> function
// 1. stringify  convert array of object to json
console.log("json")
const myJSONresponse = JSON.stringify(users);
console.log(myJSONresponse)

// json to array of objet : parse()
console.log("array of object")
const convertArrayOFObject=JSON.parse(myJSONresponse)
console.log(convertArrayOFObject)