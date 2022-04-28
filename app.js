var age = 12;
var accompanied = true;
var PG = document.getElementById("PG");

function agePermit(age, accompanied){
    
    if (age > 13 ){
        return("You are allowed in")
    }
    else if(age < 13 && accompanied === true){
        return("You are allowed in")
    }
    else{
        return("Your age is" + age +  "so you can't see the movie")
    }
}
var result =  agePermit(age, accompanied);
PG.innerHTML = result;

