var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// var friend = [
//  {
// 	name: "Bill",
// 	photo: "https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Cockapoo-Puppies-For-Sale-600x600.jpg",
// 	scores: [2, 3, 5, 1, 3, 3, 3, 2, 2, 4]
//       },
// ];
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });
// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });
// app.get("/survey", function(req, res) {
//   res.json(friend);
// });
// app.get("/api/:friend?", function(req, res) {
//   var chosen = req.params.friend;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < friend.length; i++) {
//       if (chosen === friend[i].routeName) {
//         return res.json(friend[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(friend);
// });
// app.post("/api/new", function(req, res) {
//   var newFriend = req.body;
//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newFriend);

//   friend.push(newFriend);

//   res.json(newFriend);
// });


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});