var preview = document.getElementById("websitepreview");
var jseditor = document.getElementById("jseditor");
var togglemode = document.getElementById("togglemodebutton");
var itemsbar = document.getElementById("itemssidebar");
var navbar = document.getElementById("navigationbar");
var previewjs = document.getElementById("websitepreviewjs");
var jseditorcode = document.getElementById("jscode");

function deleteItem() {
    if(preview.innerHTML != "") {
        var name = prompt("Name: ");
        if(document.getElementById(name) != null) {
            var confirm1 = confirm("Are you sure to delete that item?");
            if(confirm1) {
                preview.removeChild(document.getElementById(name));
            }
        } else {
            alert("Error: That item does not exist.")
        };
    } else {
        alert("Error: no items added to the website.")
    }
};

function exportToHTML() {
    if(preview.innerHTML != "") {
        const htmlContent = `<!DOCTYPE html>
        <!-- Built using WebBuild -->
        <!-- https://fiftys7vencode.github.io/webbuild -->
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
            newWindow.document.write(`<style>body{font-family:sans-serif;text-align:center;}</style> <title>Export to HTML</title> <h1>Export to HTML</h1> <p>Your exported HTML code is written below.</p> <iframe src="${dataUri}" frameborder="0" style="border:none; width:100%; height:100%;" allowfullscreen></iframe>`);
    } else {
        alert("Error: no items added to the website.")
    };
};


function toggleMode() {
    if(jseditor.style.display == "none") {
        preview.style.display = "none";
        itemsbar.style.display = "none";
        navbar.style.marginLeft = "0%";
        jseditor.style.display = "block";
        togglemode.innerText = "Design";      

        
    } else {
        preview.style.display = "block";
        itemsbar.style.display = "block";
        navbar.style.marginLeft = "25%";
        jseditor.style.display = "none";
        togglemode.innerText = "Code";
    };
};

function saveCode() {
    previewjs.innerHTML = jseditorcode.value;
}

function editSetting() {
    var name = prompt("Name: ");
    var setting = prompt("Setting (Property): ");
    var settingvalue = prompt("Setting (Property) new value: ")
    document.getElementById(name)[setting] = settingvalue;
}

function addItem(item) {
   var confirm1 = confirm("Are you sure to add " + item + "?");
   if(confirm1) {
    if(item == "heading1") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h1");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    }

    if(item == "heading2") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h2");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    }

    if(item == "heading3") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("h3");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    }

    if(item == "text") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var element = document.createElement("p");
        element.id = name;
        element.innerText = text;
        preview.appendChild(element);
    }

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
    }
    
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
    }
    
    if(item == "inputfield") {
        var name = prompt("Name: ");
        var placeholder = prompt("Placeholder: ");
        var element = document.createElement("input");
        element.id = name;
        element.placeholder = placeholder;
        preview.appendChild(element);
    }

    if(item == "inputbox") {
        var name = prompt("Name: ");
        var placeholder = prompt("Placeholder: ");
        var element = document.createElement("textarea");
        element.id = name;
        element.placeholder = placeholder;
        preview.appendChild(element);
    }

    if(item == "footer") {
        var name = prompt("Name: ");
        var copyrightnotice = prompt("Copyright notice (use &copy; for the copyright sign): ");
        var element = document.createElement("footer");
        element.id = name;
        element.innerText = copyrightnotice;
        element.classList.add("w3-black");
        preview.appendChild(element);
    }

    if(item == "separator") {
        var name = prompt("Name: ");
        var element = document.createElement("hr");
        element.id = name;
        preview.appendChild(element);
    }

    if (item == "table") {
        var name = prompt("Name: ");
        var rows = prompt("Number of rows: ");
        var cols = prompt("Number of columns: ");
        var element = document.createElement("table");
        element.id = name;
        element.classList.add("w3-table", "w3-striped", "w3-bordered");
    
        for (var i = 0; i < rows; i++) {
            var row = element.insertRow(i);
            for (var j = 0; j < cols; j++) {
                var cell = row.insertCell(j);
                cell.innerHTML = prompt(`Enter content for cell (${i + 1}, ${j + 1}):`);
            }
        }
    
        preview.appendChild(element);
    }

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
    }

    if(item == "websiteembed") {
        var name = prompt("Name: ");
        var website = prompt("Website URL: ");
        var element = document.createElement("iframe");
        element.id = name;
        element.frameborder = "0px";
        element.src = website;
        preview.appendChild(element);
    }

    if(item == "customhtml") {
        var name = prompt("Name: ");
        var html = prompt("Custom HTML: ");
        var element = document.createElement("div");
        element.id = name;
        element.innerHTML = html;
        preview.appendChild(element);
    }

    if(item == "checkbox") {
        var name = prompt("Name: ");
        var label = prompt("Label: ");
        var element = document.createElement("div");
        element.id = name;
        var input = document.createElement("input");
        input.type = "checkbox";
        var labelElement = document.createElement("label");
        labelElement.innerText = label;
        element.appendChild(input);
        element.appendChild(labelElement);
        preview.appendChild(element);
    }

    if(item == "card") {
        var name = prompt("Name: ");
        var title = prompt("Title: ");
        var content = prompt("Content (You can use HTML): ");
        var element = document.createElement("div");
        element.id = name;
        element.classList.add("w3-card", "w3-padding", "w3-margin", "w3-white");
        var titleElement = document.createElement("h3");
        titleElement.innerText = title;
        var contentElement = document.createElement("p");
        contentElement.innerText = content;
        element.appendChild(titleElement);
        element.appendChild(contentElement);
        preview.appendChild(element);
    }

    if (item == "quote") {
        var name = prompt("Name: ");
        var text = prompt("Text: ");
        var author = prompt("Author: ");
        var element = document.createElement("div");
        element.id = name;
        element.classList.add("w3-panel", "w3-leftbar", "w3-light-grey");
        var element2 = document.createElement("i");
        element2.innerText = text;
        element2.classList.add("w3-xlarge", "w3-serif");
        var element3 = document.createElement("p");
        element3.innerText = "~" + author;
        element.appendChild(element2);
        element.appendChild(element3);
        preview.appendChild(element);
    };
    
    if(item == "progressbar") {
        var name = prompt("Name: ");
        var amount = prompt("Amount (set to 0 if you want an animation to play): ");
        var element = document.createElement("progress");
        element.id = name;
        element.max = 100;
        if(amount != 0) {
            element.value = amount;
        }
        preview.appendChild(element);
    }
   }
};
