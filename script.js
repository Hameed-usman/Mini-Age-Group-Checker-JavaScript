let age = prompt("Enter Your Age");
let agrgroup;

if(age >= 0 && age <=12){
    agegroup = "Child";
}


else if(age >= 13 && age <= 18){
    agegroup = "Teenager";
}

else if(age >= 19 && age <= 64){
    agegroup = "Adult";
}
else {
    agegroup = "Senior";
}

alert ("Your Age Group Is : " +agegroup+ ".");