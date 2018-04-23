class Tamago {
  constructor () {
    this.hunger = 30;
    this.happiness = 100;
    this.energy = 100;
    this.bathroom = 30;

  }

  timetick () {
    this.hunger += 5;
    this.happiness -= 5;
    this.energy -= 2;
    this.bathroom += 2;
  }

  feed () {
    this.hunger -= 30;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  // play () {
  //
  // }
  //
  // sleep () {
  //
  // }
  //
  // clean () {
  //
  // }

}

export { Tamago };
