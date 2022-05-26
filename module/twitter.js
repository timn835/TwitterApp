export default class Twitter {
    static users = [
        {
            userName: '@elonmusk',
            displayName: 'Elon Musk',
            joinedDate: 'June 2009',
            followingCount: 103,
            followerCount: 47900000,
            tweetsNumber: 13679,
            avatarURL: 'assets/elonmusk.jpg',
            coverPhotoURL: 'assets/elonmusk-cover.jpeg',
            tweets: [
                {
                    text: 'Chocolate milk is good, just had some',
                    timestamp: '5/10/2022 15:26:26',
                    replies: 8732,
                    retweets: 84443,
                    likes:1149334
                },
                {
                    text: 'I admit to judging books by their cover',
                    timestamp: '2/10/2021 00:01:20',
                    replies: 54632,
                    retweets: 96478,
                    likes:1104657
                },
                {
                    text: 'Starship to the moon',
                    timestamp: '2/9/2021 18:37:12',
                    replies: 45787,
                    retweets: 49765,
                    likes:904567
                },
                {
                    text: 'Out on launch pad, engine swap underway',
                    timestamp: '2/9/2021 12:11:51',
                    replies: 34981,
                    retweets: 96782,
                    likes: 900991
                }
            ]
        },{
            userName: '@BillGates',
            displayName: 'Bill Gates',
            joinedDate: 'June 2009',
            followingCount: 274,
            followerCount: 53800000,
            tweetsNumber: 12379,
            avatarURL: 'assets/billgates.jpg',
            coverPhotoURL: 'assets/billgates-cover.jpeg',
            tweets: [
                {
                    text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                    timestamp: '2/11/2021 00:01:20',
                    replies: 12345,
                    retweets: 43567,
                    likes:1000546
                },
                {
                    text: 'Should I start tweeting memes? Let me know in a comment.',
                    timestamp: '2/9/2021 18:37:12',
                    replies: 91456,
                    retweets: 43012,
                    likes:876321
                },
                {
                    text: 'In 2020, I read a book every hour.',
                    timestamp: '5/25/2022 12:11:51',
                    replies: 59034,
                    retweets: 23091,
                    likes:234091
                }
            ]
        }
    ];

    static createUser(user) {
        document.querySelector(".header-user").textContent = user.displayName;
        document.getElementsByClassName("header-user")[1].textContent = user.displayName;
        document.getElementById("handle").textContent = user.userName;
        document.getElementById("joined").textContent = "Joined " + user.joinedDate;
        document.getElementById("cover-photo").style.backgroundImage = `url(${user.coverPhotoURL})`;
        document.getElementById("cover-photo-inner").style.backgroundImage = `url(${user.avatarURL})`;
        document.querySelector(".info").textContent = Twitter.formatEnding(user.tweetsNumber) + " Tweets";
        document.getElementById("following-number").textContent = Twitter.formatEnding(user.followingCount);
        document.getElementById("followers-number").textContent = Twitter.formatEnding(user.followerCount);
    }
    static createTweet(tweet, user) {
        var myTweet = document.createElement('div');
        myTweet.classList.add('tweet');
        document.getElementById("content1").appendChild(myTweet);
    
        var heroImage = document.createElement('div');
        heroImage.classList.add('hero-image');
        heroImage.style.backgroundImage = `url(${user.avatarURL})`;
        var tweetContent = document.createElement('div');
        tweetContent.classList.add('tweet-content');
        myTweet.appendChild(heroImage);
        myTweet.appendChild(tweetContent);
    
        var tweetInfo = document.createElement('div');
        tweetInfo.classList.add('tweet-info');
        var tweetText = document.createElement('div');
        tweetText.classList.add('tweet-text');
        var tweetAttributes = document.createElement('div');
        tweetAttributes.classList.add('tweet-attributes');
        tweetContent.appendChild(tweetInfo);
        tweetContent.appendChild(tweetText);
        tweetContent.appendChild(tweetAttributes);
    
        var tweetInfoUser = document.createElement('div');
        tweetInfoUser.classList.add('tweet-info-user');
        var tweetInfoCheckmarkSymbol = document.createElement('div');
        tweetInfoCheckmarkSymbol.classList.add('tweet-info-checkmark-symbol');
        var tweetInfoHandle = document.createElement('div');
        tweetInfoHandle.classList.add('tweet-info-handle');
        tweetInfo.appendChild(tweetInfoUser);
        tweetInfo.appendChild(tweetInfoCheckmarkSymbol);
        tweetInfo.appendChild(tweetInfoHandle);
    
        var replies = document.createElement('div');
        replies.classList.add('replies');
        var repliesImg = document.createElement('div');
        repliesImg.classList.add('replies-img');
        var repliesTxt = document.createElement('div');
        repliesTxt.classList.add('replies-txt');
    
        var retweets = document.createElement('div');
        retweets.classList.add('retweets');
        var retweetsImg = document.createElement('div');
        retweetsImg.classList.add('retweets-img');
        var retweetsTxt = document.createElement('div');
        retweetsTxt.classList.add('retweets-txt');
    
        var likes = document.createElement('div');
        likes.classList.add('likes');
        var likesImg = document.createElement('div');
        likesImg.classList.add('likes-img');
        var likesTxt = document.createElement('div');
        likesTxt.classList.add('likes-txt');
    
        var download = document.createElement('div');
        download.classList.add('download');
    
        tweetAttributes.appendChild(replies);
        tweetAttributes.appendChild(retweets);
        tweetAttributes.appendChild(likes);
        tweetAttributes.appendChild(download);
        
        replies.appendChild(repliesImg);
        replies.appendChild(repliesTxt);
        retweets.appendChild(retweetsImg);
        retweets.appendChild(retweetsTxt);
        likes.appendChild(likesImg);
        likes.appendChild(likesTxt);
    
        var myCheckmark = document.createElement('img');
        myCheckmark.src = 'assets/checkmark-symbol.JPG';
        myCheckmark.alt = 'checkmark';
        tweetInfoCheckmarkSymbol.appendChild(myCheckmark);
    
    
        tweetInfoUser.textContent = user.displayName;
        tweetInfoHandle.textContent = user.userName + ' · ' + Twitter.formatDate(tweet.timestamp);
        tweetText.textContent = tweet.text;
    
        repliesTxt.textContent=Twitter.formatEnding(tweet.replies);
        retweetsTxt.textContent=Twitter.formatEnding(tweet.retweets);
        likesTxt.textContent=Twitter.formatEnding(tweet.likes);
    }
    static formatNumber(num) {
        //we assume the number is an integer
        var res = String(num%1000);
        while(Math.floor(num/1000) !== 0) {
            if(num%1000 < 10) {
                res = "0" + "0" + res;
            } else if (num%1000 < 100) {
                res = "0" + res;
            }
            num = Math.floor(num/1000);
            res = String(num%1000) + "," + res;
        }
        return res;
    }
    static formatEnding(num) {
        if (num >= 1000000) {
            num = Math.round(num/100000);
            if (num%10 !== 0) {
               return String(Math.floor(num/10)) + "." + String(num%10) + "M";
            } else {
                return String(Math.floor(num/10)) + "M";
            }
        } else if (num >= 10000) {
            num = Math.round(num/100);
            if (num%10 !== 0) {
               return String(Math.floor(num/10)) + "." + String(num%10) + "K";
            } else {
                return String(Math.floor(num/10)) + "K";
            }
        } else {
            return Twitter.formatNumber(num);
        }
    }
    
    static formatDate(timestamp) {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var tweetDate = new Date(timestamp);
        var today = new Date();
        var day = tweetDate.getDate();
        var month = months[tweetDate.getMonth()];
        var year = tweetDate.getFullYear();
        if (today.getFullYear() === year) {
            return month + " " + day;
        } else {
            return month + " " + day + ", " + year;
        }
    }
}