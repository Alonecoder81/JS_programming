    //    calculatter in js

// const a=require("readline-sync");
// let b=a.question("enter the number of");
// var c=parseInt(b)
// const d=require("readline-sync");
// let e=d.question("enter the number");
// let f=parseInt(e)
// let g=require("readline-sync");
// let h=g.question("enter the symble");

// if(h=="+") {
//     console.log(c+f);
// }
// if(h=="-") {
//     console.log(c-f);
// }
// if (h=="*") {
//     console.log(c*f);
// }
// if(h=="/") {
//     console.log(c/f);
// }
// if (h=="%") {
//     console.log(c%f);
// }
// else if (h=="**") {
//     console.log(c**f);
// }


//    AtM in js

// console.log("please enter your card")
// console.log("welcome")
// console.log("please choose your language:- press 1:- English press:-2 Hindi");
// const a=require("readline-sync");
// let b=a.question("enter your key:-");
// let c=parseInt(b)
// if (c==1) {
//     console.log("your choose language English");
//     console.log("select your account type");
//     const d=require("readline-sync");
//     let e=d.question("press 1:- saving account press 2:- current account:-");
//     let f=parseInt(e)
//     if (f==1) {
//         console.log("yours welcome in saving account");
//         console.log("choos this key");
//         const g=require("readline-sync");
//         let h=g.question("press 1:- whitherwal balnce press 2:- deposit balance press 3:- pin reset:-");
//         let i=parseInt(h);
//         if (i==1) {
//             const j=require("readline-sync");
//             let k=j.question("enter your amount:-");
//             const l=require("readline-sync");
//             let m=l.question("enter your pin:-");
//             if (m==2000) {
//                 console.log("seccesful your whitherwal this amount:-",k);
//                 console.log("please take out your card")
//             }
//             else {
//                 console.log("your pin is wrong please enter your correct pin")
//                 const n=require("readline-sync");
//                 let o=n.question("enter your pin:-");
//                 if (o==2000) {
//                     console.log("seccesful your witherewal this amount:-",k);
//                     console.log("please take out your card")
//                 }
//                 else {
//                     console.log("try again please take out your card")
//                 }
//             }
//         }
//         if (i==2) {
//             const p=require("readline-sync");
//             let q=p.question("enter your deposit balance:-");
//             const r=require("readline-sync");
//             let s=r.question("enter your pin:-")
//             if (s==2100) {
//                 console.log("seccesful your deposit this balance:-",q);
//                 console.log("please tak eout your card")
//             }
//             else {
//                 console.log("your pin is wrong please enter correct pin")
//                 const t=require("readline-sync");
//                 let u=t.question("enter your pin:-");
//                 if (u==2100) {
//                         console.log("seccesful your deposit this balance:-",q);
//                         console.log("please take out your card")
//                 }
//                 else {
//                     console.log("your pin is wrong please take out your card");
//                 }
//             }
//         }
//         if (i==3) {
//             const v=require("readline-sync");
//             let w=v.question("enter your old pin:-")
//             const x=require("readline-sync");
//             let y=x.question("enter your new pin:-");
//             if (w==2100) {
//                 console.log("your pin reset seccesful your new pin is :-",y);
//                 console.log("please take out your card");
//             }
//             else {
//                 console.log("your pin is worng please enter the correct pin")
//                 const z=require("readline-sync");
//                 let aa=z.question("enter the old pin:-");
//                 if (aa==2100) {
//                     console.log("your pin reset seccesful your new pin is :-",y)
//                     console.log("please take out your card");
//                 }
//                 else {
//                     console.log("your pin is wrong please take out your card")
//                 }
//             }
//         }
//     }
//     if (f==2) {
//         console.log("yours welcome in current account")
//         console.log("choose this")
//         const aaa=require("readline-sync");
//         let ab=aaa.question("press 1:- witherwal balance press 2:-deposit balance press 3:- pin reset:-")
//         if (ab==1) {
//             const ac=require("readline-sync");
//             let ad=ac.question("enter your wirherewal amaount:-");
//             const ae=require("readline-sync");
//             let af=ae.question("enter your pin:-");
//             if (af==2200) {
//                 console.log("seccesful your witherewal this amount:-",ad);
//                 console.log("please take out your card")
//             }
//             else {
//                 console.log("your pin is wrong please enter your correct pin");
//                 const ba=require("readline-sync");
//                 let bb=ba.question("enter your pin:-");
//                 if (bb=2200) {
//                     console.log("seccesful your witherewal this amount:-",ad)
//                     console.log("please take out your card");
//                 }
//             }
//         }
//         if (ab==2) {
//             const bc=require("readline-sync");
//             let bd=bc.question("enter your deposit balance:-");
//             const be=require("readline-sync");
//             let bf=be.question("enter your pin:-")
//             if (bf==2300) {
//                 console.log("seccesful your deposit this amount:-",bd);
//                 console.log("plesae take out your card");
//             } else {
//                 console.log("your pin is wrong please enter the correct pin")
//                 const bg=require("readline-sync");
//                 let bh=bg.question("enter your pin:-");
//                 if (bh==2300) {
//                     console.log("seccesful your deposit this amount:-",bd)
//                     console.log("please take out your card")
//                 }
//                 else {
//                     console.log("try again please take out your card")
//                 }
//             }

//         }
//         if (ab==3) {
//             const bi=require("readline-sync");
//             let bj=bi.question("enter your old pin:-");
//             const bk=require("readline-sync");
//             let bl=bk.question("enter your new pin:-");
//             if (bj==2300) {
//                 console.log("seccesful your pin reset your new pin is:-",bl);
//                 console.log("take out your card");
//             }
//             else {
//                 const bm=require("readline-sync");
//                 let bn=bm.question("enter your old pin:-");
//                 if (bn==2300) {
//                     console.log("seccesful your pin reset your new pin is:-",bl);
//                     console.log("take out your card");  
//                 }
//             }
//         }
//     }
// }

