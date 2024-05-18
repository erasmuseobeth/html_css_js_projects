const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container'); 
const overlay = document.getElementById('overlay');

let searchQuery = '';
const APP_ID = 'e5117a00';
const APP_KEY = '9fb88e572c499f7fc3c119aefcc7df00';

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    overlay.style.display = 'flex'; // Show the overlay
    await fetchApi();
});

async function fetchApi() {
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
    const response = await fetch(baseURL);
    const data = await response.json();
    overlay.style.display = 'none'; // Hide the overlay once the search results are generated
    generateHtml(data.hits);
}

function generateHtml(results) {
    container.classList.remove('initial');
    let generatedHtml = '';
    results.forEach(result => {
        generatedHtml += `
            <div class="item">
                <img src="${result.recipe.image}" alt="meal recipe">
                <div class="flex-container">
                    <h1 class="title">${result.recipe.label}</h1>
                    <a href="${result.recipe.url}" target="_blank " class="view-button">View Recipe</a>
                </div>
                <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            </div>
        `;
    });
    searchResultDiv.innerHTML = generatedHtml;
}
