<a href="https://david-dm.org/sudocode1/node-store"><img src="https://img.shields.io/david/sudocode1/node-store.svg?maxAge=3600" alt="Dependencies" /></a>

# node-store
A JavaScript package store, based on JPac from [sudocode1/ndos](https://github.com/sudocode1/ndos).

## Installation
We have multiple ways of installing node-store, and you can pick the most suited one for you below.

### Use the installer file (Web Browser + NodeJS)
We offer an installer that you can run using the NodeJS runtime that you can download [here](http://nodestore.7m.pl/installer.js). <br>
Run this using `node installer.js` and press enter when it asks you.

### Install via the console (NodeJS)
You can also install via the console using the instructions displayed below. <br> <br>

Run this command to install the packages needed:
```js
npm i node-fetch console-menu prompt-sync string-similarity fs
```
<br> <br>
Enter the NodeJS runtime using `node` and do the following:
```js
let f=require("node-fetch");f(`https://raw.githubusercontent.com/sudocode1/node-store/master/index.js`).then(d => d.text()).then(d => require("fs").writeFileSync(`index.js`, d));
```
<br><br>
You should be returned:
```js
Promise { <pending> }
```

### Download the source code
Download the source code directly from GitHub and install the NPM Packages `node-fetch`, `console-menu`, `prompt-sync` and `string-similarity`.

## How to use node-store
`store` - Access the CLI store. This will allow you to scroll through the Store using `console-menu` and will allow you to select and download packages. This is recommended over using the web store at the moment.
`unpack <package>` - Unpack a package that you have downloaded or created.
`run <package>` - Run a package you have unpacked. Please note this will require the package key, if you don't already have this, check `/private/YOURPACKAGENAME/key.txt`.
`exit` - Exit node-store.

There is also a web store in progress [here](https://nodestore.7m.pl/storehtml) and you can download packages via your browser from a list [here](https://nodestore.7m.pl/store).
