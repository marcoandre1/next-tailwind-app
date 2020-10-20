# next-tailwind-app

## Setting up the project

```console
npm init -y
npm install react react-dom next --save
```

- Update `package.json`:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

- **Next.js** has **file-based routing**, meaning that any component in the pages directory gets a route.

- Create `pages/index.js`:

```js
function Page() {
  return (
    <div>
      <h1>Hello From Pluralsight</h1>
    </div>
  );
}
export default Page;
```

- Start the application:

```console
npm run dev
```

## Splitting up the project

- `Next.js` looks for static files in the `public` folder.
- For example, we could have an image at `public/images/header.png` and it would be served at `http://localhost:3000/images/header.png`.
- Add the images folder and copy/paste images.
- Create the `pages/speakers.js` file:

```js
function Page() {
  return (
    <div>
      <img src="images/header.png" />
      <img src="images/menu.gif" />
      <img src="images/searchbar.gif" />
      <img src="images/speakers.png" />
      <img src="images/footer.png" />
    </div>
  );
}
export default Page;
```

- Run `npm run dev` and go to `http://localhost:3000/speakers`
- To split the components, we need to create a `src/components` folder.
- For example, create the `src/components/Header/Header.js` file:

```js
import React from "react";

const Header = () => <img src="images/header.png" />;

export default Header;
```

- To the same for the other components.
- Update `pages/speakers.js`:

```js
import Menu from "../src/components/Menu/Menu";
import Header from "../src/components/Header/Header";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Speakers from "../src/components/Speakers/Speakers";
import Footer from "../src/components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerSearchBar />
      <Speakers />
      <Footer />
    </div>
  );
}
```

## Render from array

- Each child component has its own component folder.
- We can divide the `Speakers` component into an array of 3 images.
- Update `components/Speakers/Speakers.js`:

```js
import React from "react";
const Speakers = () => {
  const speakers = [
    {
      imageSrc: "speaker-component-1124",
      name: "Douglas Crockford",
    },
    {
      imageSrc: "speaker-component-1530",
      name: "Tamara Baker",
    },
    {
      imageSrc: "speaker-component-10803",
      name: "Eugene Chuvyrov",
    },
  ];
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
        );
      })}
    </div>
  );
};
export default Speakers;
```

## Components abstraction

### HOC - Higher Order Component

- An HOC component is a function that takes a component and returns a new component.

> `const EnhancedComponent = higherOrderComponent(WrappedComponent);`

- Update `Speakers/Speaker.js` to add a `Speakers/withData.js` **HOC**:

```js
import React from "react";
import withData from "./withData";

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>
        );
      })}
    </div>
  );
};

const maxSpeakersToShow = 2;
export default withData(maxSpeakersToShow)(Speakers);
```

- Create `Speakers/withData.js`:

```js
const withData = (maxSpeakersToShow) => (Component) => {
  const speakers = [
    { imageSrc: "speaker-component-1124", name: "Douglas Crockford" },
    { imageSrc: "speaker-component-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-component-10803", name: "Eugene Chuvyrov" },
  ];
  return () => {
    const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
    return <Component speakers={limitSpeakers}></Component>;
  };
};

export default withData;
```

### RP - Render Prop

- A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

### React Context

- The React Context API is designed to share data that can be considered global to all component descendants in component tree.

## Tailwind CSS vs Bootstrap

### CSS Frameworks

| Pre-built themes | Low level of primitive based |
| ---------------- | ---------------------------- |
| Bootstrap        | Tailwind CSS                 |
| Foundation       | Tachyons                     |
| Bulma            |
| Materialize CSS  |

### Bootstrap

```html
<button class="btn btn-primary">Bootstrap Button</button>
```

| Pros                               | Cons                                  |
| ---------------------------------- | ------------------------------------- |
| Start theming your app immediately | Bootstrap may not meet all your needs |
| No CSS work needed                 | You must extend Bootstrap             |
| Consistent look and feel           | CSS or SASS expertise required        |

### Tailwind

