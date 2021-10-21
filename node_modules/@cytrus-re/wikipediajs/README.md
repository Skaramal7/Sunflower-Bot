# cytrus-re/wikipediajs

[![Travis build](https://img.shields.io/travis/maximodleon/wikipediajs.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/v/@cytrus-re/wikipediajs.svg?style=flat-square)]()
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Promise-based Wikipedia API wrapper.

# Table of contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)

# Installation

Install via [npm](https://www.npmjs.com/package/@cytrus-re/wikipediajs):

```
$ npm install @cytrus-re/wikipediajs
```

...or via a CDN:

```html
<script src="https://unpkg.com/@cytrus-re/wikipediajs/dist/index.umd.min.js" />
```

# Features

- Search Wikipedia articles in any language
- Get a random article
- Get feed for Picture of the day, featured article or 'on this day' articles

# Usage

- Import module:

  ```js
  import wiki from "@cytrus-re/wikipediajs";
  ```

  ...or require:

  ```js
  const wiki = require("@cytrus-re/wikipediajs");
  ```

- Search for an article:

  ```js
  wiki
    .search("savanna hawk")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  ```

- Search for an article in a different language:

  ```js
  wiki
    .search("Veulta a san juan", "es")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  ```
