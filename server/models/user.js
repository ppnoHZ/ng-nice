var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    gender: { type: String, require: true },
    Create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },

})

UserSchema.index({ name: 1 });

module.exports = mongoose.model('User', UserSchema);