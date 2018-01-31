function main() {
  // Create a JSON object
  const myObj = {
    a: 1,
    b: 2,
    add: function () {
      return this.a + this.b;
    }
  };

  // Print it to the screen
  document.getElementById('output').innerHTML = `
  ${myObj.a}
  ${myObj.b}
  ${myObj.add}
  ${myObj.add()}
  `;

  // We can append properties as we see fit
  myObj.nested = {
    nestedA: 10,
    nestedB: 20
  };

  // JSON to String
  const s = JSON.stringify(myObj);
  // Notice how functions are removed completely upon stringification
  alert(s);

  // String to JSON
  const newObject = JSON.parse(s);
  alert(newObject.a === myObj.a); // Should print true
  alert(newObject.add === myObj.add); // Should print false, since functions aren't kept upon stringification
  alert(newObject.nested.nestedA === myObj.nested.nestedA); // Should print true
}
