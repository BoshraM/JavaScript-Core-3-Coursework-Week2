 const makeNewImage= (message) => {
  const list=document.getElementById("dog-list")
  const newListItem=document.createElement("li");
  const newRandomImage=document.createElement("img");
  newRandomImage.src=message
  newListItem.appendChild(newRandomImage)
  list.appendChild(newListItem)
  };

const fetchDog= async() => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    return response.json();
  })
  .then((object) =>{
   makeNewImage(object.message);
  })
}
 const clickButton = document.getElementById("button")
  clickButton.addEventListener("click", () =>{ 
    fetchDog();
  })