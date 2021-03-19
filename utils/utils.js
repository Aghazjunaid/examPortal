module.exports = () => {
    const jwt = require('jsonwebtoken');
    const { Engine, Rule } = require('json-rules-engine');

   // async function generateToken()

    function authenticateToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token){
            return res.status(401).send("Invalid authorization");
        } else {
            jwt.verify(token, "jhdjudyfjhfbjaDYHJ", (error, user) => {
                if (error){
                    return res.status(400).send(error);
                }
                req.user = user;
                next();
            })
        }
    }

    async function ruleBuilder(opt){
        var rules = {
            conditions: 
                opt.conditions,
            event: opt.event,
        }
        let rule = new Rule(rules)
        let jsonString =  rule.toJSON();
        return jsonString;
    }

    async function ruleChecker(question){
        let engine = new Engine()
        let rule = new Rule(question.rule)
        engine.addRule(rule);
        let response = await engine.run(opt.facts);
        return response
    }

    return {
        authenticateToken,
        ruleBuilder,
        ruleChecker
    }
}