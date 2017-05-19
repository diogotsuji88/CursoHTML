// Declaração
var a;

// a = "<ul>";
// a += "   <li>red</li>"
// a += "   <li>blue</li>"
// a += "   <li>green</li>"
// a += "   <li>silver</li>"
// a += "   <li>teal</li>"
// a += "</ul>"

// document.body.innerHTML = a;

// ------------------------------------------------------------------

// a = document.getElementById("Title").innerHTML;
// a += " Diogo";
// document.getElementById("Title").innerHTML = a;

// ------------------------------------------------------------------

// a = document.getElementsByTagName('li');
// for (var i=0; i< a.length; i++)
// {
// 	a[i].innerHTML = "Novo Texto";
// }


// Aguardam carregar a pagina
// window.onload = function(){

// }

// $(document).ready( function(){

// })

// $('li').text('Novo Texto');

// $('li').each(function(index, val){
// 	   $(val).text(index + 1 + ' ' + $(val).text);
// })


// $('button').click(function (){
// 	$('ul').append('<li>'+ $('.name').val() + '</li>');

// 	$('.name').val("");
// })

// $('form').submit(function (){
// 	   var value = $(this).find('input').val();
// 	   $('ul').append('<li>' + value + '</li>');
// 	   $('input').val('');
// 	   return false;
// })

$('form').submit(function (){
	   var value = "Conheça o dono da JBS, que fez gravações 12/43/1243  Dono da JBS disse em abril";
	   var regex = /[0-9]/g;

	   //letra "g" busca no valor inteiro
       // console.log(value.replace(/[1-9]/g,"0"));

       // console.log(value.match(/[9]/g));

       console.log(value.search(/\d{2}\/\d{2}\/\d{4}/g));

	   // $('ul').append('<li>' + value + '</li>');
	   // $('input').val('');
	   return false;
})