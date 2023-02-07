const fetchRandomImage = () => {
    fetch(`https://xkcd.now.sh/?comic=latest`)
    
    .then((response) => {
       if (response.ok) {
         return response.json();
    }
        throw new Error('Something went wrong');
    })
    .then ((apiData) => {
    const image= document.getElementById("image")
    image.src=apiData.img
    })
    .catch ((error) =>{
       console.log(error)
    })
}

const fetchRandomImageAwait = async() => {
    try{
   const response= await fetch(`https://xkcd.now.sh/?comic=latest`);
   if (response.ok){
    const json= await response.json();
    const image= document.getElementById("image")
    image.src=json.img
   }
  else { 
    throw new Error('Something went wrong');
}
    }
    catch(error){
      console.log(error)
    } 
}

fetchRandomImage();
// fetchRandomImageAwait();