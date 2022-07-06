/*

note that callbacks in this case are just functions needed to be done after a timeout
const Pending = 0; 
const Fulfilled = 1;
const Rejected = 2; 
// promise will be in one of these states

function CustomPromise(executor){
    // executor actually does the work while promises figures out what to do after work is done
    let state = Pending
    // waiting for work to complete
    let value = null
    // eventually some value or error
    let handlers = [];
    // maybe we need more than one callback once work is done 
    let catches = [];
    // more than one callback once error 

    function resolve(result){
        // work is done and I have the resulting value 
        // this function will be called by the executor and give  as a parameter to executor function

        if (state !== Pending) return; 
        // if we are not pending anymore then I am not going to resolve anymore; value will not change 

        state=Fulfilled
        // if in pending state and since, work is resolved then it is fulfilled
        value=result

        handlers.forEach((h) => h(value));
        for every handler function in the array I'll execute the handler function give each of them that value that just came back
    }

    function reject(err){
        if (state !== Pemding) return;
        // this never calls if promise is already finished 

        // if promise hasnt finished and this function is called then it means its rejected 
         state=Rejected;
         value=err;
         catches.forEach((c)=> c(err));
         }
         // call each error handling function and give it error message 

    this.then = function (callback) {
        // .then adds handler to array
        // takes whatever the callback function is and does one of two things:
       
        if (state===Fulfilled) {
            // we do not have to wait for anythingf
            callback(value);
            // execute callback with our value 
        }
        else {
            // if we are waiting, simply add callback to handlers 
            handlers.push(callback);
        }
        



    }
    }
    // this has to be done when promise is created: run execution function
    // creation of promise runs the execution 
    executor(resolve, reject);
    // functions are passed to executing function so it can use then when work is completed 
}



const doWork = (res,rej) => {
    setTimeout(()=>{res("Hello World")}, 1000)
    // runs res() after one sec 
}

const doOtherWork = (res,rej) => {
    setTimeout(()=>{res("Hello World")}, 1000)
    // runs res() after one sec 
}
let someText = new CUstomPromise(doWork);
// creates promise which will represent a future value and give it executor function 
// state will be pending and value will be null initially and then inside executor function we call the res function and give value Hello World
// value will be the value inside promise object. 
// Every handler that I add using .then will be run

someText.then((val)) => {
    console.log("1st log: " + val);
    // adds the function passed in to an array of handlers 
}
setTimeout(() => {
    someText.then((val)) => {
        console.log("3rd log: " + val);
        // we can add another handler when a promise has been resolved 
    });
}, 3000);

let someOtherText=someText
.then((val)=>{
    console.log("1st log: " +val)
    return new Promise(doOtherWork);
})
.then function returns  a promise synched up to the primise the val function returns 
// when the promise in val function resolves , new promise created by .then resolves and will have same value that the promise I created resolves to 

someOtherText.then((val) =>{
    console.log(val);
    // returns string 
})

// first handler is attached to original promise and new handler has been attached to new promise returned from .then
*/








/*
fetch('video.json')
// goes to get info from this .json file and returns a promise
/then(response => response.json())
// shorthand function to return results of response.json which is a promise 
// parses JSON data and converts into JavaScript arrays and objects
// response.json returns a promise 
.then(data => console.log(data));
// when this function is executed, final in-memory result is there when json is parsed and will be outputted to console


thennable object is a object with a then functoin 

----------------------------------------------------------------------------------
Asynch and Await:

asynch tells engine we intend to await at least one thing inside this function 
we are awaiting a promise. Await will rely on what its awaiting to be a promise
when the asynch function reaches await keyword; execution context is paused until promise being waited for results in smth
basically another work is called and happening. once its done, paused context is unpaused. now we have the value the promise represents 



*/