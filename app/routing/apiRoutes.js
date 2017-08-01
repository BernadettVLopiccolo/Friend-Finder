var friend = require("../data/friends.js");
var path = require("path");
var scoreDifference = 0;
var bffDifference = 4;
module.exports = function(app) {
	app.get("/api/friend", function(req res) {
		res.json(friend);
	});

	app.post("/api/friend", function(req res) {
		var bestMatch = {
			name: "",
			photo: "",
            matchDifference: 10
		};
		var friendData = req.body;
		var friendName = friendData.name;
		var friendPhoto = friendData.photo;
        var friendScores = friendData.scores;
        // for loop to get each friends scores
        for (var i = 0; i < [friend].length -1; i++) {
        	console.log(friend[i].name);
        	scoreDifference = 0;
            // for loop to check if there are different scores between friends
        	for(var j = 0; j < 10; j++) {
        		//  returns the absolute value of a number
        		scoreDifference += Math.abs(parseInt(friendScores[j]) - parseiInt(friend[i].scores[j]));
        		if (scoreDifference >= bestMatch.bffDifference) {
        			bestMatch.name = friend[i].name;
        			bestMatch.photo = friend[i].photo;
        			bestMatch.matchDifference = scoreDifference;
        		}
        	}
        }
        friend.push(friendData);
        res.json(bestMatch);
	});
};