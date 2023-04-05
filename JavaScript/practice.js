// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fait", "Audi"];
// let carData = " ";
// for (let index = 0; index < cars.length; index++) {
//   carData = carData + cars[index] + "</br>";
// }
// document.getElementById("demo").innerHTML = carData;
// let numbers = " ";
// for (let index = 0; index < 10; index++) {
//   numbers += index + "<br> ";
// }
// document.getElementById("demo1").innerHTML = numbers;
// let index = 2;
// let num = " ";
// for (; index < 20; index++) {
//   num += index + "<br>";
// }
// document.getElementById("demo3").innerHTML = num;
// let a1 = ["aa", "bb", "cc"];
// let b1 = "";
// for (let x of a1) {
//   b1 = b1 + x + "<br>";
// }
// document.getElementById("demos").innerHTML = b1;
// let x = [1, 2, 3, 4];
// let n1 = "";
// x.forEach(myFunction);
// function myFunction(value) {
//   n1 += value + "</br>";
// }
// document.getElementById("demo4").innerHTML = n1;
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// let p = " ";
// for (const key in person) {
//   p = p + person[key] + "<br>";
//   console.log(p);
// }
// document.getElementById("demo5").innerHTML = p;
// const car1 = { type: "Fiat", model: "500", color: "white" };
// let carData1 = " ";
// // debugger;
// for (const key in car1) {
//   carData1 += car1[key] + "</br>";
//   console.log(carData1);
//   // console.log(key);
// }
// document.getElementById("demo6").innerHTML = carData1;
// const carType = ["Saab", "Volvo", "BMW"];
// // debugger;
// let carTypeData = "";
// for (const key of carType) {
//   carTypeData = carTypeData + key + "<br>";
//   // console.log(carType[key]);
//   console.log(key);
// }
// document.getElementById("demo8").innerHTML = carTypeData;
// let fact=1;

// function factorial(num){
//   if(num<0){
//     console.log("Cannot perform operation for :" + num);
//   }
//   else if(num===0){
//     console.log("Result: 0");
//   }
//   else{
//         var fact=1;
//         for(var i=1;i<=num;i++){
//           fact= fact*i;
//         }
//   }
//   return fact;
//   }
//   console.log("Result: "+factorial(3));
//   document.getElementById("demo10").innerHTML=factorial(5);
//   let answer1 = "It's alright";
//   let answer2 = 'He is called "Johnny"';
//   let answer3 = 'He is called "Johnny"'; 
//   console.log(answer1);
//   console.log(answer2);
//   console.log(answer3);
//   document.getElementById("demo11").innerHTML=answer1;
//   document.getElementById("demo12").innerHTML=answer2;
//   document.getElementById("demo13").innerHTML=answer3;
//   string1="Hello Good Morning";
//   let str1 = string1.length;
//   console.log(str1);
//   document.getElementById("demo14").innerHTML=str1;
//   let text="It\'s Ok "
//   document.getElementById("demo15").innerHTML=text;
//   let text1="aqdsafdsf \"xvccx\"";
//   document.getElementById("demo16").innerHTML=text1;
//   let text2="aasdsad \ sfsdfg"
//   document.getElementById("demo17").innerHTML=text2;
  let str="OmSivaNagaLakshmi";
  let abc="    Rama Sita   ";
  let xyz ="123";
  let len=str.length;
  let sli=str.slice(6,10);
  let substr=str.substring(6,10);
  let substr1=str.substring(-6,10);
  let substr2=str.substr(6,10);
  let replace = str.replace('m','*');
  let replaceAll = str.replaceAll('m','*');
  console.log(len);     //17
  console.log(sli);     //Naga
  console.log(substr);  //Naga
  console.log(substr1);//OmSivaNaga
  console.log(substr2);   //NagaLakshm
  console.log(replace);   //O*SivaNagaLakshmi
  console.log(replaceAll);    //O*SivaNagaLaksh*i
  console.log(str.toLowerCase());
  let a=abc.trim();
  let b=abc.trimStart();
  let c=abc.trimEnd();
  let y=xyz.padStart(10,"a");     
  let z=xyz.padEnd(10,"a");     
  console.log(a.length);    //9
  console.log(b.length);    //12
  console.log(c.length);    //13
  console.log(y);   //aaaaaaa123
  console.log(z);   //123aaaaaaa
  console.log(str.charAt(1));
  console.log(str.charCodeAt(5));
  console.log(str.split("a"));
  function add(a,b){    
    return a+b;
  }  
  let w=add(23,4);
  document.getElementById("demo19").innerHTML=w;
  let addition = add(2,3);
  document.getElementById("demo18").innerHTML=addition;

  let subtraction = function(a,b){  
    if(a>b)  {
      return a-b;      
    }     
    return b-a;      
  }
  let final = subtraction(12,4);
  document.getElementById("demo20").innerHTML=final;

  const mul = new Function("a1","a2", "return a1*a2"); 
  document.getElementById("demo21").innerHTML=mul(4,3); 
  
  let f = (q,r)=>{
    return q%r;
  }
  document.write(f(101,2));
  
  