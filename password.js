// create a variable named password and type a password conataining a number, letter, and 10+ characters long
let password = "Bananaman21!"



//create a if else statement 
//within the if statement see if the var password is >= 10 characters
// in the same if statement make sure password contains a number 
// still in the same if statement make sure password conatains a letter
// if the statement meets the reqs console.log('success')
// add a maxium word length of 20 following the same steps as the first
// add a special character
if (password.length >=10 && password.length <=20 && Number && /[a-zA-Z]/ && password.match(/[?=.*!@#$%^&* ]/)){
    console.log("Success")
}

// create an else consolo.log('failed')
else{
    console.log("Failed")
}