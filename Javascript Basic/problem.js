//inch to feet

var inch=180;
var foot=inch/12;
console.log(foot);

function inchtofeet(inch){
    var foot=inch/12;
    return foot;
}

var result = inchtofeet(56);
console.log(result);


// check if a year leaf year or not 

function checkleafyear(year){
    if((year%4==0)|| (year%100)!=0){
console.log("This is leaf year");
    }
    else{
        console.log(" this is not a leaf yesr");
    }


}
//finding out the factorial 
function findfact(num){
    var fact=1;
    for(var i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(findfact(5));

//fact using recursion
function factwithrecur(num){
    if(num<0)
    {
        return -1;
    }
    else if( num==1)
    {
        return 1;
    }
    else{
        return num*(factwithrecur(num-1));
    }
}
console.log(factwithrecur(5))

//fibonacci series
var result=[];
 var fibo=[0,1];
function findfib(num){
   
    for(var i=2;i<=num;i++)
    {
        fibo[i]=fibo[i-2]+fibo[i-1];
    }
    return fibo;
}
findfib(5)
console.log(fibo);
// recursive fibo 
function recurfibo(n){
  if(n==0)
  {
    return 0;
  }
  else if(n==1)
  {
    return [0,1];
  }
  else{
    var fibo=recurfibo(n-1);
    var NextElement=fibo[n-1]+fibo[n-2]
    fibo.push(NextElement);
    return fibo;
  }
}
console.log(recurfibo(6));

//prime number 
function checkPrime (num){
    if(num===1)
    {
        return false;
    }
    else if(num==2){
        return true ;
    }
    else{
        for(var x=2;x<num;x++){
            if(num%x==0){
                return false;
            }
        }
        return true ;
    }

}
console.log(checkPrime(14))

//swapping two number
var a=10;
var b=20;

console.log("Befpre swap "+ a +" "+ b);


var temp=a;
a=b;
b=temp;
console.log("After swap "+ a+" " + b);
console.log("After swap "+ a+" " + b);

//another way of swapping 

var x=30;
var y=40;

x=x+y;
y=x-y;
x=x-y;
console.log("After swap "+ x+" " + y);

// word count 

var word="I am full stack developer ";

var c=0;
for(var i=0;i<word.length;i++)
{
    var char =word[i];
 
        if(char==" " && word[i-1]!=0){
          
            c++;
            

        }
    
}

console.log(c);


