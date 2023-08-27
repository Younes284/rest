const types = [
      {
        id:burger,
        type: "burger",
      },
      {
        id:pizza,
        type: "pizza",
      },
      {
        id:snack,
        type: "snack",
      },
      {
        id:drink,
        type: "drink",
      },
      {
        id:dessert,
        type: "dessert",
      },
];
const typeDisplayDiv = document.getElementById('typeDisplay');

const ulElement = document.createElement('ul');


for (const item of types) {
  const liElement = document.createElement('li');
  liElement.textContent = item.type;
  ulElement.appendChild(liElement);
}
typeDisplayDiv.appendChild(ulElement);
  
  
  



