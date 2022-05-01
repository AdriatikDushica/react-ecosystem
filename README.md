# react-ecosystem [WIP]

A work in progress project that aims to provide a simple but feature complete
React stack, including conventions on how to structure directories, testing
and a tool to generate resources.

## Getting Started

### Install the package

To use react-ecosystem, you will need to install react and react-dom.

```bash
npm i react react-dom react-ecosystem
```

### Configure the dev server

To configure the dev server add the following script to your package.json:

```json
{
  "scripts": {
    "dev": "react-ecosystem dev"
  }
}
```

In order to run the dev server, you need at least an index.html file at the
same level of you package.json. The index.html is the entry point for the
application. An example of a valid index.html is provided below.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>react-ecosystem App.</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
```

As you can see, there is a script tag that points to the entry point of the
React application. The content of the script is provided below:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>Hello World!</div>
  </StrictMode>
);
```

## Run the dev server

If you have configured the dev server (script, index.html and index.tsx)
you can run it by running the following command:

```bash
npm run dev
```
