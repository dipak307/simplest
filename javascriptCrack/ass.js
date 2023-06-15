// var number1 = 2;
// var number2 = 5
// var sum = add(number1, number2); // line 2
// console.log(sum) //line 3
// function add(a, b){
// var answer = a + b; //line 1
// return answer;
// }
//  console.log(answer) //line 4

////////Question number 1

// var a = 3;
// function printName(name){
// console.log(name)
// }
// printName("YAVTECH");
// console.log(a)


////////// Q2
// printName("YAVTECH","dipak");
// console.log(a);
// var a = 3;
// function printName(name,name2){
// console.log(name,name2)
// }


///////////  Q3
// console.log(printName());
// console.log(a);
// var a = 3;
// var printName = (name) => {
// console.log(name)
// }

///////////////  Q4

// console.log(printName);
// console.log(a);
// var a = 3;
// var printName = function (name) {
// console.log(name);
// }

// var a=10;
// function fun(){
//     var k=13;
//     console.log(this.a);
// }
// console.log(this.k);
// fun();

///Q1
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c)
// console.log(this.x)
// console.log(window.a)
// console.log(window.x)
// console.log(b());

////  Q2
// function abc() {
//     console.log(a);
//     }
//     abc();
//     var a = 7;  
///// Q3
// function abc() {
//     console.log(a);
//     }
//     abc();
//     var a = 7;  

/////////////Q4 
// function outerfunction() {
//     console.log(a);
//     var c = 10;
//     innerfunction();
//     function innerfunction() {  
//     console.log(b);
//     console.log(c);
//     }
//     }
//     var a = 7;
//     var b =3
//     outerfunction();
////////  Q5
// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     function innerfunction() {
//     console.log(a); 
//     console.log(window.a);
//     console.log(this.a)
//     }
//     }
//     var a = 7;
//     var b =3  
//     outerfunction();

// let a = 5;
// var b = 6;
// console.log(this.b);
// console.log(window.b)
// console.log(window.a)
// console.log(this.a);

// console.log(a);
// var a = 5;
// console.log(b) 


// var b =6;
// console.log(a)////reference error
// console.log(b);
// let a =5;
// console.log(b);

// let c=100;
// let c=300;///syntax error

// const a=10;
//    a=4;
//    console.log(a);


// let a = 5;

// var b = 6;



// console.log(this.b);

// console.log(window.b)

// console.log(window.a)

// console.log(this.a);


// var arr = [1, 2,3,5]
// var newArr = arr.forEach((item, i ) => {
// console.log(item + 'index' + i)
// return item + i
// })
// console.log(newArr)


// var arr = [1, 2,3,5]
// var newArr = arr.map((item, i ) => {
// console.log(item + 'index' + i)
// return item + i
// })
// console.log(newArr)


// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('k'), 0);
// console.log('d');


// console.log('a');
// console.log('b');
// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('d'), 0);
// console.log('e');



// var a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a);




// const a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)




// let a = 50;
// {
// var a =30;
// let b = 20;
// let c = 30;
// }
// console.log(a)



// let a = 50;
// function fun(){
// var a =30;
// let b = 20;
// let c = 30;
// }
// fun();
// console.log(a)



// const a = 10;
// {
// var a = 100;
// }
// console.log(a)


// const a = 10;
// {
// const a = 20;
// {
// const a = 50;
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)


// const a = 10;
// {
// const a = 20;
// {
// console.log(a);
// }
// console.log(a)
// }
// console.log(a)



// function x(){
//     let a = 10;
//     function y(){
//     return a;
//     // console.log(a);
//     }
//     console.log(y());
//     }
//     x();



// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }
//     x();


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     } 
//     console.log( x());



// function x(){

    // let a = 10;
    
    // function y(){
    // console.log(a);
    // }
    // return y;
    // }
    // const z = x()
    // console.log(z());

    // function x(){
    //     let a = 10;
    //     function y(){
    //     console.log(a);
    //     }
    //     a= 50;
    //     return y;
    //     }
    //     const z = x()  
    //     console.log(z())


    // var obj = {
    //     val: 100
    //     }
    //     function fun(){
    //     console.log(this.val);
    //     }
    //     fun()

    // var obj = {

    //     val: 100
        
    //     }
        
    //     function fun(a, b , c){
        
    //     console.log(this.val + a + b + c)
        
    //     }
        
    //     fun.apply(obj, 3, 4, 5)

