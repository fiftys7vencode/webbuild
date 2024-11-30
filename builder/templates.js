const dictionary = {
    "Blank": "builder.html",
  };
  const cardContainer = document.getElementById("card-container");
  Object.keys(dictionary).forEach(key => {
    const url = dictionary[key];
    const column = document.createElement("div");
    column.className = "column is-one-quarter";

    const card = document.createElement("div");
    card.className = "card";

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const media = document.createElement("div");
    media.className = "media";

    const mediaContent = document.createElement("div");
    mediaContent.className = "media-content";

    const title = document.createElement("p");
    title.className = "title is-4";
    title.textContent = key;

    const footer = document.createElement("footer");
    footer.className = "card-footer";

    const button = document.createElement("a");
    button.className = "button is-link card-footer-item";
    button.href = url;
    button.target = "_blank";
    button.textContent = "Open";
    mediaContent.appendChild(title);
    media.appendChild(mediaContent);
    cardContent.appendChild(media);
    footer.appendChild(button);
    card.appendChild(cardContent);
    card.appendChild(footer);
    column.appendChild(card);
    cardContainer.appendChild(column);
  });