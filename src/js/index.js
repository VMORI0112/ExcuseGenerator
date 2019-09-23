/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let name = "VICTOR";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let what = ["eat my lunch", "pissed on", "crushed my car", "broked my window"];

let when = [
  "before the class",
  "right in time",
  "when I finished the work",
  "when I was programming"
];

let i = Math.floor(Math.random() * who.length);
let j = Math.floor(Math.random() * what.length);
let k = Math.floor(Math.random() * when.length);

let text = "";

text = who[i] + " " + what[j] + " " + when[k];
//      text += who[x] + " ";

//
window.onload = function() {
  this.document.body.querySelector("#excuse").innerHTML = text;
  //   this.console.log(Math.floor(Math.random() * culprit.length));

  //   console.log("Hello victor from the console!");
  //   console.log(100 * 876);
  //   console.log("Hello" + name);
  //   console.log(this.Math.random(6) * 1);
};
