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
        <img src="images/header.png"/>
        <img src="images/menu.gif"/>
        <img src="images/searchbar.gif"/>
        <img src="images/speakers.png"/>
        <img src="images/footer.png"/>
      </div>
    );
  }
export default Page;
```

- Run `npm run dev` and go to `http://localhost:3000/speakers`
- To split the components, we need to create a `src/components` folder.
- For example, create the `src/components/Header/Header.js` file:

```js
import React from 'react'

const Header = () => <img src='images/header.png'/>;

export default Header;
```

- To the same for the other components.
- Update `pages/speakers.js`:

```js
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';

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
import React from 'react';
const Speakers = () => {
  const speakers = [
    {
      imageSrc: 'speaker-component-1124',
      name: 'Douglas Crockford',
    },
    {
      imageSrc: 'speaker-component-1530',
      name: 'Tamara Baker',
    },
    {
      imageSrc: 'speaker-component-10803',
      name: 'Eugene Chuvyrov',
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
import React from 'react';
import withData from './withData';

const Speakers = ({speakers}) => {
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
    { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford' },
    { imageSrc: 'speaker-component-1530', name: 'Tamara Baker' },
    { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov' },
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

Pre-built themes | Low level of primitive based
------------ | -------------
Bootstrap | Tailwind CSS
Foundation | Tachyons
Bulma |
Materialize CSS |

### Bootstrap

```html
<button class="btn btn-primary">Bootstrap Button</button>
```

Pros | Cons
------------ | -------------
Start theming your app immediately | Bootstrap may not meet all your needs
No CSS work needed | You must extend Bootstrap
Consistent look and feel | CSS or SASS expertise required

### Tailwind

```html
<button class="bg-blue-400 hover:bg-blue-600 text-white font-bold px-2 px-4 rounded">Tailwind CSS Button</button>
```

Pros | Cons
------------ | -------------
The look you want with responsiveness on all platforms | Upfront investment required at the start
Customizations are straightforward | You build your styles and classes from primitives

> More control using Tailwind CSS
> Easy to customize

## Tailwind setup
