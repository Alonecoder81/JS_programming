// let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = t.length;

// let a="ajay@gmail.com"

// // let b=a.length-4;
// let c=a.split("@");
// console.log(c);

// const a=require("readline-sync");
// let b=a.question("enter length:-");
// const s=[];
// for (let i=0; i<a; i++) {
//     // const d=require("readline-sync");
//     const c=d.question("enter the array element:-");
//     s.append(c);
// }
// console.log(s);


    //  USER INPUT // CREAT LIST

// const a = require('readline');

// const aj = a.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// aj.question('Enter the array inpu:- ', (Input) => {
//   const ajay = Input.split(' ').map(Number);
//   console.log(ajay);
//   aj.close();
// });



// const a=["kumar","syryavanshi"];
// a.push("prasad");              // add element on last possition in list
// a.unshift("Ajay");             // add element on first possition in list
// a.pop();                          // remove last element 
// a.shift();                           // remove first element
// console.log(a);


    //  CREAT AN ARRAY FROM USER DEFINE

// const m=require("readline-sync");
// let n=m.question("enter the length:-");
// const a=[n];
// for (let i=0; i<n; i++) {
//     let d=parseInt(m.question("enter the number:-"));
//     a[i]=d;
// }
// console.log(a);
// a.pop();                      //remove last element
// console.log(a)
// a.push(8)                    //add element in last possition
// console.log(a);
// a.unshift(6)                // add element in first possition
// console.log(a);
// a.shift();                  // remove first element 
// console.log(a);



// a=[4,8,9,2,3,7,1];
// a.sort();                  // array sort method
// a.reverse();               // reverse array method
// console.log(a);
// let b=Math.min(...a);         // find min in an array method
// let c=Math.max(...a);         // find max in an array method
// console.log(`minimum:- ${b}`,`maximum:- ${c}`);

// const a = [1, 2, 3, 4, 2, 5, 6, 1];
// const b = [...new Set(a)];              // remove duplicate elment method in an array
// console.log(b);



// const a=[2,2,2,3,3,4,5,8,1];
// let b=[...new Set(a)];
// console.log(b);
// b.sort()
// console.log(b);
// b.pop();
// console.log(b);
// b.shift();
// console.log(b);
// b.push(7)
// console.log(b);
// b.unshift(1);
// console.log(b);




// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number of length:-"));
// const d=[b];
// for (let i=0; i<b; i++) {
//     e=parseInt(a.question("enter the number:-"));
//     d[i]=e;
// }
// console.log(d);
// const ne=[];
// const pe=[];
// const ev=[];
// const od=[];
// for (let i=0; i<b; i++) {
//     if (d[i]%2==0) {
//         ev.push(d[i]);
//     }
//     else {
//         od.push(d[i]);
//     }
// }
// console.log(ev,od);
// for (let i=0; i<b; i++) {
//     if (d[i]>0) {
//         pe.push(d[i]);
//     }
//     else {
//         ne.push(d[i]);
//     }
// }
// console.log(pe,ne);


//    PERFECT NUMBER

// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number of length:-"));
// const d=[b];
// for (let i=0; i<b; i++) {
//     e=parseInt(a.question("enter the number:-"));
//     d[i]=e;
// }
// console.log(d);
// const p=[];
// for (let i=0; i<b; i++) {
//     let sum=0;
//     for (let j=1; j<d[i]; j++) {
//         if (d[i]%j==0) {
//             sum+=j;
//         }
//     }
//     if (sum==d[i]) {
//         p.push(d[i]);
//     }
// }
// console.log(p);


    //  ARMSTRONG NUMBER


// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number of length:-"));
// const d=[b];
// for (let i=0; i<b; i++) {
//     e=parseInt(a.question("enter the number:-"));
//     d[i]=e;
// }
// console.log(d);
// const ar=[];
// for (let i=0; i<b; i++) {
//     let c=0;
//     let t=d[i];
//     while (t>0) {
//         t=parseInt(t/10);
//         c++;
//     }
//     let sum=0;
//     let s=d[i];
//     while (s>0) {
//         let re=s%10;
//         sum+=(re**c);
//         s=parseInt(s/10);
//     }
//     if (sum==d[i]) {
//         ar.push(d[i]);
//     }
// }
// console.log(ar);




    //    PRIME NUMBER


    // const a=require("readline-sync");
    // let b=parseInt(a.question("enter the number of length:-"));
    // const d=[b];
    // for (let i=0; i<b; i++) {
    //     e=parseInt(a.question("enter the number:-"));
    //     d[i]=e;
    // }
    // console.log(d);
    // const prime=[];
    // for (let i=0; i<b; i++) {
    //     let c=0
    //     for (let j=1; j<=d[i]; j++) {
    //         if (d[i]%j==0) {
    //             c++;
    //         }
    //     }
    //     if (c==2) {
    //         prime.push(d[i]);
    //     }
    // }
    // console.log(prime);

         
    //    TODAY NIGHT COMPLETE THIS CODE        1

// console.log("welcome to my curd>>>>");
// console.log(
//     "1.creat an account: \n 2.login \n 3. exit"
// )
// const b=require("readline-sync");
// let option=parseInt(b.question("enter choose option:-"))
// const a1=[];
// let count=0;
// const a2=["user1",[]]
// if (option==1) {
//     console.log ("are you creat a new account\n 1. yes\n 2. no")
//     let choose=parseInt(b.question("enter number:-"))
//     if (choose==1) {
//         console.log("okey")
//         let username=b.question("enter username:-")
//         let name=b.question("enter name:-")
//         let password=b.question("enter password:-")
//         let numbers=parseInt(b.question("enter number"))
//         let x=1;
//         while(x>0){
//             let m_number=b.question("enter number")
//             if (m_number.length==10) {
//                 console.log ("correct number>>")

//                 break;
//             }
//             else {
//                 console.log("please enter correct number>>")
//             }
//             x++;
//         }
//         let gmail=b.question("gmail:-");
//         let state=b.question("state:-");;
//         // let i=1;
//         // while (i>0) {
//         //     let gmail=b.question("gmail:-");
//         //     if ("@" && "gmail" && ".com" in gmail) {
//         //         console.log("gmail is corect>>")
//         //         break;
//         //     }
//         //     else {
//         //         console.log("please enter your correct gmail:-")
//         //     }
//         //     i++;
//         // }
//         console.log("your account has sucessfully creat>>")
//         a1.splice([username["name:-",name,"gmail","numbers",numbers ,"password",password,"state",state]])
//         // console.log(a1);
//     }
// }





// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number:-"));
// let d=[];
// for (let i=0; i<b; i++) {
//     let c=parseInt(a.question("enter the number:-"))
//     d[i]=c;
// }
// console.log(d);
// e=[]
// for (let i=0; i<b; i++) {
//     let t=d[i];
//     let co=0;
//     while(t>0) {
//         t=parseInt(t/10);
//         co+=1;
//     }
//     let ta=d[i];
//     let sum=0;
//     while(ta>0) {
//         let r=ta%10;
//         sum+=(r**co);
//         ta=parseInt(ta/10);
//     }
//     if (sum==d[i]) {
//         e.push(d[i]);
//     }
// }
// console.log(e);


// marge two  array

// const a=require("readline-sync")
// let b=parseInt(a.question("enter the number:-"));
// let c=[];
// for (let i=0; i<b; i++) {
//     let d=parseInt(a.question("enter the number:-"))
//     c[i]=d;
// }
// console.log(c);
// let e=[];
// for (let i=0; i<b; i++) {
//     let f=parseInt(a.question("enter the number:-"))
//     e[i]=f;
// }
// console.log(e);
// let g=c.length+e.length;
// let h=[];
// for (let i=0; i<b; i++) {
//     h[i]=c[i];
// }
// for (let i=0; i<b; i++) {
//     h[b+i]=e[i];
// }
// console.log(h);
// for (let i=0; i<h.length; i++) {
//     for (let j=i+1; j<h.length; j++) {
//         if (h[i]>h[j]) {
//             let t=h[i];
//             h[i]=h[j];
//             h[j]=t;
//         }
//     }
// }
// console.log(h);
// let mi=Math.min(...h);
// let ma=Math.max(...h);
// console.log(`min:-${mi}`);
// console.log(`max:-${ma}`);
// let ne=[...new Set(h)];
// console.log(ne);