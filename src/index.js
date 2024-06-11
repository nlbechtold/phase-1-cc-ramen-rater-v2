// index.js
fetch("http://localhost:3000/ramens")
.then((r) =>r.json())
.then((ramens)=>{
  console.log(ramens)
  ramens.forEach((ramen) => {
    displayRamens(ramen)
  })

})

function handleClick(ramen) {
  const ramenName = document.querySelector(".name")
  const ramenRestaurant = document.querySelector(".restaurant")
  const ramenImage = document.querySelector(".detail-image")
  const ramenRating = document.querySelector("#rating-display")
  const ramenComment = document.querySelector("#comment-display")

  ramenName.textContent = ramen.name
  ramenRestaurant.textContent = ramen.restaurant
  ramenImage.src = ramen.image
  ramenRating.textContent = ramen.rating 
  ramenComment.textContent= ramen.comment
  
  
}
// // REAPLACED with function --const handleClick = (ramen) => {
// //   // Add code
// // };
const addSubmitListener = document.querySelector("#new-ramen")
addSubmitListener.addEventListener("submit", (e)=> {
  e.preventDefault()
  const newRamen = {
    name: e.target["new-name"].value,
    restaurant: e.target["new-restaurant"].value,
    image: e.target["new-image"].value,
    rating: e.target["new-rating"].value,
    comment: e.target["new-comment"].value,

  }
  e.target["new-name"].value = ""
  e.target["new-restaurant"].value = ""
  e.target["new-image"].value = ""
  e.target["new-rating"].value = ""
  e.target["new-comment"].value = ""

  displayRamens(newRamen)
})



function displayRamens(ramen) {
  const disRamen = document.querySelector("#ramen-menu")
  const image = document.createElement("img")
  image.src = ramen.image

  disRamen.append(image)

  image.addEventListener('click', () => {
    handleClick(ramen)
    

  })
}

// // REAPLACED with function --const displayRamens = () => {
// //   // Add code
// // };

function main(ramen) {
  displayRamens(ramen)
  addSubmitListener(newRamen)
}


// // REAPLACED with function -- const main = () => {
// //   // Invoke displayRamens here
// //   // Invoke addSubmitListener here
// // }
main()

// // Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
