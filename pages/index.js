import { MongoClient } from 'mongodb'; // If you import a package and only use it server-side (as we're doing with 'MongoClient') , Next.js will detect this and it will not be part of the client-side bundle

import MeetUpList from '../components/meetups/MeetupList';

const HomePage = props => {
  return <MeetUpList meetups={props.meetups} />;
};

export const getStaticProps = async () => {
  // This can be used here as 'getStaticProps()' is rendered server-side, not on the client
  const client = await MongoClient.connect(
    `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray(); // By default, the 'find()' function called on a collection, will find all the documents within that collection

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), // '_id' is just how it's returned from MongoDB
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
