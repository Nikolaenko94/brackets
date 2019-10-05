module.exports = function check(str, bracketsConfig) {  

 let array = [];
 for(let i=0;i<str.length;i++){
     array.push(str[i]);
 }
 for(let i=0;i<array.length;i++){
     if(array[i]==="("&& array[i+1]===")"){
            array.splice(i+1,1);
            array.splice(i,1);
            i=i-2;
     }
     if(array[i]==="["&& array[i+1]==="]"){
        array.splice(i+1,1);
            array.splice(i,1);
            i=i-2;
     }
     if(array[i]==="{"&& array[i+1]==="}"){
        array.splice(i+1,1);
            array.splice(i,1);
            i=i-2;
     }
     if(array[i]==="|"&& array[i+1]==="|"){
        array.splice(i+1,1);
            array.splice(i,1);
            i=i-2;
    }
    if(array[i]==="1"&& array[i+1]==="2"){
        array.splice(i+1,1);
        array.splice(i,1);
        i=i-2;
 }
 if(array[i]==="3"&& array[i+1]==="4"){
    array.splice(i+1,1);
    array.splice(i,1);
    i=i-2;
}
if(array[i]==="5"&& array[i+1]==="6"){
    array.splice(i+1,1);
    array.splice(i,1);
    i=i-2;
}
if(array[i]==="7"&& array[i+1]==="7"){
    array.splice(i+1,1);
    array.splice(i,1);
    i=i-2;
}
if(array[i]==="8"&& array[i+1]==="8"){
    array.splice(i+1,1);
    array.splice(i,1);
    i=i-2;
}
   
 }



 if(array.length===0){
     return true;
 }
   return false;

}




