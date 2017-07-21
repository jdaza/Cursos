url = 'https://reqres.in/api/users/2';
var ajax = new XMLHttpRequest();
ajax.open('get',url);
ajax.onload=function(data){
   console.log(data.currentTarget.response);
}
ajax.send();
console.log("Deberia ser la 2da linea");        
console.log("Deberia ser la 3da linea");

$.getJSON(url); //Es lo mismo que de la linea 2 a la 8 pero en una sola linea usando JQUERY
$.get(url, (data) => {console.log(data)});