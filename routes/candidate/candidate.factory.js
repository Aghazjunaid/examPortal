module.exports = ({
    extend,
    Candidate,
    jwt
}) => {

    //======================post candidate================================================
    async function postCandidate(req,res){
        var return_response = {
            "status": null,
            "message": null,
            "token": null
        } 
        try {
            opt = extend({},req.body);
            var authHeaderValue = {
                "authorization": "Bearer 71D50F9987529"
            };
            const token = jwt.sign({
                email:opt.email,
                name:opt.name
            }, "jhdjudyfjhfbjaDYHJ",{
                expiresIn: "10h"
            });
            const obj = authHeaderValue.replace('Bearer ', '')
            var candidate = new Candidate(opt); 
            candidate.save(function(error,doc){
                if(error) {
                    return_response["status"] = 400;
                    return_response["message"] = String(error);
                } else {
                    return_response["status"] = 200;
                    return_response["message"] = "success";
                    return_response["token"] = token;
                }
                return res.send(return_response);
            })
        } catch (error) {
            return_response["message"] = String(error);
            return res.status(400).send(return_response);
        }
    }




    return {
        postCandidate
    }
}