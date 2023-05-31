const searchInput = document.getElementById('busca');
const suggestionsList = document.getElementById('suggestions-list');

// Array de sugestões (pode vir de uma API ou qualquer outra fonte de dados)
const suggestions = ['Aracaju', 'Petrolina', 'Juazeiro', 'Recife', 'João Pessoa'];

searchInput.addEventListener('input', function() {
  const userInput = this.value;
  suggestionsList.innerHTML = ''; // Limpa a lista de sugestões
  
  if (userInput.length > 0) {
    const matchingSuggestions = suggestions.filter(function(suggestion) {
      return suggestion.toLowerCase().startsWith(userInput.toLowerCase());
    });
    
    matchingSuggestions.forEach(function(suggestion) {
      const li = document.createElement('li');
      li.textContent = suggestion;
      suggestionsList.appendChild(li);
    });
    
    suggestionsList.style.display = 'block'; // Exibe a lista de sugestões
  } else {
    suggestionsList.style.display = 'none'; // Esconde a lista de sugestões
  }
});

suggestionsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    searchInput.value = event.target.textContent;
    suggestionsList.style.display = 'none'; // Esconde a lista de sugestões
  }
});
