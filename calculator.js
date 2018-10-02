//while (choice !=0) {
    
// get the user inputs
    var value1 = prompt('enter first value');
    var value2 = prompt('enter the second value');
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
     var total;
  //  alert(var sum = value1 + choice + value2) ;

/*
  var x,y,z,oper;
  x=prompt("enter first value");
  y=prompt("enter second value");
  oper=prompt("Type an operator");
*/
  if(choice=="+"){
    total= (+value1)+(+value2);
  }
  else if(choice=="/"){
    total=(+value1)/(+value2);
  }
  else if(choice=="*"){
    total=(+value1)*(+value2);
  }
  else if(choice=="-"){
    total=(+value1)-(+value2);
  }
  else {
    total=(+value1)+(+value2);
  }
/*
  else if(choice=!null){
    z="Error"
  }
  else if(value1=!null){
    z="Error"
  }
  else if(value2=!null){
    z="Error"
  }
*/
  prompt(total);
//}
