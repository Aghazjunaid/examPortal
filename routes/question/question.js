module.exports = () => {
    extend = require("util")._extend,
    {Question} = require("../../models/question");
    const { Engine } = require('json-rules-engine');
  
    return require("./question.factory")({
        extend,
        Question,
        Engine,
    });
};