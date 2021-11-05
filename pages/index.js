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

// To regenerate a page for EVERY incoming request (meaning that you pregenerate the page, dynamically, on the fly, after deployment, on the server)
// Then you use 'getServerSideProps()'
export const getServerSideProps = async context => {
  const req = context.req; // We aren't using these here, but just for illustrative purposes, you get a 'context' argument in 'getServerSideProps'
  const res = context.res; // It contains 'req' (the request) and 'res' (the result) in case you need to use them - No idea how or why

  // fetching data from an API... (for example)
  const returnedData = DUMMY_MEETUPS;

  return {
    props: {
      meetups: returnedData,
    },
  };
};
// This function will NOT run in the build process
// Instead it will run on the server, after deployment
// It will ALWAYS run on the server, NEVER in the client
// (so you can, for example, run operations that use credentials that should not be exposed to users)
// You CAN'T set 'revalidate' in this function (and there would be no point because it runs on every request)

export default HomePage;
