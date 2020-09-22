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
