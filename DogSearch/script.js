console.log("DOG APP")


const uri="https://dog.ceo/api/breeds/list/all"

async function start(){
    const resp = await fetch(uri)
    const data = await resp.json()
    console.log(data.message)
    createList(data.message)
  
}
start()


function createList(breedlist){
    document.getElementById("breed").innerHTML=
    `
    <select>
    <option>choose dog breed</option>
    ${Object.keys(breedlist).map((breed)=>`<option>${breed}</option>`)}
    </select>
    
    `

}