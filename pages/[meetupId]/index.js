import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://jethro:${process.env.MONGO_DB_PASSWORD}@cluster0.uapqi.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // Find with no arguments returns all documents in the collection
  // The first argument is an object in order to 'filter' the documents (if you don't want to return all documents); passing-in an empty object (as here) it will just return all documents
  // The second arugment defines which 'fields' (title, image, address etc) should be extracted for each document (again, an empty object means return all fields)
  // Here, we use '{ _id: 1 }', to include just the '_id' field
  // (with '1' being equivalent to 'true'. If it was '{ _id: 0 }', it would be equivalent to false, and the '_id' field would be omitted from the return - Not sure why, it'd be omitted if we didn't mention it at all, but that's what the '1' means.)

  client.close();

  return {
    fallback: false,
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
  // 'findOne()' finds one single document in the collection
  // It takes an object as an argument, which defines how to filter for that document
  // (you don't have to search by id. You can filter by any field, such as title, address etc.)
  // The 'ObjectId()' function (imported from MongoDB), converts a string into an '_id' as stored on the MongoDB database
  // 'console.log(meetupId)' returns '618536bbcb5ea36bc22345d8'
  // 'console.log(ObjectId(meetupId)) returns 'new ObjectId("618536bbcb5ea36bc22345d8")'

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
