////////////// oops in js ////////////////////

////////////object in js
// let bioData={
//     myName:"dipak",
//     myAge:23,
// //     getData:function(){
// //         console.log(`my name is${bioData.myName} and my age is ${bioData.myAge}`);
// //     }
//      getData(){
//             console.log(`my name is ${bioData.myName} and my age is ${bioData.myAge}`);
//         }
//   }
// bioData.getData();

/////// how we can write object into object

// let bioData={
//     myName:{
//         name:"ajay",
//         age:'23'
//     }
// }
// let ans=bioData.myName.name;
// console.log(ans);


///// This Object in js
//this object refers to current context;
// console.log(this.alert("hey"));

// var mName="dipak";
// function myname(){
//     console.log(this.mName);
// }
// myname();//try run on microsoft window console

// const object1={
//     name:"satish dhawan",
//     myFun(){
//         console.log(this.name);
//     }
// }
// object1.myFun();

// const object1={
//     name:"satish dhawan",
//    last: myFun=()=>{
//         console.log(this);
//     }
// }
// object1.last;


///////// Array Destructuring 
  
// const myBioData=['dipak','satish','prashant'];
// console.log(myBioData);
// let myFname=myBioData[0];
// let mySname=myBioData[1];
// console.log(myFname +" "+ mySname)

// let [a,b,c]=myBioData;////array destructing
// console.log(c);

////////// Object Destructuring
//  const myBio={
//     name:'dipak',
//     age:23,
//     address:"pangri,jintur ,parbhani",
//     pincode:431509
//  }
// //  let age=myBio.age;
// //  console.log(age);
// let {name,age,address,pincode,degree='b.tech'}=myBio;
// // console.log(address);
// console.log(degree);


/////Object Properties
// let myName="vinod";
// const myB={
//     myName:'thapa',
//     26:'my age is'
// }
// console.log(myB)
////////// ading dynamic data in object
// let myName="vinod";
// const myB={
//     [myName]:'thapa',
//     [20+6]:'my age is'
// }
// console.log(myB)


// let name1="dipak"
// let age=23;
// const myBio={name1,age};
// console.log(myBio);


/////// spread operator in java /////
// const colors=['red','green','blue','white'];
// // const myColor=['red','green','blue','white','yellow','black']

// const myfavColor=[...colors,'yellow','black'];
// console.log(myfavColor);


/////////////////ECMAscript 
// let fun={
//     name:'dipak',
//     age:23
// }
// console.log(Object.values(fun));

//////////Hosting in javascript
/////////-------> hoisting in javascript is a mechanism where variables and functions declaration 
                  //are moved to the top of their scope before the code execute
////using var variable it will get undefine
                //   console.log(myname);
                //   var myname;
                //   myname="dipak";
/////using let variable getting error                
                //   console.log(myname);
                //    var myname;
                //    myname="dipak"

                
    /////////////Lexical Scoping in javascript
            /////child function can access value of parent function but parent function cannot access value of child function
    //         let a="dipak";
    //         const funParent=()=>{
    //          let b="bapurao";
    //               const funChild=()=>{
    //                 let c="zende";
    //                 console.log(a+b+c);
    //               }
    //               //funChild();///it will get output can access the value of parent and global 
    //               console.log(a+b+c);////it cannot be access the value of child
    //         }            
    // funParent();




    //////////////   Closures in Javascript

    /////closure is combination of a function bundled together with referances to its surrounding state (lexical environment)
    /////// in a simple word a closure gives you access to an outer function scope from an inner function

/////////// lexical scoping come under the closure

//   const outerfun=(a)=>{
//     let b=10;
//     const innerfun=()=>{
//         let sum=a+b;
//         console.log(`the sum of two number is ${sum}`);
//     }
//  return innerfun;
//   }
//   let check=outerfun(5);
//   check();


////////// Synchronous in Javascript 
///// if we doing first work untill that work cannot finished we can't go to another work
/// 1 work=10min
/// 2 work=5 sec; we can't do
// const fun2=()=>{
//   console.log("function 2 is called");
// }
// const fun1=()=>{
//     console.log("function 1 is called");
//     fun2();
//     console.log("function 1 is called Again..");
// }
// fun1();

////////////Asynchronous in javascript 
/////not wait for (who is taking long time) function it will run who is having less time 
///// 1 work = 10 min
////  2 word = 5 sec ////not waiting for finished first one it will go directly to other task
//  const fun2=()=>{
//     setTimeout(()=>{
//         console.log(`function 2 is called`);
//     },2000);
//  }
// const fun1=()=>{
//     console.log(`function 1 is called `);
//     fun2();
//     console.log('function 1 is called Again.....')
// }
// fun1();







