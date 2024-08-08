const usrname = document.getElementById("usernameinput");
const agree = document.getElementById("agreetotos");


function completeSetup() {
    if(usrname.value) {
        if(agree.checked) {
            localStorage.username = usrname.value;
            localStorage.setupCompleted = true;
            localStorage.sites = JSON.stringify([]);
            location.assign("/builder/index.html");
        } else {
            alert("Error: You are not elegible for our service beacuse you don't agree to the TOS.")
        }
    } else {
        alert("Error: Please fill the username field.");
    };
};