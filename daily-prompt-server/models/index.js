// mongoose will make the query more efficiently
const mongoose = require("mongoose");
// can see actual mongo queries in the terminal
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/test", {
  keepAlive: true,
  useMongoClient: true
});

// boundling: 
// export out a property on whatever I sent from index called User
// and it's going to be the result of the entire user model
module.exports.User = require("./user");
module.exports.Message = require("./message");
