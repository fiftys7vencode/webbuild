const usrnameLabel = document.getElementById("usernameLabel");

if (!localStorage.getItem("setupCompleted")) {
    location.assign("config/index.html");
};

const username = localStorage.getItem("username");
if (username) {
    usrnameLabel.innerText = username + "!";
} else {
    usrnameLabel.innerText = "User!";
};

const sitesData = localStorage.getItem("sites");
const websitecounter = document.getElementById("websitecounter");
var counter = 0;
if (sitesData) {
    JSON.parse(sitesData).forEach(element => {
        const [siteName, siteContent] = element;
        var cardcode = `
            <div class="col-md-2 mb-4">
                <div class="card" onclick="location.assign('builder.html?sitecontent=${encodeURIComponent(siteContent)}')">
                    <img src="https://via.placeholder.com/350x200?text=${siteName}" class="card-img-top" alt="${siteName}">
                    <div class="card-body">
                        <h5 class="card-title">${siteName}</h5>
                    </div>
                </div>
            </div>
        `;

        const sitesdisplay = document.getElementById("sitesdisplay");
        sitesdisplay.innerHTML += cardcode;
        counter += 1;
    });

    if(counter != 0) {
        websitecounter.innerText = "You have created " + counter + " website(s) so far!"
    };
};
