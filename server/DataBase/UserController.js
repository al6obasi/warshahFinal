<<<<<<< HEAD
var User = require ('./UserModel');

module.exports = {
	
	 signin : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username})
      .then(function (user) {
        if (!user) {
          res.json("user not found")
        } else {
          user.comparePasswords(password)
            .then(function (isMatch) {
              if (isMatch) {
                // var token = jwt.encode(user, 'secret');
                // res.json({token : token});
                res.status(200).json(user);
              } else {
                res.json("password not matched")
              }
            });
        }
      });
  },
	
	signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;

    // check to see if user already exists
    User.findOne({username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create({
            username: username,
            password: password,
            name: name
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                // var token = jwt.encode(user, 'secret');
                // res.json({token: token}); 
                res.status(200).json(user);
              }     
          });
        }
      });
  },
=======
// var User = require ('./UserModel');

// module.exports = {
	
// 	signin : function (req, res, next) {
// 		User.findOne({username : req.body.username})
//  			.exec(function (error, user) {
// 	 			if(user){
// 	 				next(new Error('User already exist!'));
// 	 			}else{
// 					var newUser = new User ({
// 						username : req.body.username,
// 			        	password : req.body.password,
// 			        	email : req.body.email 
// 					});
// 					newUser.save(function(err, newUser){
// 			    		if(err){
// 			       		 	res.status(500).send(err);
// 			    		}else{
// 			    			res.json(newUser)
// 			    		};
// 					});
// 				}
// 			})
// 	},
	
// 	signup: function (req, res, next) {
// 		var username = req.body.username;
// 		var password = req.body.password;
// 		// check to see if user already exists
// 		findOne({username: req.body.username})
// 		.then(function (user) {
// 			if (user) {
// 				new Error('User already exist!');
// 			}else{
// 			// make a new user if not one
// 			signin();
// 			}
// 		})
// 	},
// }
// >>>>>>> 0ac7d5c2237ac67cb17c929c4d3cedfd6d7bed95
