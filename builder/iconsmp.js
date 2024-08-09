const icons = [
    "webbuild",
    "0-circled",
    "1-circled",
    "2-circled",
    "3-circled",
    "4-circled",
    "5-circled",
    "6-circled",
    "7-circled",
    "8-circled",
    "9-circled",
    "notification",
    "alphabet",
    "alphabet-uppercase",
    "archive",
    "square",
    "square-border",
    "circle",
    "circle-border",
    "square-exclamation-mark",
    "download",
    "upload",
    "resize-horizontal",
    "resize-vertical",
    "up-arrow",
    "down-arrow",
    "align-left",
    "align-center",
    "align-right",
    "right-arrow",
    "left-arrow",
    "copyright",
    "trademark",
    "registered-trademark",
    "battery",
    "battery-half-full",
    "battery-full",
    "advertisement",
    "usb-drive",
    "usb-c",
    "usb",
    "terminal",
    "phone",
    "phone-landscape",
    "phone-landscape-2",
    "share",
    "x-circled",
    "window",
    "window-split",
    "window-sidebar",
    "zoom-in",
    "zoom-out",
    "toggle-on",
    "toggle-off",
    "toggles",
    "translate",
    "verified",
    "mouse",
    "mouse-2",
    "pause",
    "dice-1",
    "dice-2",
    "dice-3",
    "dice-4",
    "dice-5",
    "dice-6",
    "calculator",
    "heartbeat",
    "bar-chart",
    "pie-chart",
    "graph-up",
    "graph-down",
    "graph-up-2",
    "graph-down-2"
].sort();

document.getElementById("amount").innerText = "Currently we have " + icons.length + " icons.";

if (!localStorage.getItem("setupCompleted")) {
    location.assign("config/index.html");
};

function showIconEmbed(icon) {
    prompt(`Select "Image" in the builder and then paste in this URL: `, `https://webbuild.js.org/builder/icons/${icon}.svg`);
}

function createIconCard(icon) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-1 mb-4";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.onclick = () => showIconEmbed(icon);

    const img = document.createElement("img");
    img.src = `icons/${icon}.svg`;
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