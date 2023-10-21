// if input = 1, "y", "yes" output = continue...
// if input = 0, "n", "no" output = end...
 
/*let input;

input = 1;

if(input === 1 ){
document.write("continue...");
}else if(input === "y" ){
    document.write("continue...");
}else if(input === "yes" ){
    document.write("continue...");
}else if(input === 0 ){
    document.write("End...");
}else if(input === "n" ){
    document.write("End...");
}else if(input === "no"){
    document.write("End...");
}else{
    document.write("Wrong input");
}*/


// === comparison 

let input;

input = "no00";

switch(input){
    case 1: // if (input === 1)
        document.write("continue...");
         break;
    case "y": // if (input === "y")
        document.write("continue...");
         break;
    case "yes":
        document.write("continue...");
        break;
    case 0:
        document.write("End...");
        break;
   case "n":
        document.write("End...");
        break;  
   case "no":
        document.write("End...");
        break;  
    default :
        document.write("Wrong input");
}



