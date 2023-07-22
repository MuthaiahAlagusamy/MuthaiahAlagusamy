function calculateArea(length, width) {
  "use strict";

  // Validate the parameters
  if (typeof length !== "number" || typeof width !== "number") {
    throw new TypeError("The parameters must be numbers");
  }

  // Calculate the area
  var area = length * width;

  // Return the area
  return area;
}
