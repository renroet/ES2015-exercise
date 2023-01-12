const PI = 3.14;
// cannot change PI to 42 now

// var can be redeclared and is globally scoped, variables declared with var can also be hoisted; while let cannot be redeclared, is block scoped, and has no hoisting capabilities
// var can be redeclared and reassigned and is globally scoped, variables declared with var can also be hoisted; while const cannot be redeclared or reassigned, is block scoped, and has no hoisting capabilities
// let can be reassigned and declared without being defined, while const cannot be reassigned or declared without being defined.
// hoisting is when the variable declaration is read before the rest of the script is read. This means that a function can call a variable defined below it and will not throw an error, only 'undefined'. Var is the only keyword that allows a variable to be hoisted. If a variable is defined with let or const, it will be read in chronological order.