// const assert = require('assert');
// var request = require('request');
// const fs = require('fs');
// var expect = require('chai').expect,
// {
//     addStore,
//     findStore,
//     getStore,
//     getStoreById,
//     getStoreByUserId,
//     findLocationByAddress,
// } = require('./store.js'),

// mongoose = require('mongoose');

// describe("Store Functionality", () => {
//     let baseUrl = "http://localhost:8000";
//     let token = "";
//     var test = fs.readFileSync("./routes/mockData/mockData.json", 'utf8');
//     var obj = JSON.parse(test);
//     var id = "";
//     var userId = "";
//     var userEmail = "";

//     describe('generateToken', function() {
//         it('should login as admin user and return token', function (done) {
//             var options = {
//                 url: baseUrl + "/login",
//                 json: {
//                     "email": "aghazjunaid96@gmail.com",
//                     "password": "aghaz123"
//                 },
//             };
//             request.post(options, function (err, res, body){
//                 userId = body.data._id
//                 token =  body.data.token
//                 userEmail = body.data.email
//                 // console.log(body)
//                  console.log(userId)
//                  console.log(userEmail)
//                 expect(res.statusCode).to.equal(200);
//                 done();
//             });
//         });
//     });
//     describe("addStore", function() {
//         it("should post store details", function (done) {
//             var opt = obj.store.post;
//             var options = {
//                 url: baseUrl + "/store",
//                 headers: {
//                     'authorization': token
//                 },
//                 body: opt,
//                 json: true
//             };
//             request.post(options, function (err, res, body){
//                 id = body.data._id;
//                 userId = body.data.user;
//                 console.log(body)
//                 expect(res.statusCode).to.equal(200);
//                 assert.ok("An error occured while posting the store data to the database");
//                 done();
//             });
//         })
//     });
//     describe("getStore", function() {
//         it("should return all list of stores", function (done) {
//             var options = {
//                 url: baseUrl + "/store",
//             };
//             request.get(options, function (err, res, body){
//                 expect(res.statusCode).to.equal(200);
//                 //console.log(body)
//                 assert.ok(body.length >= 1, "An error occured while retirving the store data from the database");
//                 done();
//             });
//         })
//     });
//     describe("getStore by Id", function() {
//         it("should return store by id", function (done) {
//             var options = {
//                 url: baseUrl + `/store/${id}`,
//             };
//             request.get(options, function (err, res, body){
//                 expect(res.statusCode).to.equal(200);
//                 console.log(body)
//                 assert.ok(body.length >= 1, "An error occured while retirving the store data from the database");
//                 done();
//             });
//         })
//     });
//     describe("getStore by UserId", function() {
//         it("should return store by UserId", function (done) {
//             var options = {
//                 url: baseUrl + `/store/user/${userId}`,
//             };
//             request.get(options, function (err, res, body){
//                 expect(res.statusCode).to.equal(200);
//                 console.log(body)
//                 assert.ok(body.length >= 1, "An error occured while retirving the store data from the database");
//                 done();
//             });
//         })
//     });
//     describe("getStore by loaction", function() {
//         it("should return store by location", function (done) {
//             var opt = obj.store.findStore;
//             var options = {
//                 url: baseUrl + "/store/find/",
//                 body: opt,
//                 json: true
//             };
//             request.get(options, function (err, res, body){
//                 expect(res.statusCode).to.equal(200);
//                 console.log(body)
//                 assert.ok("An error occured while retirving the store data from the database");
//                 done();
//             });
//         })
//     });
//     after(() => {
//         mongoose.connection.models = {};
//     })
// });