//    async function dip(){
//        let c= setTimeout(() => {
//             console.log("i am 2 second");
//         }, 2000);

//         await console.log("i am quicker");
//     }
        
//         dip();





// function y(){
//     setTimeout(() => console.log("a"), 0)
//     console.log('Done Coding')
//     }   
//     y();


// function y(){
//     for(var i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')    
//     }    
//     y();

// function y(){
//     for(let i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }  
//     y();



// Const name = (arr)=>{
// }
// let fun = name(["Ram","Shyam"]);
// fun()// Print Hello Ram
// fun()//print Hello Shyam


// a()

// b()



// function a(){
// console.log('inside a');
// }
// var b = function (){
// console.log('inside b');
// }

// setTimeout(() => console.log('timer expired'), 1000)

// function x(y) {
// console.log('inside x');
// y();
// }
// x(function y(){
// console.log('inside y')
// })

// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {
// console.log('inside x');
// y();
// }
// x(function y(){
// setTimeout(() => console.log('inside y'), 0)
// })


// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
// console.log('inside x');
// y();
// }
// x(function y(){
// console.log('inside y')
// })


// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })



// var fun = a => a
// var a =10;
// console.log(fun(a))

// var fun = a => a
// console.log(fun(a))
// var a =10;

// function fun(a) { a; }
// var a =10;
// console.log(fun(a))

// var fun =( a, b) =>{

//     var sum = a + b
    
//     return sum
    
//     }
    
//     var a =10;
    
//     var b = 20
    
//     console.log(fun(a, b))
    
    

// var fun =( a, b) =>

// var sum = a + b

// return sum

// var a =10;

// var b = 20

// console.log(fun(a, b));




// var student = function(name){

//     this.name = name;
  
//     function printName() {
  
//       console.log(this.name)
  
//     }
  
//      printName()
  
//   }
  
//   var yash = new student("yash")



// var student = function(name){
//     this.name = name;
//     var printName = () => {
//       console.log(this.name)
//     }
//      printName()
//   } 
//   var yash = new student("yash")


// // 
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 0)

// console.log('d')

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('e'), 1000)

// setTimeout(() => console.log('c'), 0)

// console.log('d')



// const obj1= {
//     "key1": "value1",
//     "key2" : "value2",
//     "key3" : "value3"
//     }
//     const obj2 = { ...obj1,"key3":"dipa",key1:"sa"}
//     console.log(obj2)


// const obj= {
//     "key1": "value1",
//     "key2" : "value2",
//     "key3" : "value3"
//     }
//     const obj2 = { ...obj}
//     console.log(obj2 === obj)


// const arr1 = [1, 2, 3]

// const arr2 = [3,5,6]

// const arr3 = [...arr1, ...arr2]

// console.log(arr3)




// function resultAll(arr) {
//    let result = 0;
//    for(let k = 0; k < arr.length; k++) {
//      for(let m = 0; m < arr[ k ].length; m++) {
//             //   if( arr[ k ][ m ] > 60 ) result += (arr[ k ][ m ]); 
//             if( arr[ k ][ m ] % 2 == 1 ) result += ( arr[ k ][ m ] )
//      }
//    }
//      console.log(result);
//   }
  
//   resultAll( [ [56, 12], [23, 54], [22,66,88] ] ); 

// const fizzBuzz = num => {
//     for(let i = 1; i <= num; i++) {
//       // check if the number is a multiple of 3 and 5
//       if(i % 3 === 0 && i % 5 !== 0) {
//         console.log('fizzbuzz')
//       } // check if the number is a multiple of 3
//         else if(i % 3 === 0) {
//         console.log('fizz',"78888")
//       } // check if the number is a multiple of 5
//         else if(i % 5 === 0) {
//         console.log('buzz',"39820")
//       } else {
//         console.log(i)
//       }
//     }
//    }
// fizzBuzz(6);

// async function fun(){
//   let k=setTimeout(()=>{
//         console.log("its me dipak");
//     },2000);
//     let m=await k;
//     let y= "hi";
//     console.log(y);
// }

// fun();
// console.log("dipak zende");