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

All parameters for the user timeline are on the same page where you find the resources URL: https://dev.twitter.com/rest/reference/get/statuses/user_timeline

In controller.js
```sh
$scope.tweets = tweets;
```
You may find that $scope.tweets = tweets.statuses; in the drrasic's branch.

This depends on results getting from the request. 
You can find Example Result on https://dev.twitter.com/rest/reference/get/statuses/user_timeline