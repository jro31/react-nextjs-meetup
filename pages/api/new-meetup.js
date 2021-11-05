// my-domain.com/api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    // Should also add error handling here, but to keep it concise, here we assume that it always works

    client.close();

    res.status(201).json({ message: 'Meetup inserted' });
  }
};

export default handler;
