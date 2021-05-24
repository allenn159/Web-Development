// Prototypes - template objects.

// This demonstrates how to add your own methods to prototypes. When referencing string, array, etc they need to be capitalized.

String.prototype.yell = function () {
  return ` OMG!!! ${this.toUpperCase()}!!!! AGHGHGHG`;
};

// This replaces the pop function.

Array.prototype.pop = function () {
  return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF";
};

// The idea comes down to having a single object that contains common properties and methods
// that other copies, other objects of arrays or strings look up to to find their common properties

// __proto___ is the reference.
