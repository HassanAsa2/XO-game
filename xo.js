var btnend=document.getElementById("btnend");
    var HT=document.getElementById("HT");
    var stopd=document.getElementById("stop")
    var Hturn=true;
   function clicks(id){
    if(document.getElementById(id).innerHTML!="O" && document.getElementById(id).innerHTML!="X")
    {
       if(Hturn==true)
        {
        document.getElementById(id).innerHTML='X';
        HT.innerHTML="its O turn";
        }
        else{
        document.getElementById(id).innerHTML='O';
        HT.innerHTML="its X turn";
        }
          Hturn=!Hturn;
        if(document.getElementById("1").innerHTML=="X"&&document.getElementById("2").innerHTML=="X"&&document.getElementById("3").innerHTML=="X"
          || document.getElementById("1").innerHTML=="X"&&document.getElementById("5").innerHTML=="X"&&document.getElementById("9").innerHTML=="X"
          || document.getElementById("1").innerHTML=="X"&&document.getElementById("4").innerHTML=="X"&&document.getElementById("7").innerHTML=="X"
          || document.getElementById("3").innerHTML=="X"&&document.getElementById("6").innerHTML=="X"&&document.getElementById("9").innerHTML=="X"
          || document.getElementById("3").innerHTML=="X"&&document.getElementById("5").innerHTML=="X"&&document.getElementById("7").innerHTML=="X"
          || document.getElementById("4").innerHTML=="X"&&document.getElementById("5").innerHTML=="X"&&document.getElementById("6").innerHTML=="X"
          || document.getElementById("7").innerHTML=="X"&&document.getElementById("8").innerHTML=="X"&&document.getElementById("9").innerHTML=="X"
          || document.getElementById("2").innerHTML=="X"&&document.getElementById("5").innerHTML=="X"&&document.getElementById("8").innerHTML=="X")
            {
            HT.innerHTML="X is Win"; 
            stopd.style.display="block"
            }
        if(document.getElementById("1").innerHTML=="O"&&document.getElementById("2").innerHTML=="O"&&document.getElementById("3").innerHTML=="O"
          || document.getElementById("1").innerHTML=="O"&&document.getElementById("5").innerHTML=="O"&&document.getElementById("9").innerHTML=="O"
          || document.getElementById("1").innerHTML=="O"&&document.getElementById("4").innerHTML=="O"&&document.getElementById("7").innerHTML=="O"
          || document.getElementById("3").innerHTML=="O"&&document.getElementById("6").innerHTML=="O"&&document.getElementById("9").innerHTML=="O"
          || document.getElementById("3").innerHTML=="O"&&document.getElementById("5").innerHTML=="O"&&document.getElementById("7").innerHTML=="O"
          || document.getElementById("4").innerHTML=="O"&&document.getElementById("5").innerHTML=="O"&&document.getElementById("6").innerHTML=="O"
          || document.getElementById("7").innerHTML=="O"&&document.getElementById("8").innerHTML=="O"&&document.getElementById("9").innerHTML=="O"
          || document.getElementById("2").innerHTML=="O"&&document.getElementById("5").innerHTML=="O"&&document.getElementById("8").innerHTML=="O")
            {
             HT.innerHTML="O is Win";
             stopd.style.display="block"
            }
    }
btnend.onclick= function R(){
    window.location.reload();
 }
 }