var randomNumber1;
randomNumber1 = Math.random() * 6;
var num = Math.floor(randomNumber1) + 1;
var randomImae="dice"+num+".png";
var randomImageSource="images/"+randomImae;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);
var randomNumber2;
randomNumber2=Math.random()*6;
var num1=Math.floor(randomNumber2)+1;
var randomImae2="dice"+num1+".png";
var randomImageSource2="images/"+randomImae2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins :)"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins :)";
}
else{
    document.querySelector("h1").innerHTML="draw";
}



