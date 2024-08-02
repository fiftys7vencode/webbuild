var preview = document.getElementById("websitepreview");

function deleteAll() {
    var confirm1 = confirm("Are you sure to delete all?");
    if(confirm1) {
        var confirm2 = confirm("Are you really sure to delete all? This CANNOT be undone.");
        if(confirm2) {
            preview.innerHTML = "";
        };
    };
};

function exportToHTML() {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Website</title>
</head>
<body class="w3-center">
    ${preview.innerHTML}
</body>
</html>`;

    const encodedHtml = encodeURIComponent(htmlContent);
    const dataUri = `data:text/plain;charset=utf-8,${encodedHtml}`;
    const newWindow = window.open();
    newWindow.document.write(`<!-- Built using WebBuild --> <style>body{font-family:sans-serif;text-align:center;}</style> <title>Export to HTML</title> <h1>Export to HTML</h1> <p>Your exported HTML code is written below.</p> <iframe src="${dataUri}" frameborder="0" style="border:none; width:100%; height:100%;" allowfullscreen></iframe>`);
};



function addItem(item) {
    if(item == "heading1") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h1");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    };

    if(item == "heading2") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h2");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    };

    if(item == "heading3") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h3");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    };

    if(item == "text") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("p");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    };

    if(item == "link") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var link = prompt("Link: ");
        var element = document.createElement("p");
        element.id = name;
        var element2 = document.createElement("a");
        element2.innerText = text;
        element2.href = link;
        element2.target = "_blank";
        element.appendChild(element2);
        preview.appendChild(element);
    };
    
    if (item == "button") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var link = prompt("Link: ");
        var element = document.createElement("p");

        element.id = name;
        var element2 = document.createElement("a");
        element2.innerText = text;
        element2.href = link;
        element2.target = "_blank";
        element2.classList.add("w3-button", "w3-round", "w3-blue");
        element.appendChild(element2);
        preview.appendChild(element);
    };
    
    if(item == "inputfield") {
        var name = prompt("Name: ");
        var placeholder = prompt("Placeholder: ");
        var element = document.createElement("input");
        element.id = name;
        element.placeholder = placeholder;
        preview.appendChild(element);
    };

    if(item == "inputbox") {
        var name = prompt("Name: ");
        var placeholder = prompt("Placeholder: ");
        var element = document.createElement("textarea");
        element.id = name;
        element.placeholder = placeholder;
        preview.appendChild(element);
    };

    if(item == "footer") {
        var name = prompt("Name: ");
        var copyrightnotice = prompt("Copyright notice (use &copy; for the copyright sign): ");
        var element = document.createElement("footer");
        element.id = name;
        element.innerText = copyrightnotice;
        element.classList.add("w3-black");
        preview.appendChild(element);
    };

    if(item == "separator") {
        var name = prompt("Name: ");
        var element = document.createElement("hr");
        element.id = name;
        preview.appendChild(element);
    };

    if(item == "table") {
        var name = prompt("Name: ");
        var rowsandcells = prompt("Rows and cells (in HTML): ");
        var element = document.createElement("table");
        element.id = name;
        element.innerHTML = rowsandcells;
        element.classList.add("w3-table", "w3-striped", "w3-bordered");
        preview.appendChild(element);
    };

    if(item == "image") {
        var name = prompt("Name: ");
        var image = prompt("Image URL: ");
        var width = prompt("Image width: ");
        var height = prompt("Image height: ");
        var element = document.createElement("img");
        element.id = name;
        element.src = image;
        element.width = width;
        element.height = height;
        preview.appendChild(element);
    };
    
    if(item == "websiteembed") {
        var name = prompt("Name: ");
        var website = prompt("Website URL: ");
        var element = document.createElement("iframe");
        element.id = name;
        element.frameborder = "0px";
        element.src = website;
        preview.appendChild(element);
    };

    if(item == "customhtml") {
        var name = prompt("Name: ");
        var html = prompt("Custom HTML: ");
        var element = document.createElement("div");
        element.id = name;
        element.innerHTML = html;
        preview.appendChild(element);
    };

};