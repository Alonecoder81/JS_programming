// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length of row and column:-"));
// let a=[];
// for(let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         c=parseInt(m.question("enter the number:-"));
//         a[i][j]=c;
//     }
// }
// console.log(a);
// let sum =0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         sum+=a[i][j];
//     }
// }
// console.log(sum);


    // ADDITION OF TWO MATRIX

// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let d=[];
// for (let i=0; i<n; i++) {
//     d[i]=[];
//     for (let j=0; j<n; j++) {
//         c=parseInt(m.question("enter the number:-"));
//         d[i][j]=c;
//     }
// }
// console.log(d);
// let sum=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         sum+=a[i][j]+d[i][j];
//     }
// }
// console.log(sum);




// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let d=[];
// for (let i=0; i<n; i++) {
//     d[i]=[];
//     for (let j=0; j<n; j++) {
//         c=parseInt(m.question("enter the number:-"));
//         d[i][j]=c;
//     }
// }
// console.log(d);
// let sum=0;
// let e=[];
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         for (let k=i; k<j+1; k++) {
//             sum+=a[i][j]*d[j][i];
//         }
//         e=sum;
//     }
// }
// console.log(e,"\n");


    //  SUBTRACTION


// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let d=[];
// for (let i=0; i<n; i++) {
//     d[i]=[];
//     for (let j=0; j<n; j++) {
//         c=parseInt(m.question("enter the number:-"));
//         d[i][j]=c;
//     }
// }
// console.log(d);
// let sum=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         sum+=a[i][j]-d[i][j];
//     }
// }
// console.log(sum);

     
    //    squire of matrix


// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let c=[];
// for (let i=0; i<n; i++) {
//     c[i]=[];
//     for(let j=0; j<n; j++) {
//         c[i][j]=a[i][j]**2;
//     }
// }
// console.log(c);

  
    //  TRANSPOSE MATRIX SUDHAR KRNA

// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// // let c=[];
// for (let i=0; i<n; i++) {
//     // c[i]=[];
//     for (let j=0; j<n; j++) {
//         a[j][i]=a[i][j];
//     }
// }
// console.log(a);


    // check equal

// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let d=[];
// for (let i=0; i<n; i++) {
//     d[i]=[];
//     for (let j=0; j<n; j++) {
//         c=parseInt(m.question("enter the number:-"));
//         d[i][j]=c;
//     }
// }
// console.log(d);
// let f=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (a[i][j]!=d[i][j]) {
//             f=1;
//             break;
//         }
//     }
// }
// if (f==0) {
//     console.log ("these matrix are equal");
// }
// else {
//     console.log("these matrix are not equal");
// }


    //  CHECK IDENTITY MATRIX

// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let f=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (i==j) {
//             if (a[i][j]!=1) {
//                 f=1;
//                 break;
//             }
//         }
//         else {
//             if (a[i][j]!=0) {
//                 f=1;
//                 break;
//             }
//         }
//     }
// }
// if (f==0) {
//     console.log("this is identity matrix");
// }
// else {
//     console.log("this is not identity matrix");
// }

   
    // CHECK DIGONAL MATRIX


// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let f=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (i==j) {
//             if (a[i][j]==0) {
//                 f=1;
//                 break;
//             }
//         }
//         else {
//             if (a[i][j]!=0) {
//                 f=1;
//                 break;
//             }
//         }
//     }
// }
// if (f==0) {
//     console.log("this is diagonal matrix");
// }
// else {
//     console.log("this is not diagonal matrix");
// }


        //    DIAGONAL MATRIX SUM


// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let sum=0
// let f=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (i==j && a[i][j]==0 || i!=j && a[i][j]!=0) {
//                 f=1;
//                 break;
//         }
//         else {
//             sum+=a[i][j];
//         }
//     }
// }
// if (f==0) {
//     console.log("this is diagonal matrix:",`sum=${sum}`);
// }
// else{
//     console.log("this is not diagonal matrix")
// }



// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let sum=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (i>j || i==j) {
//             sum+=a[i][j];
//         }
//     }
// }
// console.log(sum);


    //  UPPER TRINGULAR MATRIX


// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let sum=0;
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (i<j || i==j) {
//             sum+=a[i][j];
//         }
//     }
// }
// console.log(sum);




// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let min=a[0][0];
// for (let i=0; i<n; i++) {
//     for (let j=0;j<n; j++) {
//         if (a[i][j]<min) {
//             min=a[i][j];
//         }
//         else {
//             min=min;
//         }
//     }
// }
// console.log(min);



// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let max=a[0][0];
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (max<a[i][j]) {
//             max=a[i][j];
//         }
//         else {
//             max=max;
//         }
//     }
// }
// console.log(`max:-${max}`);



// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     a[i]=[];
//     for (let j=0; j<n; j++) {
//         b=parseInt(m.question("enter the number:-"));
//         a[i][j]=b;
//     }
// }
// console.log(a);
// let t=parseInt(m.question("enter number:-"))
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n; j++) {
//         if (a[i][j]==t) {
//             console.log(`possition:-${i},${j}`);
//         }
//     }
// }



// const m=require("readline-sync");
// let n=parseInt(m.question("enter the length:-"));
// let a=[];
// for (let i=0; i<n; i++) {
//     let b=parseInt(m.question("enter number:-"))
//     a[i]=b;
// }
// console.log(a);
// for (let i=0; i<n; i++) {
//     if (i%2==0) {
//         a[i]=0;
//     }
//     // else {
//     //     a[i]=1;
//     // }
// }
// console.log(a);



