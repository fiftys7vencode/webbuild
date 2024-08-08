const usrnameLabel = document.getElementById("usernameLabel");
const template1 = `
    <style>.maindiv {background-color: rgb(15, 15, 15);padding: 15px;border-radius: 10px;color: white;}</style><script id="websitepreviewjs">function subscribe() {var email = prompt("Subscribe to our weekly newsletter by putting in your email: ")alert("Signed up!")}</script><div class="maindiv"><h1 id="mynameis">Hi, my name is</h1><h2 id="name">Name</h2><hr id="space1"><p id="about">I specialize in web developement. I'm also an artist.</p><br id="space2"><button id="subscribe" onclick="subscribe()">Subscribe</button></div>
`

if (!localStorage.getItem("setupCompleted")) {
    location.assign("config/index.html");
}

const username = localStorage.getItem("username");
if (username) {
    usrnameLabel.innerText = username + "!";
} else {
    usrnameLabel.innerText = "User!";
}

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
    }
}
