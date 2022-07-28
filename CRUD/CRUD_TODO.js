let form=document.getElementById("form");
let input=document.getElementById("input"); 
let msg=document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formvalidation(input);
})
let formvalidation=(input)=>{
    if (input.value===""){
        msg.innerHTML="Post cannot be blank";
        console.log("failure");
    }
    else{
        console.log("success");
        msg.innerHTML="";
        acceptData(input);
        
    }

}
let data ={};
let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
};
let createPost = ()=>{
posts.innerHTML+=

`<div>
<p>${data.text}</p>
<span class="options">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash-can"> </i>
</span>
</div>`


};
