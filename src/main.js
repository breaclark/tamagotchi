import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamago } from "./tamagotchi.js";

function showStats (tamago) {
  $("#hunger h3").text(tamago.hunger);
  $("#happiness h3").text(tamago.happiness);
  $("#energy h3").text(tamago.energy);
  $("#bathroom h3").text(tamago.bathroom);
}

$(document).ready(function () {
  let tamago  = new Tamago();
  showStats(tamago);

  setInterval(function() {
    tamago.timetick();
    showStats(tamago);
  }, 5000);
});