```html
<button
  class="bg-blue-400 hover:bg-blue-600 text-white font-bold px-2 px-4 rounded"
>
  Tailwind CSS Button
</button>
```

| Pros                                                   | Cons                                              |
| ------------------------------------------------------ | ------------------------------------------------- |
| The look you want with responsiveness on all platforms | Upfront investment required at the start          |
| Customizations are straightforward                     | You build your styles and classes from primitives |

> More control using Tailwind CSS  
> Easy to customize

## Tailwind setup

- To install **Tailwind**, you can use the [official documentation](https://tailwindcss.com/docs/installation). You can also take a loot at the [official GitHub examples](https://github.com/tailwindlabs/tailwindcss-setup-examples)
- For **Next.js**, here is the [official example](https://github.com/tailwindlabs/tailwindcss-setup-examples/tree/master/examples/nextjs)

### Custom setup

- Since Tailwind is purely about using predefined classes nothing has to change in our built process that affects our production build. That is, in production, our app simply needs to reference or import the Tailwind CSS created file. However, it's likely you will want to make customizations to Tailwind. To do this you want to include new devDependencies in your `package.json` file.

```console
npm install @fullhuman/postcss-purgecss postcss-preset-env tailwindcss --save-dev
```

- Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./src/**/*.{js,jsx,ts,tsx}",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ].filter(Boolean),
};
```

Next, create a CSS file for your Tailwind styles. We've used `styles/index.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Finally, import your CSS in your `_app.js` component to make them available globally:

```js
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

- Prompt `npm install` to ensure everything is updated.
- Verify that tailwind is installed correctly by adding a `tailwind.js` page with an [example template](https://tailwindcss.com/components/cards#stacked)
- Run `npm run dev` and navigate to `http://localhost:3000/tailwind`

## Add custom CSS with Tailwind

- Add a `button.cs` file inside the `styles` folder. Instead of adding CSS attributes, we use the tailwind `@apply` directive and follow that by the classes we want to combine into a new CSS class name. In our case this new CSS class name is `btn-blue`

```css
.btn-blue {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```

- Finally, add the `@import './button.css';` directive to the `index.css` file. You can now use the new button as follow:

```html
<button className="btn-blue">Subscribe</button>
```

## Style refactoring with Tailwind CSS

### Common Layout Page

| Different pages on site | Common components |
| ----------------------- | ----------------- |
| Home                    | Header            |
| Speakers                | Menu              |
| Sessions                | Footer            |
| Schedules               |                   |

- Add a common `src/components/Layout/Layout.js` component:

```js
import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <div className="mx-4 my-3">
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
);

export default Layout;
```

- Next, update `pages/speakers.js` and `pages/index.js` to include the `Layout`:

```js
import Speakers from "../src/components/Speakers/Speakers";
import Layout from "../src/components/Layout/Layout";

export default function Page() {
  return (
    <Layout>
      <Speakers />
    </Layout>
  );
}
```

- Update `Header/Header.js`, `Menu/Menu.js` and `Footer/Footer.js` to include **Tailwind CSS**
- Update `Speakers/Speakers.js` to display more content and the filter bar all styled with **Tailwind CSS**

## Building a React Web App and Refactoring into Components

### Simplifying the Speakers Component

- Refactor the `Speakers` component into multiple smaller components: `SpeakerSearchBar` and `Speaker`.
- Simply the `Speaker` component by adding `SpeakerFavoriteButton` and `SpeakerImage` components.
- To add lazy loading, we need to add the `SpeakerImage` component. There could be over 100 images to load. We only want to render the image that is shown in the browser. To do this, we add the following package:

```console
npm install react-simple-img --save
```

### Using the React Hook useState to Implement Speaker Search

### Updating the Favorite Speaker Status and Move Speakers Data into useState

### Transition from Array to REST Service for Speakers data

### Showing Data Loading Status and Error Codes when Loading REST data

### Using a Reducer to Consolidate and Simplify Our State Management

### Extracting and Refactoring Reducer Functionality
