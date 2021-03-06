# node-store
A JavaScript package store, based on JPac from [sudocode1/ndos](https://github.com/sudocode1/ndos). <br>
<a href="https://david-dm.org/sudocode1/node-store"><img src="https://img.shields.io/david/sudocode1/node-store.svg?maxAge=3600" alt="Dependencies" /></a>

- [Installation](#installation)
- [How to use](#how-to-use-node-store)
- [Creating Packages](#creating-packages-for-node-store)

## Installation
We have multiple ways of installing node-store, and you can pick the most suited one for you below.

### Use the installer file (Web Browser + NodeJS)
We offer an installer that you can run using the NodeJS runtime that you can download [here](http://nodestore.7m.pl/installer.js). <br>
Run this using `node installer.js` and press enter when it asks you.

### Install via the console (NodeJS)
You can also install via the console using the instructions displayed below. <br>

Run this command to install the packages needed:

```js
npm i node-fetch console-menu prompt-sync string-similarity fs
```

<br> 
Enter the NodeJS runtime using `node` and do the following: 

```js
let f=require("node-fetch");f(`https://raw.githubusercontent.com/sudocode1/node-store/master/index.js`).then(d => d.text()).then(d => require("fs").writeFileSync(`index.js`, d));
```
<br>
You should be returned: 

```js
Promise { <pending> }
```

### Download the source code
Download the source code directly from GitHub and install the NPM Packages `node-fetch`, `console-menu`, `prompt-sync` and `string-similarity`.

## How to use node-store
`store` - Access the CLI store. This will allow you to scroll through the Store using `console-menu` and will allow you to select and download packages. This is recommended over using the web store at the moment. <br>
`unpack <package>` - Unpack a package that you have downloaded or created. <Br>
`run <package>` - Run a package you have unpacked. Please note this will require the package key, if you don't already have this, check `/private/YOURPACKAGENAME/key.txt`. <br>
`exit` - Exit node-store. <br> <br>

There is also a web store in progress [here](https://nodestore.7m.pl/storehtml) and you can download packages via your browser from a list [here](https://nodestore.7m.pl/store).

## Creating packages for node-store
Code your package using JavaScript and **do not use async anywhere, it is not necessary**, you can use await but async is not needed. <br>
Use [1s3k3b](https://github.com/1s3k3b)'s pakcreator package to create a `.PAK` file. <br>
This will ask for a name for your package, the NPM packages needed, the file your JS is in, the key you want to set and the folders required. <br>
You can submit it more the main CLI & Web store by DMing `roux#0493` or `1s3k3b#0001` on Discord with your `.PAK` file. There is not an 100% chance it will be approved. <br>
