// Just a basic function
function giveMeAPrompt(str) {
  alert(str);
}

function giveMeANewPrompt(str) {
  alert(str.charAt(0));
}

// This function expects a function as a parameter
// NOTICE: That callback is not a keyword, but rather coding convention
function caller(callback) {
  // Notice that callback could be any function what so ever
  callback('Hello World');
}

// Main passes giveMeAPrompt as a parameter to caller
function main() {
  caller(giveMeAPrompt);
  caller(giveMeANewPrompt);

  // Notice that we DO NOT add paranthesis after the function name
  // or else we pass the returned value from the funciton instead
  // caller(giveMeAPrompt()); // This would pass in undefined since giveMeAPrompt doesn't return anything
}
