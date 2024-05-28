/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cohorte = "Spain-72";
  let age = 26;

  let person1 = {
    name: "Joe",
    age: 35,
    lastname: "Doe",
    sports: ["Futbol", "Running", "Atletismo"]
  };
  let person2 = {
    name: "Jane",
    age: 27,
    lastname: "Castillo",
    sports: ["Tenis", "baloncesto", "Volley"]
  };
  let person3 = {
    name: "Jimmy",
    age: 10,
    lastname: "Martinez",
    sports: ["Rugby", "Beisball", "Natación"]
  };

  let family = [person1, person2, person3];
  let personas = "";
  let tag = document.querySelector("#persons");
  family.map((item, index) => {
    personas +=
      "<li class='list-group-item'>" +
      item.name +
      " " +
      item.lastname +
      "</li>";
  });

  tag.innerHTML = personas;
  console.log(tag.innerHTML);
};
