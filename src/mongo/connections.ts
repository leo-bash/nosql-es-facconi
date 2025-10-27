import { MongoClient } from "mongodb"

export const connectToMongo = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri){
    throw new Error("MONGO_URI is not set");
  }

  const dbName = process.env.MONGO_DB_NAME;
  if(!dbName){
    throw new Error("MONGO_DB_NAME is not set");
  }

  try{
    const client = new MongoClient(mongoUri, {
      maxPoolSize: 10,
    });

    const connection = await client.connect();

    const db = connection.db(dbName);

    return db;

  }catch (error){
    console.error(error);
    throw new Error("Failed tp connect to MongoDB")
  }
}