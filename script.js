const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

console.log(filterButtons,filterableCards);

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);
    filterableCards.forEach(card =>{
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));