const mongoose = require('mongoose');
const MongoURI='mongodb+srv://anshjindal132:anshjinda@cluster0.q9ofh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(MongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
module.exports=mongoDB;
