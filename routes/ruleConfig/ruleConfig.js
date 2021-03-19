module.exports = () => {
    extend = require("util")._extend;
    const utils = require("../../utils/utils")(),
    {RuleConfig} = require("../../models/ruleConfig");
    const { Engine } = require('json-rules-engine');
    

    return require("./ruleConfig.factory")({
        extend,
        RuleConfig,
        Engine,
        utils,
    });
};