/*const mongoose = require("mongoose");
const MongoURI =
  "mongodb+srv://anshjindal132:anshjinda@cluster0.q9ofh.mongodb.net/GoFoods?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    mongoose.set("strictQuery", false);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
const fetch_data = mongoose.connection.db.collection("food_items");
fetch_data.find({}).toArray(function (err, data) {
  if (err) console.log(err);
  else console.log(data);
})
module.exports = mongoDB;
*/
const mongoose = require("mongoose");

const MongoURI =
  "mongodb+srv://anshjindal132:anshjinda@cluster0.q9ofh.mongodb.net/GoFoods?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    // Set Mongoose options before connecting
    mongoose.set("strictQuery", false);

    // Connect to MongoDB
    await mongoose.connect(MongoURI);

    console.log("Mongo connected");

    // Ensure connection is ready before accessing the collection
    const db = mongoose.connection.db;

    // Fetch data from the collection
    const fetch_data = await db.collection("food_items");
    const data=await fetch_data.find({}).toArray()
    const foodCategory=await db.collection("foodCategory");
    const catData=await foodCategory.find({}).toArray()
    global.foodCategory=catData;
    global.food_items=data;
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure code
  }
};

module.exports = mongoDB;
