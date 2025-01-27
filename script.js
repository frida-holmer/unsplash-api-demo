const ACCESS_KEY = "" // Klistra in Access Key från Unsplash

// DOM referenser
const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-input");
const imageContainerEl = document.getElementById("search-container");

// Lyssna på formulärets submit-händelse
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit clicked");

    // Ta med vad användaren vill söka på
    const query = inputEl.value.trim();
    console.log(query); // Visar sökordet
});

async function fetchImages(query) {
    const endpoint = ``; // Klistra in https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${abc123} men skriv Access Key istället för "abc123"
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        displayImages(data.results);
        console.log(data.results);

    } catch (error) {
        console.error(error);
    }
}

function displayImages(images) {
    console.log(images);

    // Töm tidigare innehåll
    imageContainerEl.innerHTML = "";

    // Visa bilderna i UI
    images.forEach(image => {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("image-item");
        imgDiv.innerHTML = `
            <a href="${image.links.html}" target="_blank">  // _blank öppnar en ny sida istället för byta ut sidan
                <img src="${image.cover_photo.url.small}" alt="${image.cover_photo.alt_description}">
            <a>
        `;
        imageContainerEl.appendChild(imgDiv);
    });
}