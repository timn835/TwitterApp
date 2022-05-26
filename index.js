import Twitter from "./module/twitter.js";

function setNewActive(el) {
    document.querySelector('.tab-select').classList.remove('tab-select');
    document.querySelector('.tab-content-select').classList.remove('tab-content-select');
    document.getElementById(el.id).classList.add('tab-select');
    document.getElementById('content' + el.id.slice(3)).classList.add('tab-content-select');
}

var user = Twitter.users[0]; //Default is Elon Musk
const queryString = window.location.search;
var parameters = queryString.split('=');
if (parameters[0] === "?user") {
    if (parameters[1] === "user1") {
        user = Twitter.users[0];
    } else if (parameters[1] === "user2") {
        user = Twitter.users[1];
    } else {
        console.log("Error: user does not exist")
    }
} else {
    console.log("Error: please pass user parameter")
}

var tabs = document.getElementsByClassName('tab');
for (var tab of tabs) {
    tab.addEventListener('click', function(e) {
        setNewActive(e.currentTarget);
    })
}

Twitter.createUser(user);

for (var tweet of user.tweets) {
    Twitter.createTweet(tweet, user);
}
