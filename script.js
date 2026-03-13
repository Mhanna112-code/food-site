const grid = document.getElementById("foodGrid")
const search = document.getElementById("searchBar")

function renderFoods(foodList){

    grid.innerHTML=""

    foodList.forEach(food=>{

        const card = document.createElement("div")
        card.className="card"

        card.innerHTML=`

<div class="card-inner">

<div class="front">
<img src="${food.image}" width="150">
<p>${food.name}</p>
</div>
<div class="back">
${food.recipe}
</div>

</div>

`

        card.onclick=()=>{
            card.classList.toggle("flip")
        }

        grid.appendChild(card)

    })

}

renderFoods(foods)

search.addEventListener("input", ()=>{

    const value = search.value.toLowerCase()

    const filtered = foods.filter(food=>
        food.name.toLowerCase().includes(value)
    )

    renderFoods(filtered)

})