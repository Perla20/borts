// window.onload = function() {


// var d = new Date();
//
// document.write(+d.getHours(),': '+d.getMinutes(),': '+d.getSeconds());
 var d = new Date();
 document.write('hora:'+d .getHours() ,': '+d.getMinutes(),': '+d.getSeconds(""));
      setInterval
(
  function() {

    message = document.getElementById('caracteres');
    text = message.value;
    document.getElementById('counter').innerHTML = text.length;
    if   (text.length <= 120)

        {
      document.getElementById('counter').style.color = " black";
}
  else if (text.length >= 120 && text.length  <= 130)
  {
    document.getElementById('counter').style.color="purple";
}

if(text.length >=140)
{

  document.getElementById('counter').style.color="red";
  document.getElementById('button').disabled = true;


  document.getElementById('button').style.color="red";
    // document.getElementById('counter') ;
  newtext = text.slice(140,0);
  message.value = newtext;
}
0
}
)
