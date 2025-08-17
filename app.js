// Catégories par défaut
let categories = ["Sucré", "Salé", "Bébé"];
let recipes = [];

// Sélection des conteneurs
const categoriesContainer = document.getElementById("categories");
const recipesContainer = document.getElementById("recipes");
const categoryInput = document.getElementById("category-input");
const categoryBtn = document.getElementById("category-btn");
const searchInput = document.getElementById("search-input");
const videoInput = document.getElementById("video-link");
const recipeName = document.getElementById("recipe-name");
const recipeDesc = document.getElementById("recipe-desc");
const recipeCategorySelect = document.getElementById("recipe-category");
const addBtn = document.getElementById("add-btn");

// Fonction pour afficher les catégories
function displayCategories() {
    categoriesContainer.innerHTML = "";
    recipeCategorySelect.innerHTML = "";
    categories.forEach(cat => {
        const div = document.createElement("div");
        div.classList.add("category");
        div.textContent = cat;
        div.addEventListener("click", () => filterRecipes(cat));
        categoriesContainer.appendChild(div);

        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        recipeCategorySelect.appendChild(option);
    });
}

// Ajouter une nouvelle catégorie
categoryBtn.addEventListener("click", () => {
    const newCat = categoryInput.value.trim();
    if(newCat && !categories.includes(newCat)) {
        categories.push(newCat);
        displayCategories();
        categoryInput.value = "";
    }
});

// Ajouter une nouvelle recette/vidéo
addBtn.addEventListener("click", () => {
    const link = videoInput.value.trim();
    const name = recipeName.value.trim() || "Nouvelle recette";
    const desc = recipeDesc.value.trim() || "Description ici";
    const category = recipeCategorySelect.value || "Autre";

    if(link) {
        recipes.push({ name, category, description: desc, video: link });
        displayRecipes(recipes);
        videoInput.value = "";
        recipeName.value = "";
        recipeDesc.value = "";
    }
});

// Affichage des recettes
function displayRecipes(list) {
    recipesContainer.innerHTML = "";
    list.forEach(r => {
        const div = document.createElement("div");
        div.classList.add("recipe");
        let videoBtn = "";
        if(r.video) {
            videoBtn = `<button class="copy-btn" data-link="${r.video}">Copier le lien</button>`;
        }
        div.innerHTML = `<h3>${r.name}</h3><p>${r.description}</p>${videoBtn}`;
        recipesContainer.appendChild(div);
    });

    document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            navigator.clipboard.writeText(btn.getAttribute("data-link"));
            alert("Lien copié !");
        });
    });
}

// Filtrer les recettes par catégorie
function filterRecipes(category) {
    const filtered = recipes.filter(r => r.category === category);
    displayRecipes(filtered);
}

// Recherche par mot-clé
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.description.toLowerCase().includes(query)
    );
    displayRecipes(filtered);
});

// Affichage initial
displayCategories();
displayRecipes(recipes);
