function initialize() {
  httpGet('http://10.42.104.183:8080/shallow', alert);
  // httpGet('http://localhost:8080/shallow', alert); // Change to this at hand-in
}

function httpGet(url, callback) {
  const http = new XMLHttpRequest();
  http.open('GET', url, true);

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) { callback(http.responseText); }
  };

  http.send(null);
}

function httpPost(url, params, callback) {
  const http = new XMLHttpRequest();
  http.open('POST', url, true);

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function () {
    if (http.readystate == 4 && http.status == 200) { callback(http.responseText); }
  };

  http.send(params);
}
