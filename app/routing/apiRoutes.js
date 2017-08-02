var friends = require("../data/friends.js");

var path = require("path");
var totalDifference = 0;
// var bffDifference = 10;
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friend);
	});

	app.post("/api/friends", function(req, res) {
		var bestMatch = {
			name: "",
			photo: "",
            matchDifference: 1000
		};
		var newFriendData = req.body;
		var newFriendName = newFriendData.name;
		var newFriendPhoto = newFriendData.photo;
        var newFriendScores = newFriendData['scores[]'];
         // console.log("newFriendScores", newFriendScores);
        // for loop to get each friends scores
        for (var i = 0; i < [friends].length; i++) {
            // console.log("[friend].length", [friend].length);
        	// console.log(friend[i].name);
            // console.log(friend[i].photo);
        	totalDifference = 0;
            // for loop to check if there are matching scores between friends

        	for(var j = 0; j < newFriendData['scores[]'].length; j++) {
        		//  returns the absolute value of a number
        		totalDifference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j]));
                // console.log("totalDifference", totalDifference);
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