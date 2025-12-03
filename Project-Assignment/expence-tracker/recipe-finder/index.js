const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
];

const searchInput = document.getElementById("search");
const foodConainer = document.getElementById("foodConainer");
const clearBtn=document.getElementById("clear");


// foodConainer.addEventListener('click',(e)=>{
//   console.log(e.target);
  
//   const hiddenFlds = foodConainer.getElementsByTagName("p");
//   console.log(hiddenFlds);
  
// })

searchInput.addEventListener('keyup',()=>{
  let searchText=searchInput.value.toLowerCase();
  localStorage.setItem('lastSearch',searchText);
  filterItems(searchText);
});
function filterItems(searchTxt) {
  const newArray = recipes.filter(r =>
     r.title.toLowerCase().includes(searchTxt)
  );
  if(!newArray.length){
    foodConainer.innerHTML="";
    foodConainer.innerHTML=`<p class="emptyText">No recipes available</p>`;
  }
  else{
    loadRecipes(newArray);
  }
}

function loadRecipes(recipes) {
  foodConainer.innerHTML="";

  foodConainer.innerHTML= recipes.map(r=>`
        <div class="foodConainer">
          <h1>${r.title}</h1>
          <div class="details hidden">
            <p><b>Ingredients: </b> ${r.ingredients}</p>
            <p><b>Instructions: </b>${r.instructions} </p>
          </div>
        </div>
    `)
    .join("");

    const container = document.querySelectorAll(".foodConainer");
    container.forEach(c=>{
      c.addEventListener('click',()=>{
          const details= c.querySelector(".details");
          details.classList.toggle("open");
        });
    })
    

  // recipes.forEach(r=>{
  //   const title= document.createElement("h1");
  //   const ingredientsP=document.createElement("p");
  //   const instructionsP=document.createElement("p");
  //   const divContainer=document.createElement("div");
  //   divContainer.classList.add("foodConainer");
  //   title.textContent=r.title;
  //   ingredientsP.innerHTML = `<b>Ingredients:</b> ${r.ingredients}`;
  //   instructionsP.innerHTML=`<b>Instructions:</b> ${r.instructions}`;
  //   divContainer.appendChild(title);
  //   divContainer.appendChild(ingredientsP);
  //   divContainer.appendChild(instructionsP);
  //   foodConainer.appendChild(divContainer);
  // })
}
function clearFun(){
  foodConainer.innerHTML="";
  searchInput.value="";
  loadRecipes(recipes);
}
loadRecipes(recipes);
(function(){
  const savedSearchContent=localStorage.getItem("lastSearch") || "";
  searchInput.value = savedSearchContent;
  filterItems(savedSearchContent);
})();


   



















