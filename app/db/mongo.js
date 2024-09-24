const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // Add your MongoDB connection string in the .env file
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

module.exports = { client, connectDB };
