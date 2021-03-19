const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const apiRouter = require("./routes/api");

const PORT = process.env.PORT || 5000


var connectionString = "mongodb://localhost:27017/exam";
// Mongoose setup and config.
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;

mongoose.connect(connectionString, {
}).catch(error => {
  console.error("Error connecting to database", error);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`app listening on port:${PORT}`)
})