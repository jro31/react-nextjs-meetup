import { useEffect, useState } from 'react';
import MeetUpList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'My First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
    address: 'My First Meetup address',
    description: 'This is the first meetup description',
  },
  {
    id: 'm2',
    title: 'My Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Englischer_Garten_M%C3%BCnchen.jpg/1280px-Englischer_Garten_M%C3%BCnchen.jpg',
    address: 'My Second Meetup address',
    description: 'This is the second meetup description',
  },
];

const HomePage = props => {
  return <MeetUpList meetups={props.meetups} />;
};

// If you don't have data that changes all the time (meaning multiple times per second),
// and if you don't need access to 'context.req' (for, for example, authentication),
// then 'getStaticProps()' is the better choice, because there you pregenerate an HTML file,
// which is faster than pregenerating and fetching data for every incoming request
export const getStaticProps = async () => {
  // fetching data from an API... (for example)
  const returnedData = DUMMY_MEETUPS;

  return {
    props: {
      meetups: returnedData,
    },
    revalidate: 10,
  };
};

export default HomePage;
