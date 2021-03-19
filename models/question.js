const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionsAnswerSchema = new Schema({
    questionNumber: {type: Number, required: true},
    QuestionType: {type: String, enum:["MCQ", "NAT", "MSQ"]},
    question: {type: String, required: true},
    a: {type: String},
    b: {type: String},
    c: {type: String},
    d: {type: String},
    marks: {type: Number},
    expectedSolvedTime: {type: Date},
    answer: {type: String}
});

Question = mongoose.model("question", QuestionsAnswerSchema);

module.exports = {
    Question
}