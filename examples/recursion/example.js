function buildList(element) {
  // If we've reached the end of our recursion, return an empty list
  if (element <= 0) {
    return [];
  }

  // Get the list from the recursive call
  const incompleteList = buildList(element - 1);

  // Add the current element
  console.log('Adding element: ' + element);
  incompleteList.push(element);

  // Return the result
  return incompleteList;
}


function main() {
  const l = buildList(3);
  alert(l);

  /*
  The code is run in the following order:
  3: lines 1 - 8
  2: lines 1 - 8
  1: lines 1 - 8
  0: lines 1 - 4
  1: lines 8 - 15
  2: lines 8 - 15
  3: lines 8 - 15
  */
}
