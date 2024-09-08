const icons = [
    "bell-fill",
    "bell-outline",
    "camera-fill",
    "camera-outline",
    "chat-fill",
    "chat-outline",
    "circle-fill",
    "circle-outline",
    "cloud-fill",
    "cloud-outline",
    "check-fill",
    "check-outline",
    "download-fill",
    "download-outline",
    "heart-fill",
    "heart-outline",
    "home-fill",
    "home-outline",
    "settings-fill",
    "settings-outline",
    "star-fill",
    "star-outline",
    "square-fill",
    "square-outline",
    "user-fill",
    "user-outline",
    "x-fill",
    "x-outline",
].sort();

document.getElementById("amount").innerText = "Currently we have " + icons.length + " icons.";

if (!localStorage.getItem("setupCompleted")) {
    location.assign("config/index.html");
};

function showIconEmbed(icon) {
    prompt(`Select the "Image" element in the builder and type this as a image URL: `, `https://webbuild.js.org/builder/newicons/${icon}.svg`);
}

function createIconCard(icon) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-1 mb-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.onclick = () => showIconEmbed(icon);

    const img = document.createElement("img");
    img.src = `newicons/${icon}.svg`;
    img.className = "card-img-top";
    img.alt = icon;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = icon;

    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);

    return colDiv;
}

function displayIcons(filteredIcons) {
    const container = document.getElementById("icons-container");
    container.innerHTML = '';
    filteredIcons.forEach(icon => {
        const iconCard = createIconCard(icon);
        container.appendChild(iconCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayIcons(icons);

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredIcons = icons.filter(icon => icon.toLowerCase().includes(searchTerm));
        displayIcons(filteredIcons);
    });
});