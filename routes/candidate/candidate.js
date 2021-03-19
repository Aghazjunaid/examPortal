module.exports = () => {
    extend = require("util")._extend,
    {Candidate} = require("../../models/candidate");
    jwt = require('jsonwebtoken');

    return require("./candidate.factory")({
        extend,
        Candidate,
        jwt
    });
};