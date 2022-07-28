let starcontainer=document.getElementById("star"); 
for(let i=0;i<5;i++){
    let starimg=document.createElement("img");
    starimg.src="./star.svg";
    starimg.className="star-style";
    starcontainer.appendChild(starimg);
    starimg.addEventListener("mouseover",()=>onStarHover(i));
    starimg.addEventListener("mouseout",onStarOut);
    starimg.addEventListener("click",()=>onStarClick(i));
}
let active=-1;

let stars=document.querySelectorAll(".star-style");
function onStarClick(i){
active=i;
document.getElementById("star-values").innerHTML=i+1;
fill(active);
}
function onStarHover(i){
fill(i);
}
function onStarOut(){

fill(active);

}
function fill(rating){

    for(let i=0;i<5;i++){
        if(i<=rating){
            stars[i].src="./starcolor.svg";
        }
        else{
            stars[i].src="./star.svg";
        }
    }

}