// Creating foo
function foo(param1, param2, param3) {
  alert(param1);
  alert(param2);
  alert(param3); // undefined if less than 3 parameters are passed

  // Send 'I am done' to the caller
  return 'I am done';
}

function main() {
  // Calling foo
  const s1 = foo('a', 'b', 'c');
  alert(s1);

  // Calling foo with too few parameters
  const s2 = foo('a', 'b');
  alert(s2);

  // Calling foo with too many parameters
  const s3 = foo('a', 'b', 'c', 'd');
  alert('It did not crash !!!');
}
