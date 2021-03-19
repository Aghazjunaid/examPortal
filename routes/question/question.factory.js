module.exports = ({
    extend,
    Question,
    Engine
}) => {

    //==================question===================================================================
    //===================post question===================================================
    async function postQuestion(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        } 
        try {
            opt = extend({},req.body);
            var question = new Question(opt); 
            question.save(function(error,doc){
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

    //================get questions======================================================
    async function getQuestion(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            Question.find({}).exec(function(error,doc){
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

    //=================get question by id================================================
    async function getQuestionById(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            Question.find({_id:req.params.id}).exec(function(error,doc){
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

    //=================update question===================================================
    async function updateQuestion(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            var opt = extend({}, req.body);
            Question.findOneAndUpdate({_id:req.params.id}, opt, {new:true}).exec(function(error,doc){
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

    //===============delete question=====================================================
    async function deleteQuestion(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "data": null
        }
        try{
            Question.findByIdAndDelete({_id:req.params.id}).exec(function(error,doc){
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
        postQuestion,
        getQuestion,
        getQuestionById,
        updateQuestion,
        deleteQuestion
    }
}
