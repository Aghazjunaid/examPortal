const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RuleConfigSchema = new Schema({
    ruleName: {type: Schema.Types.ObjectId, ref:"question"},
    conditions: {  
        all : [{
            fact: {type: String},
            operator: {type: String},
            value: {type: String},
        }]
    },
    event: {
        type: {type: String},
        params:{
            message: {type: String},
        }
    },
    rule: {type: String}
});

RuleConfig = mongoose.model("rule", RuleConfigSchema);

module.exports = {
    RuleConfig
}