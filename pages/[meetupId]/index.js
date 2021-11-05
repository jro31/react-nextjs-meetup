import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  // 'fallback' shouldn't be false here. It works in development, because the 'getStaticPaths()' function is re-run for every render.
  // However, on production, as users can add pages with new IDs, but this function is only run on build, then if a user adds a new meetup, trying to navigate to that meetup will return a 404
  // Instead, 'fallback' should be set to true, or to 'blocking'
  // If it is set to true, or to 'blocking', Next.js will not respond with a 404 if it's unable to find this page
  // Instead it will generate that page on demand, and thereafter it will be cached (as if pre-generated)
  // The difference between true and 'blocking', is that true immediately returns an empty page, and then pulls down the dynamically generated content once it's generated
  // So you need to handle the case that the page does not have the data yet (with a spinner, or displaying 'Loading...' or something)
  // With 'blocking', the user does not see anything until the page has finished generating, and the generated page is served
  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
