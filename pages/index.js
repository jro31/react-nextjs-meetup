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

const HomePage = () => {
  return <MeetUpList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
