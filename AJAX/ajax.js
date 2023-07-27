// Asynchronous Javacript and XML
//AJAJ :- A technique to integrate an API to a FE application.

//step!: create an object of XMLhttpRequest

const xhr = new XMLHttpRequest();  //object is created xhr 
const url = 'https://api.github.com/users'  //
console.log(`first ready state ${xhr.readyState} `);
//readyState = 0

//step2: to open the portal of communication between client and server.
xhr.open('GET',url)    // open function is call 
console.log(`second ready state ${xhr.readyState} `);
// readyState = 1

// step x : Set your request header -> setRequestHeaders
// step3: perform an action over request state change.
xhr.onreadystatechange = () =>     //it is a callback wait for server response 
    {
        console.log(`rest ready state ${xhr.readyState} `);
        //readyState = 2 -> 3 -> 4
        if(xhr.readyState == 4 && xhr.status == 200) // wait till ready state is 4 
        {
            //i will get the response from the server => responseText
            const jsonRes=xhr.responseText;
            const res = JSON.parse(jsonRes);
            console.log(res)
        }
    }
xhr.send()  //when the state is 4 then it will send request 