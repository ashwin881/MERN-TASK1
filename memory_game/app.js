
//https://forum.freecodecamp.org/t/how-does-math-random-work-to-sort-an-array/151540
const cardarr = [
{
name:'a',
img:'imgs/a.jpg'

},
{
    name:'b',
    img:'imgs/b.jpg'
    
    },
    {
        name:'c',
        img:'imgs/c.jpg'
        
        },
        {
            name:'d',
            img:'imgs/d.jpg'
            
            },
            {
                name:'e',
                img:'imgs/e.jpg'
                
                },
                {
                    name:'f',
                    img:'imgs/f.jpg'
                    
                    },
                    {
                        name:'a',
                        img:'imgs/a.jpg'
                        
                        },
                
                {
                    name:'b',
                    img:'imgs/b.jpg'
                    
                    },
                    {
                        name:'c',
                        img:'imgs/c.jpg'
                        
                        },
                        {
                            name:'d',
                            img:'imgs/d.jpg'
                            
                            },
                            {
                                name:'e',
                                img:'imgs/e.jpg'
                                
                                },
                                {
                                    name:'f',
                                    img:'imgs/f.jpg'
                                    
                                    }
                



];

cardarr.sort(()=>0.5-Math.random());
const grid=document.querySelector('#grid');


function createBoard(){
    for(let i=0;i<cardarr.length;i++){
    const card=document.createElement('img');
    card.setAttribute('src','imgs/blank.png');
    card.setAttribute('height','100px');
    card.setAttribute('width','100px');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard);
  
   
    grid.appendChild(card);
    }

}
createBoard();
let selectId=[];
let selectCard=[];
let cardsWon=[];
const result=document.querySelector('#score');

function checkmatch(){
    const cards = document.querySelectorAll('img');
    if(selectId[0] == selectId[1]){
        cards[selectId[1]].setAttribute('src','imgs/blank.png');
        cards[selectId[0]].setAttribute('src','imgs/blank.png');
        alert('selected same card');
    }
    else if(selectCard[0]==selectCard[1])
    {
        alert('match found');
        cards[selectId[0]].setAttribute('src','imgs/tick.png');
        cards[selectId[1]].setAttribute('src','imgs/tick.png');
        cards[selectId[0]].removeEventListener('click',flipCard);
        cards[selectId[1]].removeEventListener('click',flipCard);
        cardsWon.push(selectCard);
    }
    else{
        cards[selectId[0]].setAttribute('src','imgs/blank.png');
        cards[selectId[1]].setAttribute('src','imgs/blank.png');
        alert('try again');
    }
    
    selectId=[];
    selectCard=[];
    result.textContent = cardsWon.length;
    if(cardsWon.length === cardarr.length/2){
        result.textContent ='Game Won';
    }
}
function flipCard(){
    let cardId=this.getAttribute('data-id');
   
    this.setAttribute('src',cardarr[cardId].img);
    selectId.push(cardId);
    selectCard.push(cardarr[cardId].name);
    if(selectCard.length==2)
    {
        setTimeout(checkmatch,500);
    }


}
