var preview = document.getElementById("websitepreview");
var jseditor = document.getElementById("jseditor");
var togglemode = document.getElementById("togglemodebutton");
var itemsbar = document.getElementById("itemssidebar");
var navbar = document.getElementById("navigationbar");
var previewjs = document.getElementById("websitepreviewjs");
var jseditorcode = document.getElementById("jscode");

$(document).ready(function() {
    $("#websitepreview").sortable();
    $("#websitepreview").disableSelection();
    $("button").button();
    $(".button").button();
    $(document).tooltip();

    let urlParams = new URLSearchParams(window.location.search);
    let sitecontent = urlParams.get('sitecontent');
    urlParams.delete('sitecontent');

    let newUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();
    window.history.replaceState(null, '', newUrl);
    preview.innerHTML = sitecontent;


});

if (!localStorage.getItem("setupCompleted")) {
    location.assign("config/index.html");
};

function save() {
    if(preview.innerHTML) {
        showPrompt("Enter the site's name below:", save2);
    } else {
        showAlert("Error: no items added to the website.")
    }
    
    function save2(input) {
        let sites = JSON.parse(localStorage.getItem("sites")) || [];
        const siteExists = sites.some(site => site[0] === input);
    
        if (!siteExists) {
            sites.push([input, preview.innerHTML]);
    
            localStorage.setItem("sites", JSON.stringify(sites));
    
            console.log(`Site '${input}' added successfully.`);
        } else {
            console.log(`Site '${input}' already exists.`);
        }
    }
}

