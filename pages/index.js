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

// To solve the aforementioned issue, there are two forms of 'Pre-Rendering' - 'Static Generation' and 'Server-side Rendering'
// You should typically use 'Static Generation'
// When using 'Static Generation', a page component is pre-rendered when you 'build' a project for production (with 'npm run build')
// That means that after it is deployed, that pre-rendered page does not change. To change it, you need to run 'npm run build' and redeploy it again
// You add 'Static Generation' with the 'getStaticProps' function (below)
export const getStaticProps = async () => {
  // fetching data from an API... (for example)
  const returnedData = DUMMY_MEETUPS;

  return {
    props: {
      meetups: returnedData,
    },
  };
  // This function ALWAYS needs to return an object, and you typically set a 'props' property (which HAS TO BE NAMED 'props'), which holds another object
  // This 'props' property will be the props that are received by the component function
  // (the 'props' in 'const HomePage = props => {')
};
// This function only works in page component files (component files inside of the 'pages' folder)
// It HAS TO BE NAMED 'getStaticProps()'
// Next.js will look for a function called 'getStaticProps', and if it finds it, will execute it during this pre-rendering process
// It will call this function first, before it calls the 'HomePage' component function
// What this function does, is prepare props for this page, and these props can contain the data that this page needs
// It can be an asynchronous function, which returns a promise
// Next.js will wait for this promise to be resolved (for the data to be returned) before returning the props for the component function
// Therefore, you can load the component with the required data
// Note that in this function, you can execute any code that would normally only run on a server (for example, accessing a database), because any code in here, will never end up on the client side, and will never execute on the client side
// because it executes during the 'build' process - Not on the server, and not on the clients of your visitors (it will never reach a user's machine)

// ONE OBVIOUS FLAW
// is that because this function only runs on 'npm run build', if the data displayed on this page frequently changes (for example, if it's fetched from an ever-changing database), then the latest data isn't going to be shown on this page
// This solution is sufficient for some apps, for example, a personal blog that doesn't change much. For that, just updating on 'npm run build' would be ok.
// But for apps with more dynamic content, this doesn't work
// (should be solved in the next commit)

export default HomePage;
