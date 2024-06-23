class Animal {
    constructor(fname, flegCount) {
      this.name = fname
      this.legCount = flegCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }

let dog = new Animal("coco",4);
console.log(dog.describe());