function showAlert(message) {
    $("#alertMessage").text(message);
    $("#alertDialog").dialog({
        modal: true,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
}

function showConfirm(message, callback) {
    $("#confirmMessage").text(message);
    $("#confirmDialog").dialog({
        modal: true,
        buttons: {
            Yes: function() {
                $(this).dialog("close");
                callback(true);
            },
            No: function() {
                $(this).dialog("close");
                callback(false);
            }
        }
    });
}
function showPrompt(message, callback) {
    $("#promptMessage").text(message);

    $("#promptInput").val('');
    $("#promptDialog").dialog({
        modal: true,
        buttons: {
            Ok: function() {
                var input = $("#promptInput").val();
                $(this).dialog("close");
                callback(input);
            },
            Cancel: function() {
                $(this).dialog("close");
                callback(null);
            }
        }
    });
}


function deleteItem() {
    if (preview.innerHTML != "") {
        showPrompt("Name: ", function(name) {
            if (name) {
                var item = document.getElementById(name);
                if (item) {
                    showConfirm("Are you sure to delete that item?", function(confirm1) {
                        if (confirm1) {
                            preview.removeChild(item);
                        }
                    });
                } else {
                    showAlert("Error: That item does not exist.");
                }
            }
        });
    } else {
        showAlert("Error: no items added to the website.");
    }
}

function exportToHTML() {
    if (preview.innerHTML) {
        const htmlContent = `<!DOCTYPE html>
        <!-- Built using WebBuild -->
        <!-- https://fiftys7vencode.github.io/webbuild -->
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
            <script>$("button").button();</script>
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
        showAlert("Error: no items added to the website.");
    }
}

function toggleMode() {
    if (jseditor.style.display == "none") {
        preview.style.display = "none";
        itemsbar.style.display = "none";
        navbar.style.marginLeft = "0%";
        jseditor.style.display = "block";
        togglemode.innerText = "Design"; 
        togglemode.title = "Opens the website designer.";
    } else {
        preview.style.display = "block";
        itemsbar.style.display = "block";
        navbar.style.marginLeft = "20%";
        jseditor.style.display = "none";
        togglemode.innerText = "Code";
        togglemode.title = "Open the JavaScript code editor.";
    }
}

function saveCode() {
    previewjs.innerHTML = jseditorcode.value;
}

function editSetting() {
    showPrompt("Name: ", function(name) {
        if (name) {
            showPrompt("Setting (Property): ", function(setting) {
                if (setting) {
                    showPrompt("Setting (Property) new value: ", function(settingValue) {
                        if (settingValue) {
                            document.getElementById(name)[setting] = settingValue;
                        }
                    });
                }
            });
        }
    });
}

function addItem(item) {
    showConfirm("Are you sure to add a " + item + "?", function(confirm1) {
        if (confirm1) {
            switch(item) {
                case "heading1":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            var element = document.createElement("h1");
                            element.id = name;
                            element.innerText = text;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "heading2":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            var element = document.createElement("h2");
                            element.id = name;
                            element.innerText = text;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "heading3":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            var element = document.createElement("h3");
                            element.id = name;
                            element.innerText = text;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "text":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            var element = document.createElement("p");
                            element.id = name;
                            element.innerText = text;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "link":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            showPrompt("Link: ", function(link) {
                                var element = document.createElement("p");
                                element.id = name;
                                var linkElement = document.createElement("a");
                                linkElement.innerText = text;
                                linkElement.href = link;
                                linkElement.target = "_blank";
                                element.appendChild(linkElement);
                                preview.appendChild(element);
                            });
                        });
                    });
                    break;
                case "button":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            showPrompt("Link: ", function(link) {
                                var element = document.createElement("p");
                                element.id = name;
                                var buttonElement = document.createElement("a");
                                buttonElement.innerText = text;
                                buttonElement.href = link;
                                buttonElement.target = "_blank";
                                element.classList.add("button");
                                element.appendChild(buttonElement);
                                preview.appendChild(element);
                            });
                        });
                    });
                    break;
                case "inputfield":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Placeholder: ", function(placeholder) {
                            var element = document.createElement("input");
                            element.id = name;
                            element.placeholder = placeholder;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "inputbox":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Placeholder: ", function(placeholder) {
                            var element = document.createElement("textarea");
                            element.id = name;
                            element.placeholder = placeholder;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "footer":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Copyright notice (use &copy; for the copyright sign): ", function(copyrightnotice) {
                            var element = document.createElement("footer");
                            element.id = name;
                            element.innerText = copyrightnotice;
                            element.classList.add("w3-black");
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "separator":
                    showPrompt("Name: ", function(name) {
                        var element = document.createElement("hr");
                        element.id = name;
                        preview.appendChild(element);
                    });
                    break;
                case "table":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Number of rows: ", function(rows) {
                            showPrompt("Number of columns: ", function(cols) {
                                var element = document.createElement("table");
                                element.id = name;
                                element.classList.add("w3-table", "w3-striped", "w3-bordered");
                                for (var i = 0; i < rows; i++) {
                                    var row = element.insertRow(i);
                                    for (var j = 0; j < cols; j++) {
                                        showPrompt(`Enter content for cell (${i + 1}, ${j + 1}):`, function(content) {
                                            if (content !== null) {
                                                var cell = row.insertCell(j);
                                                cell.innerHTML = content;
                                            }
                                        });
                                    }
                                }
                                preview.appendChild(element);
                            });
                        });
                    });
                    break;
                case "image":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Image URL: ", function(image) {
                            showPrompt("Image width: ", function(width) {
                                showPrompt("Image height: ", function(height) {
                                    var element = document.createElement("img");
                                    element.id = name;
                                    element.src = image;
                                    element.width = width;
                                    element.height = height;
                                    preview.appendChild(element);
                                });
                            });
                        });
                    });
                    break;
                case "websiteembed":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Website URL: ", function(website) {
                            var element = document.createElement("iframe");
                            element.id = name;
                            element.frameborder = "0px";
                            element.src = website;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "customhtml":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Custom HTML: ", function(html) {
                            var element = document.createElement("div");
                            element.id = name;
                            element.innerHTML = html;
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "checkbox":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Label: ", function(label) {
                            var element = document.createElement("div");
                            element.id = name;
                            var input = document.createElement("input");
                            input.type = "checkbox";
                            var labelElement = document.createElement("label");
                            labelElement.innerText = label;
                            element.appendChild(input);
                            element.appendChild(labelElement);
                            preview.appendChild(element);
                        });
                    });
                    break;
                case "card":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Title: ", function(title) {
                            showPrompt("Content (You can use HTML): ", function(content) {
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
                            });
                        });
                    });
                    break;
                case "quote":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Text: ", function(text) {
                            showPrompt("Author: ", function(author) {
                                var element = document.createElement("div");
                                element.id = name;
                                element.style = " padding: 10px; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);border-left: 8px solid #ccc;";
                                var textElement = document.createElement("i");
                                textElement.innerText = text;
                                textElement.style="font-size: 200%;font-family: serif;";
                                var authorElement = document.createElement("p");
                                authorElement.innerText = "~" + author;
                                element.appendChild(textElement);
                                element.appendChild(authorElement);
                                preview.appendChild(element);
                            });
                        });
                    });
                    break;
                case "progressbar":
                    showPrompt("Name: ", function(name) {
                        showPrompt("Amount (set to 0 if you want an animation to play): ", function(amount) {
                            var element = document.createElement("progress");
                            element.id = name;
                            element.max = 100;
                            if (amount != 0) {
                                element.value = amount;
                            }
                            preview.appendChild(element);
                        });
                    });
                    break;
                    case "icon":
                        window.open("icons.html");
                        showAlert("Icons opened in new tab.");
                    break;
            }
        }
    });
}