// This component (it has to be in the '_app.js' file), is the root component that 'Next.js' will render

import Layout from '../components/layout/Layout';
import '../styles/globals.css';

// It receives props, and uses object destructuring to pull the 'Component' and the 'pageProps' out of the props
// These props are passed-into the 'MyApp' component automatically by Next.js, as Next.js is the 'thing' using the 'MyApp' component
// 'Component' holds the actual page content that should be rendered (I tried console logging it; it didn't make much sense)
// 'pageProps' are specific props to the page. I console logged this, and at this stage it was just an empty object, but that would make sense as we're not passing-in any props anywhere yet.
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
