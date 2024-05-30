/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generador();
};

let generador = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoindex = math.floor(math.random() * who.length);
  let actionindex = math.floor(math.random() * action.length);
  let whatindex = math.floor(math.random() * what.length);
  let whenindex = math.floor(math.random() * when.length);

  return (
    who[whoindex] +
    " " +
    action[actionindex] +
    " " +
    what[whatindex] +
    " " +
    when[whenindex]
  );
};
