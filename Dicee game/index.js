var randomVariable1 = Math.floor(Math.random()*6) + 1;
var randomVariable2 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice" + randomVariable1 + ".png";
var randomImage2 = "images/dice" + randomVariable2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomVariable1 < randomVariable2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏆";
}
else if (randomVariable2 < randomVariable1){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}