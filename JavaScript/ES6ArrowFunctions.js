//ES 5
// let functionName = function(param){ ..functionbody.. }

const add = function(a,b)
{
    return(a+b);
}
let sum = add(100,20);
console.log(sum)
console.log(add(20,50));

//ES6
//array;-[] ; objects;-{} ; AoO ;-[{},{}]
//fuunction:- ()
const greeting = (fName,LName) =>{
    console.log(100/0)
    console.log('string'+100);     //internal typecasting  //string100
    console.log('string'-100);    //NaN
    console.log('string'*100);    //NaN
    console.log('string'/100);    //NaN
    console.log(100+true);        //101
    console.log(100+false);       //100
    console.log("String"+true);
    return `Hello ${fName} ${LName}`
}
console.log(greeting("vishal","."))
console.log(typeof(greeting));  //function
