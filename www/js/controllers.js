angular.module('twitterFeed.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('TwitterFeedCtrl', function($scope, TwitterREST) {
    TwitterREST.sync().then(function(tweets){
        console.log(tweets);
        // statement used for search query
        // $scope.tweets = tweets.statuses;

        // statement used for a specific user timeline
        $scope.tweets = tweets;

    });

        $scope.innapBrowser = function (value) {
            window.open(value, '_blank');
        };
});
