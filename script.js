//declear a function
const showFood = () => {
	const searchInput = document.getElementById("searchInput").value;
	const foodItems = document.getElementById("food-items");
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
		.then((res) => res.json())
		.then((data) => {
			data.meals.forEach((foodItem) => {
				const foodBox = document.createElement("div");
				foodBox.className = "food-box";
				const thumb = foodItem.strMealThumb;
				const foodName = foodItem.strMeal;
				foodBox.innerHTML = `
                    <div class = "details" onclick="showDetails('${foodName}')">
                        <div class="food-icon">
                            <img src="${thumb}" alt="">
                        </div>
                        <h5 class="food-name">${foodName}</h5>
                    </div>
                `;
				foodItems.appendChild(foodBox);
			});
		})
		.catch((err) => alert("Please enter valid food name!"));
};
//html part start
const showDetails = (name) => {
	const container = document.getElementById("details");
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
		.then((res) => res.json())
		.then((data) => {
			const item = data.meals[0];
			container.innerHTML = `
            <div class = "detail-modal">
                <div class="detail-img-container">
                    <img class="detail-img" src="${item.strMealThumb}" alt="">
                    <hr>
                </div>
                <h2 class="detail-text-1">${item.strMeal}</h2>
                <hr>
                <h5 class="detail-text-2">Ingredients</h5>
                <ul class="detail-ul">
                    <li class="detai-li">${item.strIngredient1}</li>
                    <li class="detai-li">${item.strIngredient2}</li>
                    <li class="detai-li">${item.strIngredient3}</li>
                    <li class="detai-li">${item.strIngredient4}</li>
                    <li class="detai-li">${item.strIngredient5}</li>
                    <li class="detai-li">${item.strIngredient7}</li>
                    <li class="detai-li">${item.strIngredient6}</li>
                    <li class="detai-li">${item.strIngredient8}</li>
                    <li class="detai-li">${item.strIngredient9}</li>
                    <li class="detai-li">${item.strIngredient10}</li>
                    <li class="detai-li">${item.strIngredient11}</li>
                    <li class="detai-li">${item.strIngredient12}</li>
                    <li class="detai-li">${item.strIngredient13}</li>
                    <li class="detai-li">${item.strIngredient14}</li>
                    <li class="detai-li">${item.strIngredient15}</li>
                    <li class="detai-li">${item.strIngredient16}</li>
                    <li class="detai-li">${item.strIngredient17}</li>
                    <li class="detai-li">${item.strIngredient18}</li>
                    <li class="detai-li">${item.strIngredient19}</li>
                    <li class="detai-li">${item.strIngredient20}</li>
                </ul>
                <p class = "detail-back" onclick="hideDetails()">&larr; Go Back </p>
            </div>
            `;
		});
};
//show the detail manu
const btn = document.getElementById("basic-addon2");
btn.addEventListener("click", showFood);
//hide the detail information
const hideDetails = () => {
	document.querySelector(".detail-modal").style.display = "none";
};
