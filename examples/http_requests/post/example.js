function main() {

  // Create request
  const http = new XMLHttpRequest();

  // Tell it what to do upon completion
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      // Contains all comments
      const res = JSON.parse(http.responseText);

      // Contains your new comment
      const lastElement = res[res.length - 1];

      // Print the comment to the screen
      document.getElementsByTagName('body')[0].innerHTML = JSON.stringify(lastElement);
    }
  }

  // Tell it where to send the request
  http.open('POST', 'http://localhost:8080/comment', true);

  // Tell the server how to read the data
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  const parameters = 'message=This comment is hard coded&deep=true';

  // Send the request
  http.send(parameters);

}
