The second project based on *'Section 23: A (Pretty Deep Dive) Introduction to Next.js'* of Academind's *['React - The Complete Guide'](https://acad.link/reactjs)* course, this repo has commits of examples of:

* Updating 'React' `<Link>` components to be 'Next.js' `<Link>` components - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/008ec9da71de402ef3f4547c5e37ce53016d25fe)
  * The difference being that 'React' uses the `to` prop, where as 'Next' uses the `href` prop
* Using a `<Layout>` component in the `pages/_app.js` file, so that it is present on every page of the app - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/95d931c3c15ab676842592b1bd824953417da7da)
  * Includes some notes about exactly what the `pages/_app.js` file is
* Using the 'Next.js' `useRouter()` hook `push()` function to navigate to the `pages/[meetupId].js` page programatically - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/3235db1e041e3731cc5f1f3dcab7c985de8d113a)
  * Note that although the navigation works, an error is thrown as `pages/[meetupId].js` has no content
* Simulating fetching data from a backend, as has been done up to this point in the course, with an explanation of why this method leads to abysmal search engine optimisation - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/17e7433f3fbaf8abad21475ea2d4795e536db41c)
* Adding the `getStaticProps()` function in order to fix the search engine optimisation flaw highlighted in the last commit. Includes a lengthy explanation. - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/b09662f01205f7fe802a4008943ae2ade694b658)
  * Note that this approach is still flawed if the data is frequently changed, as it is only refreshed when we run `npm run build` - addressed in the next commit
* Adding 'Incremental Static Generation' by adding `revalidate` to the object returned from `getStaticProps()`, in order to fix the issue of frequently changing data not being refreshed in the `getStaticProps()` function - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/03112f9cd12fab39db24f817f21fc775b43844ae)
  * Includes an explanation of exactly what is happening
* Replacing `getStaticProps()` with the `getServerSideProps()` function to regenerate a page on *every* request - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/68f97afaf49452244117038103f00627ba5fe429)
* When to use `getStaticProps()`, and when to use `getServerSideProps()` - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/d60cae6c16aab1fab974f2d419c57f3c57c39a60)
* Adding `getStaticProps()` to the `pages/[meetupId]/index.js` dynamic page - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/237689191bda8b4e740a099b8b3bd41788c7b0f1)
  * Including `getStaticPaths()` (with a long explanation)
  * And how to fetch the `meetupId` *within* the `getStaticProps()` function
* Adding the `pages/api/new-meetup.js` file, which sends a 'POST' request to MongoDB using `MongoClient` (from MongoDB), and triggering such a request based on user-entered data in the `pages/new-meetup/index.js` file. And it actually worked. - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/4bb81c920ddf8ad81b8544bca3d21fd541db15a3)
* Redirecting to the homepage with `useRouter()` after successfully adding a new meetup - [Commit link](https://github.com/jro31/react-nextjs-meetup/commit/6743a8121ddf4ac94c411dfb2c526f588af4ec07)
