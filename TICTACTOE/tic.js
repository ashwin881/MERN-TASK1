const container=document.getElementById("container");
const gameresult=document.getElementById("gameresult");
const restart = document.getElementById("restart");
let Xturn=true;
const combination = [

[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]

];
let correctcombination;
startgame("");
restart.addEventListener("click",()=>startgame("restart"));
function startgame(type){
    let box;
    for(let i=0;i<9;i++){
        if(type === "restart"){resetvalues(i);}
        else{
        box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        }
        (box || boxes[i]).addEventListener("click",handleClick,{once:true});
    
   
    }



}
let boxes=document.querySelectorAll(".box");

function resetvalues(i){
    container.style.pointerEvents="unset";
    boxes[i].removeEventListener("click",handleClick);
    boxes[i].innerText="";
    gameresult.innerText="";
    Xturn=true;
    restart.classList.remove("show");
    correctcombination.every((index)=>boxes[index].style.background="none")
}
function checkWinOrNot(currentSelection){
    return combination.some((c)=>{
        correctcombination=c;
        return c.every((index)=>boxes[index].innerText === currentSelection)
    })
    
}






function handleClick(e){
  const currbox = e.target;
  if(Xturn){
      currbox.innerText = "X";
      Xturn=false;
  }
  else{
     currbox.innerText="O";
     Xturn=true;
  }
const currselection=currbox.innerText;
const win = checkWinOrNot(currselection);
if(win){
    
gameOver("win",currselection);
}
else if(isDraw()){
gameOver("draw",currselection);
}
}
function isDraw(){
    return [...boxes].every((b)=>b.innerText === "X" || b.innerText==="O");
}
function gameOver(type,currentSelection){
    if(type=="win"){
        correctcombination.every((item)=>boxes[item].style.background="lightblue")
        gameresult.innerText=currentSelection+" wins the match";
    }
    else{
        gameresult.innerText="match draw";
    }
    container.style.pointerEvents="none";
    restart.classList.add("show");
}