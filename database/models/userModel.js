const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

userSchema.pre("save", function (next) {
    // get access to the user model
    const user = this;
    // generate a salt
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        // hash/encrypt our passowrd using a salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            // overwrite plain text password
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch)
    })

}
module.exports = mongoose.model("user", userSchema);