const mongoose = require("mongoose");
const MongoURI =
  "mongodb+srv://anshjindal132:anshjinda@cluster0.q9ofh.mongodb.net/GoFoods?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(MongoURI);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
/*const fetch_data = mongoose.connection.db.collection("food_items");
fetch_data.find({}).toArray(function (err, data) {
  if (err) console.log(err);
  else console.log(data);
});*/
module.exports = mongoDB;
