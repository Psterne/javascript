// The text first needs to be SPLIT into its components. The order of components then needs to be REVERSED.
// The components can thenbe JOINED again in their new order.

function reverse(txt) {
  return txt.split("").reverse().join("");
};
