<<<<<<< HEAD
var mongoose= require ("mongoose"); 
var bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var UserSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique   : true
	}, 
	password:{
		type     : String, 
		required : true
	},
	email:{
		type     : String
	}

}); 

UserSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  // if (!user.isModified('password')) {
  //   return next();
  // }

    // hash the password along with our new salt
    bcrypt.hash(user.password, null, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
});


var User= mongoose.model('User', UserSchema);
module.exports= User; 

=======
//var mongoose= require ("mongoose"); 


var UserSchema = new mongoose.Schema({
	
	username:{
		type     : String, 
		required : true,
		unique   : true
	}, 
	password:{
		type     : String, 
		required : true
	},
	email:{
		type     : String
	}

}); 


var User= mongoose.model('User', UserSchema);
module.exports= User; 

>>>>>>> 0ac7d5c2237ac67cb17c929c4d3cedfd6d7bed95
