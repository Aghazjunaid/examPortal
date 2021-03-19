module.exports = ({
    extend,
    Result,
    utils,
    Engine
}) => {

    // async function ans(obj, opt){
    //   let engine = new Engine()
      
    //   engine.addRule({
    //       conditions: {
    //           all: [{
    //             fact: obj._doc.fact,
    //             operator: obj._doc.operator,
    //             value: obj._doc.value
    //           }]
    //       },
    //       event: {  // define the event to fire when the conditions evaluate truthy
    //         type: obj._doc.actiontype,
    //         params: {
    //           message: obj._doc.message
    //         }
    //       }
    //     })

    //     //que = obj._doc.fact;
    //     let facts = {
    //       '12+2' : opt.answer
    //     };
        
    //     // Run the engine to evaluate
    //     let response = await engine.run(facts);
                
    //     return response 
    // }

    //============================post result============================================
    async function postResult(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        } 
        try {
            opt = extend({},req.body);
            opt.name = req.user.name;
            opt.email = req.user.email;
            var question = await RuleConfig.findOne({_id:opt.question})
            if (question) {
              var obj = await utils.ruleChecker(question, opt);
                if (obj.almanac.events.success.length >= 1){
                  opt.score = 4;
                  opt.isCorrect = true;
                  var result = new Result(opt); 
                  result.save(function(error,doc){
                      if(error) {
                          return_response["status"] = 400;
                          return_response["message"] = String(error);
                      } else {
                          return_response["status"] = 200;
                          return_response["message"] = "success";
                          return_response["data"] = doc;
                      }
                      return res.send(return_response);
                  })
                } else {
                  var result = new Result(opt); 
                  result.save(function(error,doc){
                      if(error) {
                          return_response["status"] = 400;
                          return_response["message"] = String(error);
                      } else {
                          return_response["status"] = 200;
                          return_response["message"] = "success";
                          return_response["data"] = doc;
                      }
                      return res.send(return_response);
                  })
                }
            }
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    }
    
    //==============================get result===========================================
    async function getResult(req,res){
      var return_response = {
          "status": null,
          "message": null,
          "data": null
      }
      try{
        var obj = await Result.findOne({email:req.user.email})
        if(obj) {
            Result.find({}).exec(function(error,doc){
                if(error){
                    return_response["status"] = 400;
                    return_response["message"] = String(error);
                } else {
                    return_response["status"] = 200;
                    return_response["message"] = "success";
                    return_response["data"] = doc;
                }
                return res.send(return_response);
            })
        } else {
          return_response["status"] = 400;
          return_response["message"] = "User doesn't found";
        }
          
      } catch (error) {
          return_response["message"] = String(error);
          return res.status(400).send(return_response);
      }
    }

    //==================get result by question===========================================
    async function getResultByQuestionId(req,res){
      var return_response = {
          "status": null,
          "message": null,
          "data": null
      }
      try{
        var obj = await Result.findOne({email:req.user.email})
        if(obj) {
            Result.find({question:req.params.id}).exec(function(error,doc){
                  if(error){
                      return_response["status"] = 400;
                      return_response["message"] = String(error);
                  } else {
                      return_response["status"] = 200;
                      return_response["message"] = "success";
                      return_response["data"] = doc;
                  }
                  return res.send(return_response);
            })
        } else {
          return_response["status"] = 400;
          return_response["message"] = "User doesn't found";
        }
      } catch (error) {
          return_response["message"] = String(error);
          return res.status(400).send(return_response);
      }
    }

    //================delete result======================================================
    async function deleteResult(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
          var obj = await Result.findOne({email:req.user.email})
          if(obj) {
              Result.findByIdAndDelete({_id:req.params.id}).exec(function(error,doc){
                  if(error){
                      return_response["status"] = 400;
                      return_response["message"] = String(error);
                  } else {
                      return_response["status"] = 200;
                      return_response["message"] = "success";
                      return_response["data"] = doc;
                  }
                  return res.send(return_response);
              })
          } else {
            return_response["status"] = 400;
            return_response["message"] = "User doesn't found";
          }
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    } 


    return {
      postResult,
      getResult,
      getResultByQuestionId,
      deleteResult
    }
}
