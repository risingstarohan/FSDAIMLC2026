// function sum(a,b){
//     return a+b;
// }
// const result = sum(20,50)
// console.log("Sum = " + result)

// 

// function login(msg, error) {
//     if (error) {
//         console.log("Error: " + error);
//     } else {
//         let randomNumber = Math.floor(Math.random() * 1000); 
//         console.log("Welcome");
//         console.log("Your Random Number is: " + randomNumber);
//     }
// }

// function loginVerification(username, password, clbk) {
//     if (username === "risingstarohan" && password === "Rohan") {
//         clbk("Success", null);
//     } else {
//         clbk(null, "Username or Password is incorrect");
//     }
// }

// loginVerification("risingstarohan", "Rohan", login);    


// console.log("First")
// setTimeout(()=>{console.log("Second"),1000})
// for(i=0;i<10000;i++){
//     console.log("Second")
// }
// console.log("Third")

//callback hell error example
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(() => {        
//                         setTimeout(() => {        
//                             setTimeout(() => {        
//                                 setTimeout(() => {  
//                                 console.log("Nine")},1000)
//                             console.log("Eight")},1000)
//                        console.log("Seven") },1000)                          
//                     console.log("Six")}, 1000);
//                 console.log("Five")},1000);
//             console.log("Four")},1000);
//         console.log("Three")},1000);
//     console.log("Two")},1000);
// console.log("One")},1000);

//Promises

const myPromise = new Promise((resolve,reject)=>{
    username = "risingstarohan";
    password = "rohan1234"
    if(username == "risingstarohan" && password == "rohan1234"){
        resolve("success")
    } else{
        reject("username or password is incorrect")
    }

})

myPromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("All the resources have been closed/memory released")
})
