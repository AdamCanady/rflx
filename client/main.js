import {
  Template
}
from 'meteor/templating';
import {
  ReactiveVar
}
from 'meteor/reactive-var';
import $ from 'jquery';

import './main.html';

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

var startTime = 0;

var totalTime = 0;
var avgTime = 0;

function timeEvent(cell) {
  return function() {
    $(cell).html('<button>Click</button>');
    startTime = Date.now();
  }

}

function playGame() {
  // clear out board
  $('td').each(function(i, e) {
    $(e).empty();
  });

  let x = getRandomArbitrary(0, 5);
  let y = getRandomArbitrary(0, 5);

  let row = $('tr').get(y);
  let cell = row.children[x];

  setTimeout(timeEvent(cell), getRandomArbitrary(2000, 3000));
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(playGame);

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button' (event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    var elapsedTimeSeconds = (Date.now() - startTime) / 1000;
    totalTime = totalTime + elapsedTimeSeconds;
    avgTime = totalTime / instance.counter.get();

    $('.times').html($('.times').html() + " " + Number(Math.round(elapsedTimeSeconds + 'e2') + 'e-2'));
    $('.avg').html(Number(Math.round(avgTime + 'e2') + 'e-2'));

    if (instance.counter.get() >= 10) {
      $('h1').html("All done!");
    }
    else {
      playGame();
    }
  },
});
