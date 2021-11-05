// my-domain.com/api/new-meetup

// Note that the containing folder MUST be named 'api', and it MUST be contained within the 'pages' folder
// Files in the 'api' folder contain functions that return server-side code
// The code in here will NEVER be exposed to the client (so it can include credentials, for example)

import { MongoClient } from 'mongodb';

// This function doesn't have to be named 'handler', but is convention
// 'req' = request (contains things like the headers, the request body, and the method)
// 'res' = response
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    // Data here, is an object of 'title', 'image', 'address', and 'description'

    // You should NEVER run this code client-side, because it would expose your db login credentials. Here it's ok though.
    const client = await MongoClient.connect(
      `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
    ); // 'meetups' in here in the name of the database, and if it doesn't already exist, will be created on the fly
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    // 'meetups' here is the collection name, and if it doesn't exist, it will also be created on the fly
    // It also doesn't have to match the name of the database (even though we do so here)
    // MongoDB is a NoSQL db, and the 'collections' are roughly equivalent to tables in a SQL database
    // 'documents' are the entries into these collections/tables; collections hold multiple documents
    // A single meetup, would be a single document

    const result = await meetupsCollection.insertOne(data);
    // 'insertOne()' inserts one new document into this collection
    // A document is just a javascript object, so we can pass 'data' (already an object) into this function

    console.log(result);
    // Should also add error handling here, but to keep it concise, here we assume that it always works

    client.close();
    // This 'closes' the database connection ¯\_(ツ)_/¯

    res.status(201).json({ message: 'Meetup inserted' });
    // 'res' is the response that we return from this function... I think
    // We're assuming that this always works, so returning a 201 status (obviously you would want that to be dynamic)
  }
};

export default handler;
