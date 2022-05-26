import Twitter from "./module/twitter.js";

var allTweets = [];
for (var user of Twitter.users) {
    for (var i = 0; i < user.tweets.length; i++) {
        allTweets.push([user.tweets[i], user]);
    }
}


allTweets.sort((a, b) => {
    var firstDate = new Date(a[0].timestamp);
    var secondDate = new Date(b[0].timestamp);
    if (firstDate > secondDate) {
        return -1;
    } else {
        return 1;
    }
})


for (var tweet of allTweets) {
    Twitter.createTweet(tweet[0], tweet[1]);
}