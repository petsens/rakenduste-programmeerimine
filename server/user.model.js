const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_PRIVATE_KEY = "very-secret-not-so-strong-password";

const userSchema = new mongoose.Schema({
    email: {type:String, required:true, unique: true},
    hash: {type:String, required: true},
    createdAt: { type: Date, default: Date.now},
});

// Login check with hash, if user exists
userSchema.statics.login = function({email, password}) {
    return new Promise(( resolve, reject) =>{
        this.findOne({email}, (err, userDoc) =>{
            if(err) return reject(err);
            if(userDoc === null) return reject("User not found");
            bcrypt.compare(password, userDoc.hash, function(err, result) {
                if(err) return reject(err);
                if(!result) return reject("Invalid password");
                resolve({
                    email: userDoc.email,
                    createdAt: userDoc.createdAt,
                    _id: userDoc._id,
                });
            });
        });
    });
};

// Creates a new user
userSchema.statics.signup = function({email, password}) {
    console.log(email, password);
    return new Promise(( resolve, reject) =>{
        bcrypt.hash(password, 10, function(err, hash) {
            if(err) return reject(err);
            const user = new User({email, hash});
            user.save( err =>{
                if(err) return reject(err);
                resolve(user);
            });
        });
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;