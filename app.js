var PG = document.getElementById("PG");

function agePermit(){
    var age = prompt("Input an age: ");
    var accompanied = prompt("Are you alone: ");

    var age = age;
    var accompanied = true;
    if (age > 12 && accompanied ===true){
        return("You are allowed in")
    }
    else if(age < 12 && accompanied === true){
        return("You are allowed in")
    }
    else if (age < 12 && accompanied !== true){
        return("You can't see the movie")
    }
}
var result =  agePermit();
PG.innerHTML = result;
