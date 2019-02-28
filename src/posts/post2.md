---
slug: '/creawithtypescript'
date: '2019-01-12'
title: ' Can create-react-app be used with TypeScript?'
---

Yes, you can do it like this:

```js
npx create-react-app my-app --scripts-version=react-scripts-ts

npm install @types/react @types/react-dom typescript
```

AND

To add TypeScript to a Create React App project, first install it:

```js
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!

Type errors will show up in the same console as the build one.

```

```
