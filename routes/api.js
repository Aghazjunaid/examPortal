var express = require('express'),
apiRouter = express.Router();

utils = require("../utils/utils")();

rule = require('./ruleConfig/ruleConfig')();
candidate = require('./candidate/candidate')();
question = require("./question/question")();
result = require("./result/result")();

apiRouter.get('', (req, res) => {
    res.status(200).send("Examinatin Node api demo")
})

//========question api=================
apiRouter.post("/question", question.postQuestion)
apiRouter.get("/question", question.getQuestion)
apiRouter.get("/question/:id", question.getQuestionById)
apiRouter.put("/question/:id", question.updateQuestion)
apiRouter.delete("/question/:id", question.deleteQuestion)

//========candidate api================
apiRouter.post("/user", candidate.postCandidate)

//=========result api==================
apiRouter.post("/result", utils.authenticateToken, result.postResult)
apiRouter.get("/result", utils.authenticateToken, result.getResult)
apiRouter.get("/result/:id", utils.authenticateToken, result.getResultByQuestionId)
apiRouter.delete("/result/:id", utils.authenticateToken, result.deleteResult)

//=========rule config api=============
apiRouter.post("/rule", rule.postRuleConfig)
apiRouter.get("/rule", rule.getRuleConfig)
apiRouter.put("/rule/:id", rule.updateRuleConfig)
apiRouter.delete("/rule/:id", rule.deleteRuleConfig)


module.exports = apiRouter;