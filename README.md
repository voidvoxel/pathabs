# `pathabs`

[![Known Vulnerabilities](https://snyk.io/test/github/voidvoxel/pathabs/badge.svg)](https://snyk.io/test/github/voidvoxel/pathabs)

Resolve the absolute path from a relative or OS-specific path

## Installation

```sh
npm i pathabs
```

## Importing

#### Module

```js
import pathabs from "pathabs";
```

#### CommonJS

```js
const pathabs = require("pathabs");
```

## Usage

```js
let filePath = "~/Documents/GitHub";

// "~/Documents/GitHub"
console.log(filePath);

filePath = pathabs(filePath);

// "/home/{USER_NAME}/Documents/GitHub" on Linux
// "C:\Users\{USER_NAME}\Documents\GitHub" on Windows
console.log(filePath);
```
