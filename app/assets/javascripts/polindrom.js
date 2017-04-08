function show_table(data, result){
  var table = document.createElement("table");
  table.setAttribute("border", "1");
  var headline = document.createElement('tr');
  headline.innerHTML = "<th>Палиндром</th><th>Квадрат палиндрома</th>";
  table.appendChild(headline);
	for(var i = 0; i < data.number; i++){
		var row = document.createElement("tr");
    var element = data.array[i];
	  row.innerHTML="<td>"+ element + "</td><td>" + Math.pow(element, 2) + "</td>";
	  table.appendChild(row);
  }
  result.appendChild(table);
}

function show_error(result){
  msg = document.createElement('div')
  msg.setAttribute("id", "error");
  msg.innerHTML = "Введены некорректные данные!"
  result.appendChild(msg);
}

function show_result(data){
  var result = document.getElementById("result");
  result.innerHTML = " <hr>Число палиндромов: " + data.number;
  if (result.firstChild != null)
		result.removeChild(result.firstChild);
  if (data.number == 0)
    show_error(result);
  else
    show_table(data, result);
}

url= location.protocol + "//" + location.host + "/output.json"

function send_query(){
	var frm = document.forms.palindrome_form;
  var param_str = "?" + "n=" + frm.n.value;
	var my_JSON_object = {};
	var http_request = new XMLHttpRequest();
	http_request.open("GET", url+param_str, true);
	http_request.onreadystatechange = function () {
		var done = 4, ok = 200;
		if (http_request.readyState == done && http_request.status == ok) {
      my_JSON_object = JSON.parse(http_request.responseText);
			show_result(my_JSON_object);
		}
	};
	http_request.send(null);
	return false;
}

