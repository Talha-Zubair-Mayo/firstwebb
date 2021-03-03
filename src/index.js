// React Tutorial By Thapa Technical

// var React =   require('react');
// var ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";

// importing BrowseRouter

import {BrowserRouter} from "react-router-dom";

//import Add, { Sub, mul, Dev } from "./Calc";
// Importing our JSX Component

// import Heading from "./Heading";
// import Para from "./Para";
// import List  from "./List";
// import App ,{second , Myfunction} from "./App";
// import Apps from "./App";
import App from './Apps';
//import myfav , {second , Myfunction} from "./App";

// We Can Also Import All Exports From Components  By Creating An Object

//import * as Exp from "./App";

//importing card from card

// import Card from "./Card";
// import cData from "./CrdsData";

// #21 React JS Challenge #5: Create Simple Calculator App

// Importing Css StyleSheet
import "./index.css";

//#5: ReactJS Hello World Program

// ReactDOM.render(<h1>Hello World </h1>, document.getElementById("root")
// );

//#6 JSX in React JS

// ReactDOM.render(React.createElement("h1",null,"I Am Real format"), document.getElementById("root"));

// ReactDOM.render(<h1>Hello I'm in JSX Format</h1>, document.getElementById("root")
// );

// ReactDOM.render(

// #7. How to Render Multiple Elements inside ReactDOM.render() in ReactJS in Hindi
//   // <div>

//   // <h1>Hello I Am Frir </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>
//   // <h1>Hello I Am First </h1>

//   // </div>

//   // React Fregment
//   // <React.Fragment>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   // </React.Fragment>

//     // <> <= it is also Acting As <React.Fragment>
//   //     <>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   //   <h1>Hello I Am First </h1>
//   // </>

//   ,

//   document.getElementById("root")
// );

// #9 React JS Series Challenge #1

// ReactDOM.render(
//   <>

//       <h1> Hello Netflix</h1>

//       <p> Here Is My Favourite Netflix Series</p>

//       <ol>
//         <li> Mr Robot </li>
//         <li> Arrow </li>
//         <li> Legands Of Tomorrow </li>
//         <li> Lucifer  </li>
//         <li> Dark </li>
//       </ol>
//   </>

//   , document.getElementById("root"));

// #10 JavaScript Expressions in JSX in ReactJs

// const Name  = "TaLhA ZuBaiR MaYo ";

// ReactDOM.render(

//   <>
//       <h1>Hello My name IS {Name} </h1>
//       <h3>My Lucky number Is {2*9}</h3>
//       <h5>Here Is Random number: {Math.random()}</h5>

//   </>
//   ,document.getElementById("root"));

// 11 ES6 Template Literals in JSX in ReactJS

// const Name  = "TaLhA";
// const Lastname = "Zubair";
// ReactDOM.render(

//   <>
//       {/* <h1>Hello My name IS {Name}  {Lastname}</h1> */}

//       {/* Using Tamplate Literals */}
//       <h1> {`Hello My name Is ${Name}
//       And My Last Name is ${Lastname}`}</h1>

//   </>
//   ,document.getElementById("root"));

// #12  React JS Challenge #2: Display Current Date and Time in JSX

//  const Name  = "TaLhA";
//  const date  = new Date().toLocaleDateString();
//  const timee = new Date().toLocaleTimeString();
//  ReactDOM.render(

//   <>

//       <h1> {`Hello My name Is ${Name}`}</h1>
//       <h2>The Current Date Is: {date}</h2>

//       <h3>The Current Time IS : {timee}</h3>

//   </>
//   ,document.getElementById("root"));

// #13 JSX Attributes in ReactJS in Hindi | HTML Attribute Vs JSX Attribute

//Using Html Attribute

//   var immg1 = "https://picsum.photos/id/1/100/200";
//   var immg2 = "https://picsum.photos/id/1/300/350";
//   var immg3 = "https://picsum.photos/id/1/400/400";
//   var immg4= "https://picsum.photos/id/1/500/500";
//   var linkk = "https://picsum.photos/images";

// ReactDOM.render(<>

// <h1 contentEditable = "true">Helloo I am EditAble Heading</h1>

// <img src={immg1} alt="Random Image"></img>
// <img src={immg2} alt="Random Image"></img>

// <a href={linkk} target="_picsum">

// <img src={immg3} alt="Random Image"></img>

// </a>
// <img src={immg4} alt="Random Image"></img>

// </>, document.getElementById("root"));

//  #14 CSS Styling & Importing CSS Files in React JS | Class Vs ClassName in React JS

//   var immg1 = "https://picsum.photos/id/1/100/200";
//   var immg2 = "https://picsum.photos/id/1/300/350";
//   var immg3 = "https://picsum.photos/id/1/400/400";
//   var immg4= "https://picsum.photos/id/1/500/500";
//   var linkk = "https://picsum.photos/images";

// ReactDOM.render(<>

//   {/* The Class is reserved keyword in React We Can not Use Class With HTML Tags
//       Instead Of Class We'll Use ClassName
//   */}

// <h1 contentEditable = "true" className="heading" >Helloo I am EditAble Heading</h1>

// <img src={immg1} alt="Random Image"></img>
// <img src={immg2} alt="Random Image"></img>

// <a href={linkk} target="_picsum">

// <img src={immg3} alt="Random Image"></img>

// </a>
// <img src={immg4} alt="Random Image"></img>

// </>, document.getElementById("root"));

// #16 Internal CSS & Inline CSS Styling

// var immg1 = "https://picsum.photos/id/1/200/300";
// var immg2 = "https://picsum.photos/id/1/250/300";
// var immg3 = "https://picsum.photos/id/1/300/300";
// var linkk = "https://picsum.photos/images";

