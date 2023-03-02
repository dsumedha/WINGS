// Declare a global variable
var chk = 0;

function calculate() 
{
    var amount = prompt("Enter the price of an item:");
    chk = parseInt(amount);
    alert("Entered price is: " + chk);

    if (chk <= 100)
    {
        alert("You are eligible for a 5% discount!");
    }
    if (chk > 100 && chk <= 500)
    {
        alert("You are eligible for a 10% discount!");
    }
    else if (chk > 500 && chk <= 2500)
    {
        alert("You are eligible for a 25% discount!");
    }
    else if (chk > 2500) 
    {
        alert("You are eligible for a 35% discount!");
    }
    else {
        alert("You are NOT eligible for a discount!");
    }
}
// This gets printed before even executing the calculate() function
// so not initializing it would say undefined value for this variable
// alert("Value of a is: " + chk);

function printDay()
{
    var day;
    switch(new Date().getDay())
    {
        case 0 :
	        day = "Sunday";
            break;
        case 1 :
            day = "Monday";
            break;
        case 2 :
            day = "Tuesday";
            break;
        case 3 :
            day = "Wednesday";
            break;
        case 4 :
            day = "Thursday";
            break;
        case 5 :
            day = "Friday";
            break;
        case 6 :
            day = "Saturday";
            break;
    }
    // document.write("Today's day is: " + day);
    alert("Today's day is: " + day);
}