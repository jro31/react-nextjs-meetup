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
