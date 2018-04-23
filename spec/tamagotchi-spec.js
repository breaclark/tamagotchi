import { Tamago } from "./../src/tamagotchi.js";

describe ("Tamago", function () {
  let tamago;

  beforeEach (function () {
    tamago = new Tamago();
  });

  it ("should be an instance of the Tamago class", function () {
    expect(tamago).toEqual(jasmine.any(Tamago));
  });

  it ("should decrease the hunger level by 30", function () {
    tamago.feed();
    expect(tamago.hunger).toEqual(0);
  });

});
