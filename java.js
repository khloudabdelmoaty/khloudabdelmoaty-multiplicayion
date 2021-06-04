var num =window.prompt("enter number");
var nn = document.getElementById("result");
// var nn = document.getElementById("result");

for(i=1;i<=10; i += 1)
{
  
     nn.innerHTML+=(num + "*" +i + "=" +(num * i ) + "<br>");
    // window.document.write(num + "*" +i + "=" +(num * i ) +"<br>");

}