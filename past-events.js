const pastEvents = [
    {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
    },
    {
        _id: "639c723b992482e5f2834beb",
        name: "Korean style",
        image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        date: "2023-08-12",
        description: "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
    },
    {
        _id: "639c723c992482e5f2834bed",
        name: "Jurassic Park",
        image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        date: "2022-11-02",
        description: "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
    },
    {
        _id: "639c723c992482e5f2834bef",
        name: "Parisian Museum",
        image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        date: "2023-11-02",
        description: "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
    },
    {
        _id: "639c723c992482e5f2834bf1",
        name: "Comicon",
        image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        date: "2022-02-12",
        description: "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
    },
    {
        _id: "639c723c992482e5f2834bf3",
        name: "Halloween Night",
        image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        date: "2023-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
    },
    {
        _id: "639c723c992482e5f2834bf5",
        name: "Metallica in concert",
        image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        date: "2023-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
    },
    {
        _id: "639c723c992482e5f2834bf7",
        name: "Electronic Fest",
        image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        date: "2022-01-22",
        description: "The best national and international DJs gathered in one place.",
        category: "Music Concert",
    },
    {
        _id: "639c723d992482e5f2834bf9",
        name: "10K for life",
        image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
    },
    {
        _id: "639c723d992482e5f2834bfb",
        name: "15K NY",
        image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
        date: "2023-03-01",
        description: "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
    },
    {
        _id: "639c723d992482e5f2834bfd",
        name: "School's book fair",
        image: "https://i.postimg.cc/Sst763n6/book1.jpg",
        date: "2023-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
    },
    {
        _id: "639c723d992482e5f2834bff",
        name: "Just for your kitchen",
        image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
        date: "2022-11-09",
        description: "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
    },
    {
        _id: "639c723d992482e5f2834c01",
        name: "Batman",
        image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        date: "2022-03-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
    },
    {
        _id: "639c723d992482e5f2834c03",
        name: "Avengers",
        image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
        date: "2023-10-15",
        description: "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
    }
];

const currentDate = "2023-01-01"; // Fecha actual para comparar eventos pasados

function displayEvents(events) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-6 mb-4 d-flex align-items-stretch';
        card.innerHTML = `
            <div class="card text-center">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <a href="event-details.html?id=${event._id}" class="btn btn-primary">DETAILS</a>
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

function filterByCategory(events, selectedCategories) {
    if (selectedCategories.length === 0) return events;
    return events.filter(event => selectedCategories.includes(event.category));
}

function filterBySearch(events, searchTerm) {
    if (searchTerm === '') return events;
    return events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()));
}

function showPastEvents(events, searchTerm = '') {
    let currentDateObj = new Date(currentDate);

    let filteredEvents = events.filter(event => {
        let eventDate = new Date(event.date);
        return eventDate < currentDateObj;
    });

    filteredEvents = filterBySearch(filteredEvents, searchTerm);
    displayEvents(filteredEvents);
}

function handleFiltering() {
    const selectedCategories = Array.from(document.querySelectorAll('.categories input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    const searchTerm = document.querySelector('.search-bar input[type="text"]').value;

    let filteredEvents = filterByCategory(pastEvents, selectedCategories);
    showPastEvents(filteredEvents, searchTerm);
}

// Agregar listeners a los checkboxes y al campo de búsqueda
document.querySelectorAll('.categories input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleFiltering);
});

document.querySelector('.search-bar input[type="text"]').addEventListener('input', handleFiltering);

// Mostrar eventos pasados al cargar la página
showPastEvents(pastEvents);