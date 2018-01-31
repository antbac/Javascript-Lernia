function main() {

  // Create a request
  const http = new XMLHttpRequest();

  // Tell it what to do upon succesful completion
  http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        displayComments(JSON.parse(http.responseText)); // Function does not yet exist
      }
  }

  // Tell where tp send the request
  http.open('GET', 'http://localhost:8080/shallow', true);

  // SEND IT !!!
  http.send();
}
