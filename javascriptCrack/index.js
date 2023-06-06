// let myname="dipak zende";
// console.log(myname)
// function hello(){
//     var nme="dipak";
//     if(true){
//         var last="zende";
//         console.log(nme);
//         console.log(last);
//     }
// }
// hello();
// var is function score 
/// let and const is block scope
//if you consider the const variable you can change the value of const /// const is constance

//default parameter
// function name(a,b=5){
//     return a*b;
// }
// console.log(name(6));

// var str="   hello  ";
// console.log(str.search('e'));
// console.log(str.trimStart());
// console.log(str.trimEnd());



//Flat arrow function

// const sum=()=>{
//     let a=5;b=10;
//     let sum=a+b;
//     return `sum of the number sum=${sum}`;
// }
// console.log(sum());


///indexOf method -> returning the index of the element if not found then returning -1;



//////// Arrays in Javascript//////////

//insert,add
////push operation -> pushing the element in array to the backward and returning the new length of the array
/// unshift operation -> adding element to the front position of the array
// let arr=['dpa','raju','balu'];
// let c=arr.unshift('dipak','ajay');
// console.log(c); 
// console.log(arr);

// pop operation -> removing the last element of the array

// let arr=['dip','raju','balu'];
// let c=arr.pop();
// console.log(c); 
// console.log(arr);

// shift operation -> removing the first element of the array

// let arr=['dpa','raju','balu'];
// let c=arr.shift('dipak','ajay');
// console.log(c); 
// console.log(arr);

////// splice method -> CRUD method DELETE,ADDING------returning only delete element how many element you want to delete
// let arr=['dpa','raju','balu'];
// let c=arr.splice(1,0,'dipak');         //.splice(adding element index number,elementsdeleted value,adding value);
// console.log(c); 
// console.log(arr);


///map function in js  ->>> 

/////////difference between map and forEach is
//map is returning new array and forEach return undefine
//map is using for chaining method we can attac like reduce,sort,filter 
//in forEach we can't use chaining

// let arr=[6,4,3,7,2];

// let newarr=arr.map((currElem,index,arr)=>{
//     return `index no= ${index} and the value is ${currElem} and the array of = ${arr}`;
// }).reduce((total,value)=>total+value);
// console.log(newarr);


////Q1  solving first problem finding the sqrt of the elements
// let arr=[25,36,64,81];
// let ans=arr.map((currElem)=>{
//     return Math.sqrt(currElem);
// })
// console.log(ans);


//Q2 muliply each element by 2 and return only those elements which are greater than 10;

// let arr=[2,3,4,6,8];
// let ans=arr.map((currElem)=>{
//      return currElem * 2;
// }).filter((currElem)=>{
//     return currElem>10;
// })
// console.log(ans);


/////////reduce method is used for accumulation all the value and return single value;
// let arr=[2,3,4,6,8];
// let ans=arr.map((currElem)=>{
//      return currElem;
// }).reduce((accumulator,currElem)=>{  ------------structure of the reduce method .reduce(prev value,curr value,next value);
//     return accumulator+=currElem;
// })
// console.log(ans);////out---23


/////// index of method 
// const name="dipak is a very good boy";
// // console.log(name.indexOf('a'));
// console.log(name.indexOf('i',2));

//////search method in string--->> there we can't check to next index after that
// const Fname="dipak what are you doing";
// console.log(Fname.search('are'));

//////////slice method in js
// var str="apple,Banana,Kiwi";
// console.log(str.slice(1,4));
// console.log(str.slice(5,-3));


///////substring in js   ----->> the difference of substring and slice is in substring negative value is not allowed

// var str="apple,Banana,Kiwi";
// console.log(str.substring(1,4));
// console.log(str.substring(5,-3));


/////////replce() and replaceAll() 

// var str="dipak is very good very man";
// console.log(str.replaceAll('very','so'))

/////charAt() and charCodeAt()
// var str="dipak is very good person";
// console.log(str.charAt(3));
// console.log(str.charCodeAt(3));


//////////////we can covert sting in array using split method and returning array
// var str="d,ip,ak zende";
// console.log(str.split(" "));
// console.log(str.split(","));


//////////Date in js

// let currDate=new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate);
// console.log(currDate.toString());
// console.log(Date.now())/////returning the milisecond from 1 jan 1970 to now
// let c=currDate.getFullYear();
// let e=currDate.getHours();
// console.log(c);
// console.log(e)
// console.log(currDate.getMonth())

// console.log(currDate.toLocaleTimeString());

////////Math object in js

// console.log(Math.PI);
// let num=9.50;
// console.log(Math.round(num))
// console.log(Math.pow(3,3));
// console.log(Math.ceil(7.8));
// console.log(Math.ceil(9.1)); //getting 10 output here
//console.log(Math.random()*10); ///getting output between 0 to 10;
//console.log(Math.trunc(4.1));
//console.log(Math.trunc(-9.1));//getting output before decimal number -9
//////// 












