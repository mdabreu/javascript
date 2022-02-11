// declare program variables
var num1;
var num2;
var message; 

// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);

num2 = prompt("Please type another number")
num2 = parseFloat(num2);

if (num2 === 0) {
alert("please enter a different number, not 0 and refresh");
} else if ( isNaN(num1) || isNaN(num2) ) {
        alert("one of the numbers is not a number");
} else {

// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);

}
    
// write message to web page
document.write(message);

