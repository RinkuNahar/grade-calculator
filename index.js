function ComputeClick(){

   var x = document.querySelectorAll(".earned");
   var e1=parseInt(x[0].value);
   var e2=parseInt(x[1].value);
   var e3=parseInt(x[2].value);

   var y = document.querySelectorAll(".max");
   var m1=parseInt(y[0].value);
   var m2=parseInt(y[1].value);
   var m3=parseInt(y[2].value);

   var total_earned=e1+e2+e3;
  
   var total_max=m1+m2+m3;

   var percentage=(total_earned/total_max)*100;
  
  if(document.getElementById("curve").checked==true){
       if(percentage+5<100){
          percentage=percentage+5;
       }
       else{
          percentage=100;
       }
   }

   var node=document.createElement("div");

   if(percentage>=60){
       node.className="pass";
   }
   else{
       node.className="fail";
   }
   var rounded_percentage=Math.floor(percentage);
   var per =document.createTextNode(rounded_percentage);
   node.appendChild(per);
  document.getElementById("resultsarea").appendChild(node);
}

function ClearClick(){
   var x = document.querySelectorAll(".earned");
   x[0].value="";
   x[1].value="";
   x[2].value="";

   var y = document.querySelectorAll(".max");
   y[0].value="";
   y[1].value="";
   y[2].value="";

}