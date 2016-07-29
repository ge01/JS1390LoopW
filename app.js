/****************************************************
*               JavaScript While Loop               *
****************************************************/
function whileFunction() {
  var text = "";
  var i = 0;
  while (i < 10) {
    text += "<br>The number is " + i;
    i++;
   }
   document.getElementById("while-func").innerHTML = text;
}

/****************************************************
*                 The Do/While Loop                 *
****************************************************/
function doFunction() {
  var text = "";
  var i = 0;
  do {
    text += "<br>The number is " + i;
    i++;
  }
  while (i < 10)
  document.getElementById("do-while").innerHTML = text;
}
