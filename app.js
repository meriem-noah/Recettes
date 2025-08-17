// Exemple de catégories
const categories = ["Sucré", "Salé", "Bébé"];

// Exemple de recettes (à compléter)
const recipes = [
    { name: "Crêpes", category: "Sucré", description: "Ingrédients et étapes ici..." },
    { name: "Purée de carottes", category: "Bébé", description: "Ingrédients et étapes ici..." }
];

// Afficher les catégories
const categoriesContainer = document.getElementById("categories");
categories.forEach(cat => {
    const div = document.createElement("div");
    div.classList.add("category");
    div.textContent = cat;
    div.addEventListener("click", () => filterRecipes(cat));
    categoriesContainer.appendChild(div);
});

// Afficher toutes les recettes par défaut
const recipesContainer = document.getElementById("recipes");
function displayRecipes(list) {
    recipesContainer.innerHTML = "";
    list.forEach(r => {
        const div = document.createElement("div");
        div.classList.add("recipe");
        div.innerHTML = <h3>${r.name}</h3><p>${r.description}</p>;
        recipesContainer.appendChild(div);
    });
}

// Filtrer les recettes par catégorie
function filterRecipes(category) {
    const filtered = recipes.filter(r => r.category === category);
    displayRecipes(filtered);
}

// Affichage initial
displayRecipes(recipes);
