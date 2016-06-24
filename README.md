# Modification
This Demo aims to display a specific user' twitter timeline.

![Twitter feed screenshot](/www/img/twitter-user-timeline.jpeg?raw=true "Twitter feed screenshot")

# Installation:
Ionic framework and cordova framework
```sh
    ionic plugin add cordova-plugin-whitelist
    cordova plugin add cordova-plugin-inappbrowser
```

# Add your twitter consumer key and secret
Find from here: https://apps.twitter.com/

Replace this two lines in services.js
```sh
var consumerKey = "you Consumer Key (API Key) here";
var consumerSecret = "you Consumer Secret (API Secret) here";
```

# What you may want to change:
In service.js
```sh
var twitterStreamURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="; 
```

All resources URL can be found in https://dev.twitter.com/rest/public

Example above can be found in https://dev.twitter.com/rest/reference/get/statuses/user_timeline
```sh
var qValue = "twitter";
```

These are parameters that can be included in the request URL

All parameters for the user timelne are on the same page where you find the resources URL: https://dev.twitter.com/rest/reference/get/statuses/user_timeline

In controller.js
```sh
$scope.tweets = tweets;
```
You may find that $scope.tweets = tweets.statuses; in the drrasic's branch.

This depends on results getting from the request. 
You can find Example Result on https://dev.twitter.com/rest/reference/get/statuses/user_timeline

# About
Seeing that many people are looking for a solution to display twitter timelines and feeds in Ionic I decided to post mine, it is using twitter Application-only authentication so you don't need user login bulshit.

This Demo contains simple example app, with some design, and few filters for pulling hashTags from text, formating date to 'time ago' etc. 

![Twitter feed screenshot](/www/img/twitter-feed-ionic.jpeg?raw=true "Twitter feed screenshot")

## Installation

To test you need to pull this repository, add desired platform and replace Consumer API Keys you get when you create app on https://apps.twitter.com/

Replace this two lines in services.js
```sh
var consumerKey = "you Consumer Key (API Key) here";
var consumerSecret = "you Consumer Secret (API Secret) here";
```

**Update(0.0.2)**
If you're using a newer version of Cordova (or the latest Ionic CLI) to develop your app you need to add Cordova whitelist plugin! Run the following in project's directory:
```sh
ionic plugin add cordova-plugin-whitelist
```

**Update(0.0.3)**
If you wont hyperlinks(hashtags, users, lists, links) to open in InnapBrowser when clicked you have to add this plugin :
```sh
cordova plugin add cordova-plugin-inappbrowser
```

## NOTE
You wont be able to see the feed with ionic serve command, because of cross-origin resource sharing not being enabled in browser. Build on phone to see results.

## UPDATES
### Version 0.0.3 - August 2015
* Enhancement : [#2](https://github.com/drrasic/ionic_twitter_feed/issues/2) Enabled opening Hyperlinks(hashtags, users, lists, links) in InnapBrowser.

### Version 0.0.2 - June 2015
* Bug fix : [#1](https://github.com/drrasic/ionic_twitter_feed/issues/1) getting http 404 errors in new version of cordova


## Twitters Application-only authentication?
https://dev.twitter.com/oauth/application-only

With Application-only authentication you don’t have the context of an authenticated user and this means that any request to API for endpoints that require user context, such as posting tweets, will not work. However, the set of endpoints that will still be available can have a higher rate limit.

Your app will be able to, for example:

  - Pull user timelines;
  - Access friends and followers of any account;
  - Access lists resources;
  - Search in tweets;
  - Retrieve any user information;

And it won’t be able to:
  - Post tweets or other resources;
  - Connect in Streaming endpoints;
  - Search for users;
  - Use any geo endpoint;
  - Access DMs or account credentials;

### Demo version
0.0.2

### Tech
* [Ionic] - Advanced HTML5 Hybrid Mobile App Framework

[Ionic]:http://ionicframework.com/
