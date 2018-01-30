# HTTP-Get requests

HTTP-requests allow us to send/request data from servers.
The GET request is typically used to request data from servers.

### Usage

There are several ways to perform these requests.
The two most common ways are through AJAX-requests or by using JQuery.

AJAX (XMLHttpRequest)
```javascript
const http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200)
    document.getElementsByTagName('body')[0].innerHTML = http.responseText;
};

http.open('GET', 'http://localhost:8080/shallow', true);
http.send(null);
```

JQuery
```javascript
$.get(
  'http://localhost:8080/shallow',
  function(data, status){
    if (status === 'success') {
      document.getElementsByTagName('body')[0].innerHTML = data;
    }
  }
);
```
