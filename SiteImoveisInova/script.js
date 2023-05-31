const data = [
    {
        id: 1,
        name: "Casa 01",
        url: "uploads/casa (1).jpg"
    },
    {
        id: 2,
        name: "Casa 02",
        url: "uploads/casa (2).jpg"
    },
    {
        id: 3,
        name: "Casa 03",
        url: "uploads/casa (3).jpg"
    },
    {
        id: 4,
        name: "Casa 04",
        url: "uploads/casa (4).jpg"
    },
    {
        id: 5,
        name: "Casa 05",
        url: "uploads/casa (5).jpg"
    },
    {
        id: 6,
        name: "Casa 06",
        url: "uploads/casa (6).jpg"
    },
]

const containerCards = document.getElementById('cardcontainer')

const loadcards = () => {
    const cards = data.map((card) => `
    <div class="card card-${card.id}" id="${card.id}">
        <div class="card-header">
        <img src="${card.url}" class="card-img" />
        </div>
        
        <div class="card-body">
        <h3 class="card-local">${card.name}</h3>
        <h2 class="card-titulo">Cidade</h2>
        <p class="card-texto">
            descrição ${card.name}
        </p>
        </div>
        
        <div class="card-footer">
        <a href="#${card.id}">Ver Mais</a>
        </div>
    </div>
    `) 
    .join('')
    cardcontainer.innerHTML = cards
}

window.addEventListener('load', loadcards)