var friends = require("../data/friends.js");

var path = require("path");
var totalDifference = 0;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            matchDifference: ""
        };
        var newFriendData = req.body;
        var newFriendName = newFriendData.name;
        var newFriendPhoto = newFriendData.photo;
        var newFriendScores = newFriendData['scores[]'];

        for (var i = 0; i < [friends].length; i++) {

            totalDifference = 0;

            for (var j = 0; j < newFriendData['scores[]'].length; j++) {

                totalDifference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j]));

                if (totalDifference <= bestMatch.matchDifference) {
                    console.log("bestMatch", bestMatch);
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.matchDifference = totalDifference;
                }
            }
        }
        friends.push(newFriendData);
        res.json(bestMatch);
    });
};