// // This Object Is Created For Internal Styling
// const heading = {
//   color: "rgb(167, 97, 97)",
//   textAlign: "center",
//   textTransform: "uppercase",
//   fontWeight: "bold",
//   margin: "50px  0",
// };

// ReactDOM.render(
//   <>
//     {/* Inline CSS */}

//     {/* <h1 contentEditable="true" className="heading" style={{color: 'rgb(167, 97, 97)',textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>
//       Helloo I am EditAble Heading
//     </h1> */}
//     {/*
//             Internal CSS
//      */}
//     <h1 contentEditable="true" className="heading" style={heading}>
//       Helloo I am EditAble Heading
//     </h1>

//     <div className="imggg">
//       <img src={immg1} alt="Random Image"></img>
//       <img src={immg2} alt="Random Image"></img>

//       <a href={linkk} target="_picsum">
//         <img src={immg3} alt="Random Image"></img>
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// #17 React JS Mini-Project #1: Creating Simple greeting Website using React JS

//   let CurrentDate = new Date();
//   let hour = CurrentDate.getHours();
//   let greeting = '';

//   const styleee = {};
//   if(hour >=1  && hour < 12 )
//   {
//     greeting = "Good Morning";
//     styleee.color = "Green";
//   }
//   else if (hour >=12 && hour < 19)
//   {
//     greeting = "Good Evening";
//     styleee.color = "Red";
//   }
//   else
//   {
//     greeting = "Good Night";
//     styleee.color = "Black";
//   }
// ReactDOM.render(

// <>
//     <div>
//   <h1 > Hello Dear , <span style={styleee} >{greeting}</span> </h1>
//   </div>
// </>

//   , document.getElementById("root"));

// #18 Functional Component in React JS

// ReactDOM.render(

//     <>
//         {/* Declaring/Using  Component After importing It */}

//         <Heading/>
//         <Para/>
//         <List />

//     </>

//     , document.getElementById("root"));

// Now We Will Work On App.jsx Page this Index page Must Be Clear

// ReactDOM.render( <App/> , document.getElementById("root"));

// ReactDOM.render(

//     <>
//         <ol>

//         <li>Hello I AM First Item from List</li>
//         <li>{myfav}</li>
//         <li>{second}</li>
//         <li>{Myfunction()}</li>

//         </ol>

//     </>

//     , document.getElementById("root"));

// #21 React JS Challenge #5: Create Simple Calculator App

//const value1 = document.getElementById("inp1").value;

// ReactDOM.render(
//   <App/>,
//   document.getElementById("root")
// );

// #22: Props in React Js in Hindi | React JS Project Netflix App

// function Ncard(valu) {
//   console.log(valu);
//   return (<Card
//     imgSrc={valu.imgSrc}
//     imgtitle={valu.imgtitle}
//     sname={valu.sname}
//     link={valu.link}
//   />
//   );
// }

// ReactDOM.render(
//   <>
//     {/* <Card 
//             imgSrc="https://wallpapercave.com/uwp/uwp374924.jpeg"
//             imgtitle="A Netflix orignal Series"
//             sname = "Dark"
//             link= "https://www.netflix.com/pk/title/80100172"

//          />
//          <Card 
//             imgSrc="https://wallpapercave.com/wp/wp8435988.jpg"
//             imgtitle="A Netflix orignal Series"
//             sname = "Money Heist"
//             link= "https://www.netflix.com/pk/title/80192098"

//          />
//          <Card 
//             imgSrc="https://wallpapercave.com/wp/wp1839578.jpg"
//             imgtitle="A Netflix orignal Series"
//             sname = "Stranger Things"
//             link= "https://www.netflix.com/pk/title/80057281"

//          />
//          <Card 
//             imgSrc="https://wallpapercave.com/wp/wp1812885.jpg"
//             imgtitle="A Netflix orignal Series"
//             sname = "Lucifer"
//             link= "https://www.netflix.com/pk/title/80057918"

//          /> */}

//     {/* #23: Arrays in React JS in Hindi | ReactJS Project Netflix App Part #2 */}

//     {/* <Card 
//             imgSrc={cData[0].imgSrc}
//             imgtitle={cData[0].imgtitle}
//             sname ={cData[0].sname}
//             link= {cData[0].link}

//          />
//          <Card 
//            imgSrc={cData[1].imgSrc}
//             imgtitle={cData[1].imgtitle}
//             sname ={cData[1].sname}
//             link= {cData[1].link}

//          />
//          <Card 
//            imgSrc={cData[2].imgSrc}
//             imgtitle={cData[2].imgtitle}
//             sname ={cData[2].sname}
//             link= {cData[2].link}

//          />
//          <Card 
//            imgSrc={cData[3].imgSrc}
//             imgtitle={cData[3].imgtitle}
//             sname ={cData[3].sname}
//             link= {cData[3].link}

//          /> 
//         */}

//     {/* #24 Completing React JS Netflix App #3 | Array Map & Fat Arrow function in React Js  */}

//     {/* {cData.map(Ncard)} */}

//         {/* With Fat Arrow Function */}

//         {cData.map((valu)=>
//         {
//             return (
//                 <Card
//                 imgSrc={valu.imgSrc}
//                 imgtitle={valu.imgtitle}
//                 sname={valu.sname}
//                 link={valu.link}
//             />
        
        
//          )
//         }
//       )
//     }


//   </>,

//   document.getElementById("root")
// );

// #26 If Else Statement in React JS | Conditional Rendering in React JS

ReactDOM.render(
    
<BrowserRouter>
<App />
</BrowserRouter>


, document.getElementById("root"));