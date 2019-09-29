//symbols as identifiers but you can also use classes and or string literals.

const TYPES = {
    Dough: Symbol.for("Dough"),
    Flour: Symbol.for("Flour"),
    Salt: Symbol.for("Salt"),
    Yeast: Symbol.for("Yeast"),
    Water: Symbol.for("Water"),
}

export { TYPES };