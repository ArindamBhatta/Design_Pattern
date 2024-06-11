class Arindam {
  private static arindam: Arindam | null = null; //it's store the single object reference

  private constructor() {
    // constructor must be private to prevent instantiation
  }

  public static getArindam(): Arindam {
    if (Arindam.arindam === null) {
      Arindam.arindam = new Arindam();
    }
    return Arindam.arindam;
  }
}

// Usage
const arindamOne = Arindam.getArindam();
const arindamTwo = Arindam.getArindam();

arindamOne === arindamTwo ? console.log(true) : console.log(false);
