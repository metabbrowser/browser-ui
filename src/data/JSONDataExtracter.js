// extract all the values from JSON files. Local JSON mein values store honge
// Firebase m bhi JSON m values honge
// toh dono m history json ko compare karke jismein kam values hain us directing m data flow karke sync kar sakte hain EX: alag device m kuch websites visit kiya then desktop khola.
// IMP: This data should be encrypted and only be opened through the Metab client

let metabConfiguration = require("./metabConfiguration.json");
let metabSettings = require("./metabSettings.json");
let downloads = require("./downloads.json");
let extensions = require("./extensions.json");
let history = require("./history.json");
let openTabs = require("./openTabs.json");
let workspaces = require("./workspaces.json");

console.log(
  metabConfiguration,
  metabSettings,
  downloads,
  extensions,
  history,
  openTabs,
  workspaces
);

// These logic will be in electron side since react app cannot make json files locally.
// Thus it can send an evemt and data and file to change.

const fs = require("fs");

// Read users.json file
fs.readFile("users.json", function (err, data) {
  // Check for errors
  if (err) throw err;

  // Converting to JSON
  const users = JSON.parse(data);

  console.log(users); // Print users
});

// OR

// STEP 1: Reading JSON file
const users = require("./users");

// Defining new user
let user = {
  name: "New User",
  age: 30,
  language: ["PHP", "Go", "JavaScript"],
};

// STEP 2: Adding new data to users object
users.push(user);

// STEP 3: Writing to a file
fs.writeFile("users.json", JSON.stringify(users), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log("Done writing"); // Success
});