// else {
//     if (c==2) {
//         console.log("your choose language Hindi");
//         console.log("select your account type");
//         const da=require("readline-sync");
//         let ea=da.question("press 1:- saving account press 2:- current account:-");
//         let fa=parseInt(ea)
//         if (fa==1) {
//             console.log("yours welcome in saving account");
//             console.log("choos this key");
//             const ga=require("readline-sync");
//             let ha=ga.question("press 1:- whitherwal balnce press 2:- deposit balance press 3:- pin reset:-");
//             let ia=parseInt(ha);
//             if (ia==1) {
//                 const ja=require("readline-sync");
//                 let ka=ja.question("enter your amount:-");
//                 const la=require("readline-sync");
//                 let ma=la.question("enter your pin:-");
//                 if (ma==2000) {
//                     console.log("seccesful your whitherwal this amount:-",ka);
//                     console.log("please take out your card")
//                 }
//                 else {
//                     console.log("your pin is wrong please enter your correct pin")
//                     const na=require("readline-sync");
//                     let oa=na.question("enter your pin:-");
//                     if (oa==2000) {
//                         console.log("seccesful your witherewal this amount:-",ka);
//                         console.log("please take out your card")
//                     }
//                     else {
//                         console.log("try again please take out your card")
//                     }
//                 }
//             }
//             if (ia==2) {
//                 const pa=require("readline-sync");
//                 let qa=pa.question("enter your deposit balance:-");
//                 const ra=require("readline-sync");
//                 let sa=ra.question("enter your pin:-")
//                 if (sa==2100) {
//                     console.log("seccesful your deposit this balance:-",qa);
//                     console.log("please tak eout your card")
//                 }
//                 else {
//                     console.log("your pin is wrong please enter correct pin")
//                     const ta=require("readline-sync");
//                     let ua=ta.question("enter your pin:-");
//                     if (ua==2100) {
//                             console.log("seccesful your deposit this balance:-",qa);
//                             console.log("please take out your card")
//                     }
//                     else {
//                         console.log("your pin is wrong please take out your card");
//                     }
//                 }
//             }
//             if (ia==3) {
//                 const va=require("readline-sync");
//                 let wa=va.question("enter your old pin:-")
//                 const xa=require("readline-sync");
//                 let ya=xa.question("enter your new pin:-");
//                 if (wa==2100) {
//                     console.log("your pin reset seccesful your new pin is :-",ya);
//                     console.log("please take out your card");
//                 }
//                 else {
//                     console.log("your pin is worng please enter the correct pin")
//                     const za=require("readline-sync");
//                     let aab=za.question("enter the old pin:-");
//                     if (aab==2100) {
//                         console.log("your pin reset seccesful your new pin is :-",ya)
//                         console.log("please take out your card");
//                     }
//                     else {
//                         console.log("your pin is wrong please take out your card")
//                     }
//                 }
//             }
//         }
//         if (fa==2) {
//             console.log("yours welcome in current account")
//             console.log("choose this")
//             const aaab=require("readline-sync");
//             let abc=aaab.question("press 1:- witherwal balance press 2:-deposit balance press 3:- pin reset:-")
//             if (abc==1) {
//                 const acb=require("readline-sync");
//                 let adb=acb.question("enter your wirherewal amaount:-");
//                 const aeb=require("readline-sync");
//                 let afb=aeb.question("enter your pin:-");
//                 if (afb==2200) {
//                     console.log("seccesful your witherewal this amount:-",adb);
//                     console.log("please take out your card")
//                 }
//                 else {
//                     console.log("your pin is wrong please enter your correct pin");
//                     const bab=require("readline-sync");
//                     let bbb=bab.question("enter your pin:-");
//                     if (bbb=2200) {
//                         console.log("seccesful your witherewal this amount:-",adb)
//                         console.log("please take out your card");
//                     }
//                 }
//             }
//             if (abc==2) {
//                 const bcb=require("readline-sync");
//                 let bdb=bcb.question("enter your deposit balance:-");
//                 const beb=require("readline-sync");
//                 let bfb=beb.question("enter your pin:-")
//                 if (bfb==2300) {
//                     console.log("seccesful your deposit this amount:-",bdb);
//                     console.log("plesae take out your card");
//                 } else {
//                     console.log("your pin is wrong please enter the correct pin")
//                     const bgb=require("readline-sync");
//                     let bhb=bgb.question("enter your pin:-");
//                     if (bhb==2300) {
//                         console.log("seccesful your deposit this amount:-",bdb)
//                         console.log("please take out your card")
//                     }
//                     else {
//                         console.log("try again please take out your card")
//                     }
//                 }
    
//             }
//             if (abc==3) {
//                 const bib=require("readline-sync");
//                 let bjb=bib.question("enter your old pin:-");
//                 const bkb=require("readline-sync");
//                 let blb=bkb.question("enter your new pin:-");
//                 if (bjb==2300) {
//                     console.log("seccesful your pin reset your new pin is:-",blb);
//                     console.log("take out your card");
//                 }
//                 else {
//                     const bmn=require("readline-sync");
//                     let bnn=bmn.question("enter your old pin:-");
//                     if (bnn==2300) {
//                         console.log("seccesful your pin reset your new pin is:-",blb);
//                         console.log("take out your card");  
//                     }
//                 }
//             }
//         }
//     }   
// }




// let a=10
// console.log((a==11)? console.log("okey"):console.log("not okey"));

// let a=4;
// let b=3;
// console.log(Math.sqrt(a));
// console.log(Math.pow(a,b));
// console.log(a**b);