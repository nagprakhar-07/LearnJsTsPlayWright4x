// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age = 26;

let is_prakhar_enjoy = ( age > 18) ? (age > 25 ? "Goa & Drink" : "No Drink,ONly Goa") : "No Goa";
console.log(`Prakhar can Enjoy ${is_prakhar_enjoy}`);