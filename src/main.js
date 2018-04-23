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

function checkNormal (tamago) {
  if (tamago.pooped > 0) {
    $("#poop").show();
    return;
  }
  if (tamago.sick === true) {
    $("#sick").show();
    return;
  }
  if (tamago.alive === false) {
    $("#die").show();
    return;
  }
  $("#normal").show();
}

$(document).ready(function () {
  let tamago  = new Tamago();
  $("#egg").show();
  setTimeout(function() {
    $(".tamago-gif").hide();
    $("#normal").show();
  }, 5000);
  showStats(tamago);

  setInterval(function () {
    tamago.timetick();
    showStats(tamago);
    checkNormal(tamago);
  }, 5000);

  $("#feed").click(function () {
    $(".tamago-gif").hide();
    $("#eat").show();
    setTimeout(function() {
      $(".tamago-gif").hide();
      checkNormal(tamago);
    }, 2000);
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
