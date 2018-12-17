## Usabilla Front Developer Challenge

Hi there. I'm Juliano Rafael and this is my solution the Usabilla Front End Developer Challenge. This is a weekend of non stop coding and fun. :D

Before you go into the code itself, I'd like to add some notes on choices I've made and why.

### Prettier + ESLint

Everyone got it's preferences over code styling. It's an endless discussion and in the end, it's a matter of preferences. Prettier solves this by being the annoying person who has the last word. This way, no one gets resentfull or hurt by its choices and everyone saves time by not arguing over with semis or without. Let Prettier be the guy who corrects spacing and style issues. Better yet, it abstracts away the most of configuration, so no one can sneak in that commit that disables the rule.

Prettier solves the styling, but there's more to linting than styling, and that's where eslint comes in. Long story short, prettier does styling, eslint does the rest. I choose to extend the `standard` (because I tend to favor [standardjs](https://standardjs.com)) and react/recommended and prettier config (to disable the rules that prettier already handles).

### Hooks

Since this isn't going to production and hooks are just awesome, I figure this was a really nice change to explore what's this new api is about. Personally, I think it's awesome. It makes your component code way more organized and clean. State management and side effects go into hooks, UI goes into leaf components. It naturally leads to a more readable and easily testable codebase.

### styled-system

I love CSS-in-JS. I wrote a bit about this [here](https://blog.getty.io/developing-apps-with-styled-components-e9f56cd0f4c5). But this is not a silver bullet and it certainly does not solve all the issues with CSS scalability in the world. Because Usabilla already have a clear ~~and awesome~~ styleguide, I choose to use `styled-system` (~~and stole a bit css from stylabilla~~) to create a global theme make it waaay easier to build the UI. I dare say `styled-system` makes doing a style system with React almost natural. It's awesome.

### List performance

If you tested the table, you're going to see that it's slow when it has to process all the 100 items. I memoized all the items to avoid unecessary rerenders, but that's still not good enough. Decoupling the list filtering from the user input or rating filter feedback will certainly improve the perceived performance. Another possible improvement is to debounce the filter events from the search input. Those were not pursued due to time constraints.

### Elements and Components

There two types of components created here: elements and components. I called elements components that are primitives with a bit of usefull props to build upon it. I put into components the ones that were intended for final use and UI component.

### react-testing-library

Last but not least, I choose `react-testing-library` to test my components. I have a couple of reasons for that but the major reason is that this library allows me to test my components as they are actually rendered in the browser.

> [The more your tests resemble the way your software is used, the more confidence they can give you.](https://twitter.com/kentcdodds/status/977018512689455106)

Kent does a way better job at selling this lib than I do, so check [this](https://github.com/kentcdodds/react-testing-library#this-solution) out if you want to know more about it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
