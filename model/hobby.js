let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let hobbySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: String
});

module.exports = mongoose.model('Hobby', hobbySchema);