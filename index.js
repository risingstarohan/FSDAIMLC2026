// function sum(a,b){
//     return a+b;
// }
// const result = sum(20,50)
// console.log("Sum = " + result)

// 

function login(msg, error) {
    if (error) {
        console.log("Error: " + error);
    } else {
        let randomNumber = Math.floor(Math.random() * 1000); 
        console.log("Welcome");
        console.log("Your Random Number is: " + randomNumber);
    }
}

function loginVerification(username, password, clbk) {
    if (username === "risingstarohan" && password === "Rohan") {
        clbk("Success", null);
    } else {
        clbk(null, "Username or Password is incorrect");
    }
}

loginVerification("risingstarohan", "Rohan", login);