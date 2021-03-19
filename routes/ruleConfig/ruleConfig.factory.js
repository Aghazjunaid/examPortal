module.exports = ({
    extend,
    RuleConfig,
    Engine,
    utils
}) => {

    //=================post ruleConfig====================================================
    async function postRuleConfig(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        } 
        try {
            opt = extend({},req.body);
            var jsonString = await utils.ruleBuilder(opt);
            opt.rule = jsonString
            var rule = new RuleConfig(opt); 
            rule.save(function(error,doc){
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
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    }    

    //=====================get rule====================================================
    async function getRuleConfig(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            RuleConfig.find({}).exec(function(error,doc){
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
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    }

     //=================update rule======================================================
     async function updateRuleConfig(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            var opt = extend({}, req.body);
            RuleConfig.findOneAndUpdate({_id:req.params.id}, opt, {new:true}).exec(function(error,doc){
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
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    }

    //====================delete rule====================================================
    async function deleteRuleConfig(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            RuleConfig.findByIdAndDelete({_id:req.params.id}).exec(function(error,doc){
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
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    } 

    return {
        postRuleConfig,
        getRuleConfig,
        updateRuleConfig,
        deleteRuleConfig
    }
}