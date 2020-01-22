const { exec } = require("child_process");
const { parseString } = require("xml2js");
const { promisify } = require("util");
const fs = require("fs");
const colors = require("colors/safe");
const path = require("path");

const websites = [
  "facebook",
  "twitter",
  "stackoverflow",
  "google",
  "fullstackacademy"
];

const downloadsDirectory = path.join(__dirname, "downloads");

let count = 0;

// const ping = exec("wget -O example.html www.twitter.com");

// console.log(fs.readFileSync(0, "utf-8"));

// if downloads folder does not exist then create it
if (!fs.existsSync(downloadsDirectory)) {
  fs.mkdirSync(downloadsDirectory);
}

// console.log(process.stdin);

// process.stdin.pipe(process.stdout);

// process.stdin.on("data", chunk => {
//   console.log(chunk);
// });

websites.forEach(website => {
  const siteName = website.replace(/www\.|\.com/g, "");
  exec(`wget -O ${__dirname}/downloads/${siteName}.html ${website}`);
});

// ping.stderr.on("data", data => process.stdout.write(colors.yellow(data)));

// loop thru websites
// websites.forEach(name => {
//   // download webpage
//   const wget = exec(`wget -O ./downloads/${name}.xml www.${name}.com/sitemap.xml`);

//   wget.on("close", () => {
//     count++;

//     // when final website is finished downloading
//     // if (websites.length === count) {
//     //   console.log("last process closed");
//     //   exec("zip -r ./downloads/websites.zip ./downloads");
//     // }
//   });
// });

// const sitemap = exec(`wget -O ./downloads/sitemap.xml www.fullstackacademy.com/sitemap.xml`);

// // on wget finish
// sitemap.on("close", () => {
//   // read downloaded xml file
//   fs.readFile(`${__dirname}/downloads/sitemap.xml`, "utf8", (err, xml) => {
//     if (err) console.error("error: ", err);

//     // parse xml into obj
//     parseString(xml, (err, result) => {
//       console.log(result.urlset.url.length);
//     });
//   });
// });
