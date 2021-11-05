import { Fragment } from 'react';
import Head from 'next/head'; // 'Head' allows you to add 'head' elements to the '<head>' section of a page
import { MongoClient } from 'mongodb';

import MeetUpList from '../components/meetups/MeetupList';

const HomePage = props => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a list of React meetups in your area' />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
