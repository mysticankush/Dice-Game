var allimages=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomindex1 = Math.floor(Math.random()*5);// from 0 to 5
document.querySelectorAll("img")[0].setAttribute("src",allimages[randomindex1]);
var randomindex2 = Math.floor(Math.random()*5);// from 0 to 5
document.querySelectorAll("img")[1].setAttribute("src",allimages[randomindex2]);
if(randomindex1>randomindex2)
{
   document.querySelectorAll("h1")[0].innerHTML= "Player 1 Wins";
}
else if(randomindex1<randomindex2)
{
  document.querySelectorAll("h1")[0].innerHTML="Player 2 Wins";
}
else
{
    document.querySelectorAll("h1")[0].innerHTML="Draw !";
}

// Also look to Angelas video for another solution to this problem
