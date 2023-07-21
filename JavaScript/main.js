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