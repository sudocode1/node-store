const menu = require("console-menu");
const prompt = require("prompt-sync")();
const fetch = require("node-fetch");
const fs=require("fs"); 
const { findBestMatch } = require("string-similarity");
const { execSync } = require("child_process");

for (const dir of ['./private', './packaged']) try { fs.mkdirSync(dir) } catch (e) {};
/*try {fs.readdirSync(`./private`)} catch(e) {fs.mkdirSync(`private`)};
try {fs.readdirSync(`./packaged`)} catch(e) {fs.mkdirSync(`packaged`)};*/
let dma = Buffer.from(`aHR0cDovL25vZGVzdG9yZS43bS5wbC9zdG9yZS8=`, `base64`).toString();

process.on('unhandledRejection', (reason, promise) => {
    console.log(`error`);
});

async function pr() {
    let c = prompt(`> `);
    let cmd = c.split(" ")[0];
    let args = c.split(" ").slice(1);
    
    switch(cmd) {
        case "store":
            const all = await fetch(dma)
                .then(d => d.text())
                .then(d => d.match(/(?<=<a href=")[^\."]+(?=\.[^\."]+">)/g));
            //const closest = findBestMatch(spl[1] || '', all).bestMatch;
            const name = await menu(
                    all.map((x, i) => ({ hotkey: '>', title: x, i })),
                    { header: 'Store', border: true, pageSize: 5 },
                ).then(d => d && d.title);
            if (!name) console.log('No package selected.');
            else {
                const code = await fetch(dma + name + `.pak`).then(d => d.text());
                //const deps = await fetch(`http://ndosrepos.7m.pl/packages/${name}.txt`).then(d => d.json());
                fs.writeFileSync(`./packaged/${name}.pak`, code);
                console.log(`Successfully installed ${name}.`);
            }
        break;

        case "exit": 
            process.exit(); 
        break;

        case "unpack":
            if (!args[0]) break;
            try {fs.readFileSync(`./packaged/${args[0]}.pak`)} catch(e) {break;};
            try {fs.mkdirSync(`./private/${args[0]}`)} catch(e) {break;};

            console.log(`Unpacking ${args[0]}`);
            let f = fs.readFileSync(`./packaged/${args[0]}.pak`, `utf-8`).split("|");

            console.log(`Installing dependencies...`);
            f[0].split(`,`).map(x => {
                execSync(`npm i ${Buffer.from(x, "base64").toString()}`);
            });

            console.log(`Copying code...`);
            fs.writeFileSync(`./private/${args[0]}/index.js`, Buffer.from(f[1], "base64"));

            console.log(`Adding verify key...`);
            fs.writeFileSync(`./private/${args[0]}/key.txt`, Buffer.from(f[2], "base64"));

            console.log(`Adding folders...`);
            f[3].split(`,`).map(x => fs.mkdirSync(`./private/${args[0]}/${Buffer.from(x, "base64").toString()}`));

        break;

        case 'run': {
            let f;
            try { f = fs.readFileSync(`./packaged/${args[0]}.pak`, 'utf8') } catch (e) { break }
            const code = Buffer.from(f.split('|')[1], 'base64').toString();
            const key = fs.readFileSync(`./private/${args[0]}/key.txt`, 'utf8');
            // todo: make it hard to change the bit which asks for the key
            const keyI = prompt('Key: ');
            if (key !== keyI) break;
            await eval(`(async () => {${code}})()`);
        }
        break;
    }

    pr();
}

pr();


/*
    menu([
        { hotkey: '1', title: 'One' },
        { hotkey: '2', title: 'Two', selected: true },
        { hotkey: '3', title: 'Three' },
        { separator: true },
        { hotkey: '?', title: 'Help' },
    ], {
        header: 'Example menu',
        border: true,
    }).then(item => {
        if (item) {
            console.log('You chose: ' + JSON.stringify(item));
        } else {
            console.log('You cancelled the menu.');
        }
    });
*/
