let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

function render() {
  const list = document.getElementById('recipeList');
  list.innerHTML = '';
  recipes.forEach((r, i) => {
    const li = document.createElement('li');
    li.textContent = r.name + " (" + r.category + ")";
    list.appendChild(li);
  });
}

document.getElementById('addBtn').onclick = () => {
  const name = prompt("Nom de la recette:");
  const category = prompt("Catégorie (Sucré / Salé / Bébé):");
  if(name && category) {
    recipes.push({name, category});
    localStorage.setItem('recipes', JSON.stringify(recipes));
    render();
  }
};

document.getElementById('search').oninput = (e) => {
  const term = e.target.value.toLowerCase();
  const list = document.getElementById('recipeList');
  list.innerHTML = '';
  recipes.filter(r => r.name.toLowerCase().includes(term)).forEach(r => {
    const li = document.createElement('li');
    li.textContent = r.name + " (" + r.category + ")";
    list.appendChild(li);
  });
};

render();