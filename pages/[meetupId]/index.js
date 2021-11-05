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

// 'getStaticPaths()' is a function that you NEED to export in a page component file, if it's a dynamic page AND you're using 'getStaticProps()'
// (but not if you're using 'getServerSideProps()')
export const getStaticPaths = async () => {
  // Next.js needs to pre-generate ALL versions of this dynamic page in advance; for all the supported IDs (in this case 'meetupId')
  // Otherwise, if a user tries to access a page, and it hasn't been pre-generated, they'll get a 404 error
  // The 'getStaticPaths()' function must return an object which contains all the dynamic values (in this case, all the 'meetupId' values) for which this page should be pre-generated
  // This object MUST contain a 'paths' key, which contains an array, with each element of this array being an object
  // Each of these objects MUST contain a 'params' key, which in turn contains an object, with all the key/value pairs that could lead to this dynamic page
  // (note that if you have mutliple dynamic pages (we don't here), then each params object would contain all dynamic values, e.g: 'params: { meetupId: 'm1', anotherPageId: 'f1' }'... I think)
  // This obviously wouldn't normally be hardcoded, the supported IDs would be fetched from a database or API, and generated dynamically (for illustrative purposes though, this'll do)
  // The return object MUST also contain a 'fallback' key
  // This tells 'Next.js' whether the 'paths' array contains all supported parameter values, or just some of them
  // Setting 'fallback' to false, says that 'paths' contains ALL supported 'meetupId' values, so if a user enters a 'meetupId' that's not here (for example, 'm3'), they would see a 404 error
  // If set to true, the paths returned here will still be generated with 'npm run build'
  // However, paths not returned here will be generated when a user attempts to visit them
  // (not very clearly explained in the course, but 'https://thetombomb.com/posts/nextjs-optimizing-getstaticpaths-with-fallback' was a good resource)
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

// We CANNOT use hooks (notably 'useRouter()') in the 'getStaticProps()' function
export const getStaticProps = async context => {
  // Like 'getServerSideProps()', 'getStaticProps()' has a 'context' argument
  // Although beware that it does NOT contain 'req' or 'res' values, like with 'getServerSideProps()'
  // Instead it includes a 'params' key
  // 'context.params' will be an object, where the keys are properties, and the values will be the values encoded in the URL

  const meetupId = context.params.meetupId;

  // As this code runs during build time, we DON'T see this 'console.log' in the browser console
  // However, during development, this code will run for every incoming request, so this 'console.log' is available in terminal
  // (in the 'npm run dev' logs)
  console.log(meetupId);

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
