const categoriesdisplay = document.getElementById("categories")
const search = document.getElementById("search")
const sortby= document.getElementById("sortby")
const mostexpensice= document.getElementById("Mostexpensive")
const chepest= document.getElementById("chepest")


let categories=[
    {
        id:burger,
        category:"Burger",
    },
    
    {
        id:Pizza,
        category:"pizza",
    },

    
    {
        id:salad,
        category:"Salad",
    },

        
    {
        id:drink,
        category:"Drink",
    },

    
    {
        id:dessert,
        category:"Dessert",
    },

];

window.onload = () => {
    addcategory();
};

function addcategory() {
  
    contentParent.innerHTML = "";
  
    categories.forEach((category) => {
      const userDiv = document.createElement("div");
  
      userDiv.classList.add("flex", "justify-between");
  
      userDiv.innerHTML = `<h3>${categories.category}</h3> `;
  
      contentParent.appendChild(userDiv);
    });
  }



