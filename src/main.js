import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamago } from "./tamagotchi.js";

$(document).ready(function () {
  let tamago  = new Tamago();
  $("#hunger h3").text(tamago.hunger);
  $("#happiness h3").text(tamago.happiness);
  $("#energy h3").text(tamago.energy);
  $("#bathroom h3").text(tamago.bathroom);

  setInterval(function() {
    tamago.timetick();
    $("#hunger h3").text(tamago.hunger);
    $("#happiness h3").text(tamago.happiness);
    $("#energy h3").text(tamago.energy);
    $("#bathroom h3").text(tamago.bathroom);
  }, 5000);
});
