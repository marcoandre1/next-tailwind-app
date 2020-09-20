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
