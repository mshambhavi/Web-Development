var p1B = document.querySelector("#p1");
var p2B = document.getElementById("p2");
var p1Display = document.querySelector("#p1D");
var p2Display = document.querySelector("#p2D");
var numInput = document.querySelector("input");
var p = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

p1B.addEventListener("click", function(){
  if(!gameover)
  {
    p1score++;
    if(p1score === winningscore)
    {
      p1D.classList.add("winner");
      gameover = true;
    }
    p1D.textContent = p1score;
  }
});

p2B.addEventListener("click", function(){
  if(!gameover)
  {
    p2score++;
    if(p2score === winningscore)
    {
      p2D.classList.add("winner");
      gameover = true;
    }
    p2D.textContent = p2score;
  }
});

function resetB()
{
  p1score = 0;
  p2score = 0;
  p1D.textContent = 0;
  p2D.textContent = 0;
  p1D.classList.remove("winner");
  p2D.classList.remove("winner");
  gameover = false;
}

reset.addEventListener("click", function(){
  resetB();
});

numInput.addEventListener("change", function(){
  p.textContent = numInput.value;
  winningscore = Number(numInput.value);
  resetB();
});
