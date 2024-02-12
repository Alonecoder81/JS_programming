// const a=require("readline-sync");            
// var b=a.question("enter your number")
// for (let i=1; i<=b; i++) {
//     var str=""
//     for (let j=1; j<=i; j++) {
//         str+="*"
//     }
//     console.log(str);
// }


// const a=require("readline-sync")
// var b=a.question("enter number")
// for(let i=b; i>0; i--) {
//     var str=""
//     for (let j=1; j<=i; j++) {
//         str+="*"
//     }
//     console.log(str);
// }

 
// const a=require("readline-sync");
// var b=a.question("enter number:-");
// for (let i=1; i<=b; i++) {
//     var str=""
//     for (let j=b-1; j>0; j--) {
//         process.stdout.write(" ");
//     }
//     for (let k=1; k<=i; k++) {
//         str+="*"
//     }
//     console.log(str);
// }


        // OTP GANERATION

// let otpgeneretor=(digit)=>{
//     const s=require("readline-sync");
//     let num=s.question("enter number:-")
//     let otp=''
//     for(let i=1; i<=digit; i++) {
//         otp+=num[Math.floor(Math.random()*10)]
//     }
//     return otp
// }
// console.log(otpgeneretor(4))



// const a= require("readline-sync");
// var num = a.question("Enter number: ");

// for (let i = 1; i <= num; i++) {
//     var spaces = num - i;
//     for (let j = 0; j < spaces; j++) {
//         process.stdout.write(" ");
//     }
//     for (let k = 1; k <= i; k++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }



// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// let c=1;
// let d=b-1
// for (let i=1; i<=b; i++) {
//     for (let j=1; j<=i; j++) {
//         process.stdout.write(c.toString()+" ");
//         c++;
//     }
//     console.log();   
// }



// const a=require("readline-sync");
// let b=parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=1; k<=i; k++) {
//         process.stdout.write(i.toString()+" ");
//     }
//     console.log();
// }


// const a=require("readline-sync");
// let b=parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=1; k<=i; k++) {
//         process.stdout.write(k.toString()+" ");
//     }
//     console.log();
// }




// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// let c=1;
// for (let i=1; i<=b; i++) {
//     for (let k=b; k>=i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j=1; j<=i; j++) {
//         process.stdout.write(c.toString()+" ");
//         c++;
//     }
//     console.log();   
// }


// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=b; k>=i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j=1; j<=i; j++) {
//         process.stdout.write(j.toString()+" ");
//     }
//     console.log();   
// }

// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=b; k>=i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j=1; j<=i; j++) {
//         process.stdout.write(i.toString()+" ");
//     }
//     console.log();   
// }


// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=b; k>=i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j=1; j<=i; j++) {
//         process.stdout.write("*"+" ");
//     }
//     console.log();   
// }




// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=1; k<=b; k++) {
//         process.stdout.write("*");
//     }
//     console.log(); 
// }



        //dymind pattern

// const a=require("readline-sync");
// let b =parseInt(a.question("enter number"));
// for (let i=1; i<=b; i++) {
//     for (let k=b; k>=i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j=1; j<=i; j++) {
//         process.stdout.write("*"+" ");
//     }
//     console.log();   
// }
// for (let j=1; j<=b; j++) {
//     for(let i=1; i<=j; i++) {
//         process.stdout.write(" ");
//     }
//     for (let k=b; k>=j; k--) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }


     // dymind pattern print

// const a = require("readline-sync");
// let b = parseInt(a.question("Enter the number of b:- "));
// for (let i = 1; i <= rows; i++) {
//     for (let k = b; k >= i; k--) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }
// for (let i = 1; i <= b - 1; i++) {
//     for (let j = 1; j <= i + 1; j++) {
//         process.stdout.write(" ");
//     }
//     for (let k = 2 * (b - i) - 1; k >= 1; k--) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// const a=require("readline-sync")
// let b=parseInt (a.question("enter the number:-"))
// let pattern = "";
// for (let n = 1; n <= b; n++) {
//    for (let num = 1; num <= (b+1) - n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


// const r=require("readline-sync")
// let c=parseInt(r.question("enter the number of c:-"))
// let pat=""
// for (let i=1; i<=c; i++) {
//     for(let j=1; j<=c-i; j++) {
//         pat+=" ";
//     }
//     for (let k=1; k<=2*i-1; k++) {
//         pat+=k;
//     }
//     pat+="\n"
// }
// console.log(pat);


    // max two number

