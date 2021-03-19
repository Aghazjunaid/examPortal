const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamResultSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    question: {type: Schema.Types.ObjectId, ref:"question"},
    score: {type: Number, default : 0},
    isCorrect:  {
        type: Boolean,
        default: false
    }
});

Result = mongoose.model("result", ExamResultSchema);

module.exports = {
    Result
}