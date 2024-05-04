require('dotenv').config();
const mongoose = require('mongoose');
const db = 'youtube';

async function connectingDatabase(){
    try{
        const dbInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db}`);
        console.log(`MONGO Database connected !! DB URI: ${process.env.MONGODB_URI}`);
        return dbInstance
    }
    catch (error) {
        console.log(`MONGO DB CONNECTION ERROR: ${error}`);
        process.exit(1);
    }
};

module.exports = connectingDatabase;