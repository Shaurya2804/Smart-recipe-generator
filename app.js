const recipes = [ /* Paste the 20 recipes JSON data here */ ];

const ingredientInput = document.getElementById('ingredient-input');
const addIngredientBtn = document.getElementById('add-ingredient-btn');
const ingredientList = document.getElementById('ingredient-list');
const clearIngredientsBtn = document.getElementById('clear-ingredients-btn');

const vegetarianFilter = document.getElementById('vegetarian');
const veganFilter = document.getElementById('vegan');
const glutenFreeFilter = document.getElementById('glutenFree');

const difficultySelect = document.getElementById('difficulty-select');
const timeSelect = document.getElementById('time-select');

const recipesContainer = document.getElementById('recipes-container');

let selectedIngredients = [];

function renderIngredients() {
  ingredientList.innerHTML = '';
  selectedIngredients.forEach(ingredient => {
    const span = document.createElement('span');
    span.textContent = ingredient;
    ingredientList.appendChild(span);
  });
}

function filterRecipes() {
  let filtered = recipes;

  // Filter by ingredients presence (simple contains)
  if(selectedIngredients.length) {
    filtered = filtered.filter(recipe =>
      selectedIngredients.every(i => recipe.ingredients.includes(i))
    );
  }

  // Filter by dietary preferences
  if (vegetarianFilter.checked) {
    filtered = filtered.filter(r => r.dietary.includes('vegetarian'));
  }
  if (veganFilter.checked) {
    filtered = filtered.filter(r => r.dietary.includes('vegan'));
  }
  if (glutenFreeFilter.checked) {
    filtered = filtered.filter(r => r.dietary.includes('gluten-free'));
  }

  // Filter by difficulty
  if (difficultySelect.value) {
    filtered = filtered.filter(r => r.difficulty === difficultySelect.value);
  }

  // Filter by cooking time
  if (timeSelect.value) {
    filtered = filtered.filter(r => {
      if (timeSelect.value === 'quick') return r.cookingTime < 20;
      if (timeSelect.value === 'medium') return r.cookingTime >= 20 && r.cookingTime <= 40;
      if (timeSelect.value === 'long') return r.cookingTime > 40;
      return true;
    });
  }

  return filtered;
}

function renderRecipes() {
  recipesContainer.innerHTML = '';
  const filtered = filterRecipes();
  if (!filtered.length) {
    recipesContainer.innerHTML = '<p>No recipes match your filters.</p>';
    return;
  }
  filtered.forEach(recipe => {
    const div = document.createElement('div');
    div.classList.add('recipe-card');
    div.innerHTML = `<div class="recipe-title">${recipe.name}</div>
      <div><strong>Cuisine:</strong> ${recipe.cuisine}</div>
      <div><strong>Difficulty:</strong> ${recipe.difficulty}</div>
      <div><strong>Cooking Time:</strong> ${recipe.cookingTime} mins</div>
      <div><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</div>`;
    recipesContainer.appendChild(div);
  });
}

addIngredientBtn.addEventListener('click', () => {
  const val = ingredientInput.value.trim().toLowerCase();
  if (val && !selectedIngredients.includes(val)) {
    selectedIngredients.push(val);
    renderIngredients();
    renderRecipes();
  }
  ingredientInput.value = '';
});

clearIngredientsBtn.addEventListener('click', () => {
  selectedIngredients = [];
  renderIngredients();
  renderRecipes();
});

vegetarianFilter.addEventListener('change', renderRecipes);
veganFilter.addEventListener('change', renderRecipes);
glutenFreeFilter.addEventListener('change', renderRecipes);
difficultySelect.addEventListener('change', renderRecipes);
timeSelect.addEventListener('change', renderRecipes);

renderRecipes();
renderIngredients();
