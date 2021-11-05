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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async context => {
  const meetupId = context.params.meetupId;

  // Fetching data for a single meetup...
  const returnedData = {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/1280px-Englischer_Garten_M%C3%BCnchen.jpg',
    id: meetupId,
    title: 'Some hardcoded title',
    address: 'Some hardcoded address',
    description: 'Some hardcoded description',
  };

  return {
    props: {
      meetupData: returnedData,
    },
  };
};

export default MeetupDetails;
