const ratings=
{indian:3.5,
    korean:4.2,
    japanese:4.0,
    English:2.5};
const totalRatings=5;
const selectedProduct = document.getElementById("product-select");
const selectedRating = document.getElementById("rating-control");

let product ;
//eventlistener to enable rating on selecting product
selectedProduct.addEventListener("change",(e)=>{
    product=e.target.value;
    selectedRating.disabled=false;
    selectedRating.value=ratings[product];
});

//ratingchange update 
selectedRating.addEventListener('blur',(e)=>{
const rating = e.target.value;
if(rating>5){
    alert('Rate values from 1-5');
}
ratings[product]=rating;
getRatings();
});

// run the fn when dom loads
document.addEventListener("DOMContentLoaded",getRatings);
function getRatings(){
    


for(let r in ratings){
    console.log(ratings[r]);
    const percentage = (ratings[r]/totalRatings) *100;
    
    
    
    const roundedPercent = `${Math.round((percentage/10) * 10)}%`;
    document.querySelector(`.${r} .star-inner`).style.width = roundedPercent;
    document.querySelector(`.${r} .number-rating`).innerHTML = ratings[r];

}

}