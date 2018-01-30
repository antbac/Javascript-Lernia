# HTTP-Post requests

HTTP-requests allow us to send/request data from servers.
The POST request is typically used to send data to servers.

### Usage

There are several ways to perform these requests.
The two most common ways are through AJAX-requests or by using JQuery.

AJAX (XMLHttpRequest)
```javascript
const http = new XMLHttpRequest();
http.open('POST', 'http://localhost:8080/comment', true);

http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
const parameters = 'message=my new answer&deep=true';

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    const res = JSON.parse(http.responseText);
    document.getElementsByTagName('body')[0].innerHTML = res[res.length - 1].message;
  }
};

http.send(parameters);
```

JQuery
```javascript
$.post('http://localhost:8080/comment',
{
  message: 'my new answer',
  deep: 'true'
},
function (data, status) {
  if (status === 'success') {
    document.getElementsByTagName('body')[0].innerHTML = data[data.length - 1].message;
  }
});
```
