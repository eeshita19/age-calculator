var age = prompt("What is your age?")
if (Number(age)<0){
    alert("you aint born yet!!")
}

else{
var days = age * 365.25;
alert(age + " years is roughly " + days + " days");
}