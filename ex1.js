//first ex//
let var1 = 15;
let var2 = 2;
if (var1>var2){
    document.write('*first ex1 answer is' + var1)
}
else{
    document.write("*first ex1 answer is" + var2)
}
//end 1 ex//

//2nd ex//
let var3 = 1;
let  var4 = -122;
let var5= 30;
 num = var3+var4+var5;
 if(num>0){
    document.write("*Second ex1 answer is +*")
 }
 else{
    document.write("*Second ex1 answer is -*")
}
//end of 2nd ex//
//3rd ex1//
let arr= [1,2,30];
if(arr[0]<arr[1]&&arr[1]<arr[2]){
    document.write(arr[0],arr[1],arr[2])
}
else if(arr[0]<arr[1]&&arr[1]>arr[2]&&arr[0]<arr[1]){
    document.write(arr[0],arr[2],arr[1])
}
else if (arr[0]>arr[1]&&arr[0]>arr[2]&&arr[1]<arr[2]){
    document.write(arr[1],arr[2],arr[0])
}
else if( arr[0]<arr[1]&&arr[0]>arr[2]&&arr[1]>arr[2]){
    document.write(arr[2],arr[0],arr[1])
}
else if(arr[1]<arr[0]&&arr[1]<arr[2]&&arr[2]>arr[0]){
    document.write(arr[1],arr[0],arr[2])
}
else{
    document.write(arr[2],arr[1],arr[0])
}
    
//end 3rd ex1//
//4th ex1//
let myarr = [600,30,2000,2400,4500]
 if( myarr[0]>myarr[1]&&myarr[0]>myarr[2]&&myarr[0]>myarr[3]&&myarr[0]>myarr[4]){
    document.write(myarr[0])

}
 else if( myarr[1]>myarr[0]&&myarr[1]>myarr[2]&&myarr[1]>myarr[3]&&myarr[1]>myarr[4]){
    document.write(myarr[1])
 }
 else   if( myarr[2]>myarr[1]&&myarr[2]>myarr[0]&&myarr[2]>myarr[3]&&myarr[2]>myarr[4]){
        document.write(myarr[2])
 }
    else    if( myarr[3]>myarr[1]&&myarr[3]>myarr[2]&&myarr[3]>myarr[0]&&myarr[3]>myarr[4]){
            document.write(myarr[3])
    }
 else{
     document.write(myarr[4])
 }     
 //end of 4th ex1// 
 //5th ex1// 
let arry = [5,11,40,30,150]
num1 =arry[0] % 2
num2 =arry[1] % 2
num3 =arry[2] % 2
num4 =arry[3] % 2
num5 =arry[4] % 2
switch(num1){
case 1:
    document.write(arry[0] + 'is odd ')
    break;
    case 0:
        document.write(arry[0] +'is even ')
}
switch(num2){
    case 1:
        document.write('**'+arry[1] + 'is odd')
        break;
        case 0:
            document.write('***  '+arry[1] +'is even')
}
switch(num3){
    case 1:
        document.write('**'+arry[2] + 'is odd')
        break;
        case 0:
            document.write('***  '+arry[2] +'is even')
}
switch(num4){
    case 1:
        document.write('**'+arry[3] + 'is odd')
        break;
        case 0:
        document.write('***  '+arry[3] +'is even')
}    
switch(num5){
    case 1:
        document.write('**'+arry[4] + 'is odd')
        break;
        case 0:
        document.write('***  '+arry[4] +'is even')
}        