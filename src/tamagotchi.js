class Tamago {
  constructor () {
    this.hunger = 30;
    this.happiness = 100;
    this.energy = 100;
    this.bathroom = 30;
    this.pooped = 0;
    this.alive = true;
  }

  timetick () {
    this.hunger += 5;
    this.happiness -= 5;
    this.energy -= 2;
    this.bathroom += 2;
    if (this.pooped > 0) {
      this.pooped += 1;
    }
    if (this.bathroom >= 75) {
      this.poop();
    }
    if (this.hunger > 95 || this.happiness < 5 || this.energy < 5 || this.pooped >= 5) {
      this.die();
    }
  }

  poop () {
    this.pooped = 1;
    this.bathroom = 30;
  }

  die () {
    this.alive = false;
  }

  feed () {
    this.hunger -= 30;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  play () {
    this.happiness += 15;
  }

  sleep () {
    this.energy = 100;
  }

  clean () {
    this.pooped = 0;
  }

}

export { Tamago };
