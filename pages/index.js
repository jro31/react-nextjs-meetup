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

export const getStaticProps = async () => {
  // fetching data from an API... (for example)
  const returnedData = DUMMY_MEETUPS;

  return {
    props: {
      meetups: returnedData,
    },
    revalidate: 10,
  };
  // Adding the 'revalidate' property to this return object, we unlock a feature called 'Incremental Static Generation'
  // 'revalidate' has a value of a number, and this number is the number of seconds Next.js will wait before regenerating this page for an incoming request
  // That means that this page will not just be generated during the build process ('npm run build'), but it will also be generated every 10 seconds on the server (if there are requests coming in for this page)
  // Thus ensuring that your data is never more than 10 seconds old
  // (the number you choose depends on how frequently you expect data to change; nothing wrong with having '3600' (or higher) for an app that rarely changes)
};

export default HomePage;
