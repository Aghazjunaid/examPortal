const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
   name: {type: String, required: true},
   email: {type: String, required: true, unique: true},
   expired: {type: Date, default: Date.now, index: { expires: '10h' }},
});

Candidate = mongoose.model("user", CandidateSchema);

module.exports = {
    Candidate
}