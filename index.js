var randomNumber1=Math.floor(Math.random() *6) +1;
 var randomdiceimg = "dice" + randomNumber1 + ".png";
var randomImgsrc= "images/" + randomdiceimg;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgsrc);

var randomNumber2=Math.floor(Math.random() *6) +1;
 var randomdiceimg2 = "dice" + randomNumber2 + ".png";
var randomImgsrc2= "images/" + randomdiceimg2;
var image1= document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImgsrc2);


if(randomNumber1> randomNumber2){
  document.querySelector("h1").innerHTML="🚩  Player1 Wins!";
}
else if (randomNumber2> randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 Wins!🚩 ";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