// const a=require("readline-sync");
// var b=a.question("enter the number:-");
// let c=0;
// for (let i=1; i<=b; i++) {
//     c++;
// }
// var d=a.question("enter the number:-");
// let ca=0;
// for (let i=1; i<=d; i++) {
//     ca++
// }
// if (c>ca) {
//     console.log(b)
// }
// else {
//     console.log(d)
// }



// const a=require("readline-sync");
// let b=a.question("enter the number:-");
// for (let i=1; i<=b; i++) {
//     if (i%2==0) {
//         console.log("even:-",i);
//     }
//     else {
//         console.log("odd:-",i);
//     }
// }



// const a=require("readline-sync");
// let b=a.question("enter the number:-");
// for (let i=1; i<=b; i++) {
//     if (i%3==0 && i%5!=0) {
//         console.log("Ajay",i);
//     }
//     else if (i%5==0 && i%3!=0) {
//         console.log("Kumar",i);
//     }
//     else if (i%3==0 && i%5==0){
//         console.log("Suryavanshi",i);
//     }
//     else {
//         console.log("not desival any number",i)
//     }
// }




// var cnt = 5;
// var num = 1;
// var f5 = '';
// while (cnt-- > 0) {
//     var currentNum = num;
//     var cycleCheck = [];
//     while (currentNum !== 1 && cycleCheck[currentNum] !== true) {
//         cycleCheck[currentNum] = true;
//         var sumOfSquares = 0;
//         while (currentNum > 0) {
//             var digit = currentNum % 10;
//             sumOfSquares += digit * digit;
//             currentNum = (currentNum - digit) / 10;
//         }
//         currentNum = sumOfSquares;
//     }
//     if (currentNum === 1) {
//         f5 += num + ", ";
//         num++;
//     } else {
//         num++;
//     }
// }

// console.log('First 5 happy numbers are: ' + f5.slice(0, -2));



        //   armstrong wrong code


// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number:-"));
// let f=b;
// let d=0;
// while(f>0) {
//     let f=parseInt(f / 10);
//     d+=1;
// }
// let sum=0;
// let rem=0;
// let e=b;
// while(e > 0) {
//     rem=e%10;
//     sum+=rem**d;
//     e=parseInt(e/10);
// }
// if (sum==b) {
//     console.log("this is armstrong number:-",b);
// }else {
//     console.log("this is not armstrong number:-",b);
// }


      
    //    armstrong write question

// const a =require("readline-sync");
// let b = parseInt(a.question("Enter the number: "));
// let c = b;
// let d = 0;
// while (c > 0) {
//     c = parseInt(c / 10);
//     d += 1;
// }
// let sum = 0;
// let rem = 0;
// let e = b;

// while (e > 0) {
//     rem = e % 10;
//     sum += rem ** d;
//     e = parseInt(e / 10); 
// }
// if (sum == b) {
//     console.log("This is an Armstrong number:", b);
// } else {
//     console.log("This is not an Armstrong number:", b);
// }



        // perfect number


// const a=require("readline-sync");
// var b=a.question("enter the number:-");
// let c=b;
// let sum=0;
// for (let i=1; i<c; i++) {
//     if (c%i==0) {
//         sum+=i;
//     }
// }
// if (sum==b) {
//     console.log("this is perfect number:-",b);
// }
// else {
//     console.log("this is not perfect number:-",b);
// }



    //   # prime number


// const a=require("readline-sync");
// let b=parseInt(a.question("enter the number:-"));
// let c=0;
// for (let d=2; d<=parseInt(b/2); d++) {
//     if (b%d==0) {
//         c++;
//         break;
//     }
// }
// if (c==0) {
//     console.log("this is prime number:-",b);
// }
// else {
//     console.log("tihs is not prime number:-",b);
// }



    //    GAME CHOOSE CORRECT NUMBER

    
// const a=require("readline-sync");
// let b=a.question("enter number of step:-");
// while(b>=0) {
//     let c=a.question("enter number of c:-");
//     if (c==20) {
//         console.log("congratulation you are choose correct number:-",c);
//         break;
//     }
//     else {
//         console.log("try again");
//     }
//     b++;
// }
// while(b<=0) {
//     let d=a.question("enter number of d:-");
//     if (d==47) {
//         console.log("congratulation you are choose correct number:- ",d);
//         break;
//     }
//     else {
//         console.log("try again");
//     }
//     b--;
// }



// const r=require("readline-sync");
// let b=parseInt(r.question("enter number:-"));
// for (let i=b; i>0; i++) {
//     let questions=b.question("enter question:-");
// }
