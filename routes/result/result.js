module.exports = () => {
    extend = require("util")._extend;
    const utils = require("../../utils/utils")(),
    {Result} = require("../../models/examScore");
    const { Engine } = require('json-rules-engine');
    
  
    return require("./result.factory")({
        extend,
        Result,
        Engine,
        utils
    });
};