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
  $("#egg").show();
  setTimeout(function() {
    $("#egg").hide();
    $("#normal").show();
  }, 5000);
  showStats(tamago);

  setInterval(function () {
    tamago.timetick();
    showStats(tamago);
    //if it's sick, has pooped, or died, call to show that here
  }, 5000);

  $("#feed").click(function () {
    //play a feeding gif
    tamago.feed();
    showStats(tamago);
  });

  $("#play").click(function () {
    //have it make a happy face
    tamago.play();
    showStats(tamago);
  });

  $("#sleep").click(function () {
    //play a sleep gif for a bit
    tamago.sleep();
    showStats(tamago);
  });

  $("#clean").click(function () {
    //take away the poop
    tamago.clean();
    showStats(tamago);
  });
});
