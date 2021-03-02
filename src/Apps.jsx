import React, { useState } from "react";
// import TodoList from "./TodoList";
// import Button from "@material-ui/core/Button";
// import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
// import AddIcon from "@material-ui/icons/Add";
// import Tooltip from "@material-ui/core/Tooltip";
// import ListCompo from "./ListComponent";

// Importing bootstrap
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// C:\Users\tkash\Desktop\ReactJs\firstweb\node_modules\bootstrap\dist\css\bootstrap.min.css


// import Add , { Sub, mul , Dev} from "./Calc";
// Importing our JSX Component

// import Heading from "./Heading";
// import Para from "./Para";
// import List  from "./List";

// #26 If Else Statement in React JS | Conditional Rendering in React JS

// import Card from "./Card";
// import cData from "./CrdsData";

// import Netflix , {Amazon} from "./Netflix";

// #19  Creating Simple greeting Website using React JS

// let CurrentDate = new Date();
// let hour = CurrentDate.getHours();
// let greeting = "";

// const styleee = {};
// if (hour >= 1 && hour < 12) {
//   greeting = "Good Morning";
//   styleee.color = "Green";
// } else if (hour >= 12 && hour < 19) {
//   greeting = "Good Evening";
//   styleee.color = "Red";
// } else {
//   greeting = "Good Night";
//   styleee.color = "Black";
// }

// function App() {
//   return (
//     <>
//       {/* Declaring/Using  Component After importing It */}

//       {/* <Heading/>
//         <Para/>
//         <List /> */}

//       {/* #19  Creating Simple greeting Website using React JS */}

//       {/* <>
//         <div>
//           <h1>
//              Hello Dear , <span>{greeting}</span>
//           </h1>
//         </div>
//       </> */}

//     </>
//   );
// }

// export default App;

// const defa = "i am A Default Constant Variable of App COmponent ";

// const second = "i am A Second Constant Variable of App COmponent";

// function Myfunction() {
//      let name = "I Am Exported Function By App.jsx Component";
//   return (name);
// }

// export default defa;
// export { second , Myfunction};

// function App() {

//     return <>
//     <ol>
//       <li>Addition Of Two number: {Add(3,5)} </li>
//       <li>Substraction Of Two number: {Sub(3,5)} </li>
//       <li>Multiple Of Two number:{mul(3,5)} </li>
//       <li>division Of Two number: {Dev(3,5)}</li>
//     </ol>
//   </>
// }

//  export default App;

// #26 If Else Statement in React JS | Conditional Rendering in React JS
//     const favv = "Netflix";
// // const Funnn = () => {
// //

// //   if (favv === "Netflix") {
// //     return (
// //       <Netflix/>
// //     );
// //   } else {
// //   }
// // };

// const App = () => {
// //         return <>

// //     <Funnn />
// //   </>
// //#27 React Conditional Rendering | Ternary Operator in React JS
//        return <>
//              {favv === "Netflix" ?  <Netflix /> :  <Amazon /> }
//        </>

// };

// export default App;

// #30: Hooks in React JS in Hindi | useState in Hook in React JS

// const App = () => {

//     // Array Desutructuring
//     // const name = ['Talha' , 'Kashi','Sikandr','usama'];

//     // const[Talha , Kashi,sikandar,usama] = name;

//     // console.log(Talha);

//     const state = useState();

//     const [count , setcount] = useState(1);

//     console.log(state);

//     const incNum = ()=>
//     {
//         setcount(count * 2 );
//         // console.log(`Clicked ${count} `);
//     }
//   return (
//     <>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={incNum}>Click Me</button>
//       </div>
//     </>
//   );
// };

// export default App;

//#34 React Hooks Challenge #6: Get Time on Refreshing and Clicking Button using useState Hook

// const App = () => {

//   let newtime = new Date().toLocaleTimeString();

//   const[ctime ,SetCtime] = useState(newtime);

//   const GetTime = () => {

//         let newwwtime = new Date().toLocaleTimeString();
//         SetCtime(newwwtime);

//   };

//   return (
//     <>
//       <div>
//         <h1>{ctime}</h1>
//         <button onClick={GetTime}>Get Time </button>
//       </div>
//     </>
//   );
// };

// export default App;

// #32: Create a Digital Clock using React JS  | React Mini Project #2

// const App= ()=>
// {
//     let time = new Date().toLocaleTimeString();

//     const [ctime , SetnewTime] = new  useState(time);

//     const Digi = ()=>
//     {
//         let neww = new Date().toLocaleTimeString();
//         SetnewTime(neww);
//     }
//     setInterval(Digi, 1000);

//     return <>

//      <div>

//         <h1>{ctime}</h1>

//     </div>

//  </>
// }

// export default App;

// #33: Handling Events in ReactJS

// const App = () =>
// {
//     let bg = "purple";
//     let tit = " Click Me To Change Background ";
//     const [bgclr , newbg] = useState(bg);
//     const [title , newtitle] = useState(tit);

//     const bgchange = ()=>
//     {
//        let  bggg = "red";
//        let titt = "Double Click On Me To change Background to default"
//         newbg(bggg);
//         newtitle (titt);
//     }

//     const def = ()=>
//     {
//         let ng = "purple"
//         let tttt = "Click Me To Change Background"
//         newbg(ng);
//         newtitle(tttt);
//     }

//     return <>

//     <div style = {{backgroundColor:bgclr}}>

//         <button className="btnn" onClick={bgchange} onDoubleClick={def}>{title} </button>
//     </div>

//     </>
// }

// export default App;

// #34 Forms in React JS in Hindi | React Controlled Vs Uncontrolled Component

// const App = () => {

// //   const [name, newName] = useState("");
// //   const [Fullname, SetFullName] = useState("");

// //   const[Lname , LnewName] = useState("");
// //   const[Lastname , SetLastName] = useState()

// //   const inputEvent = (event) => {
// //     let newvalue = event.target.value;
// //     newName(newvalue);
// //   };

// //   const inputEventTwo = (event) => {
// //     let newval = event.target.value;
// //     LnewName(newval);
// //   };

// //   const onsubmi = () => {
// //     SetFullName(name);
// //   };
//     // const onsubmitt = (event) => {
//     //     event.preventDefault();
//     //     SetFullName(name);
//     //     SetLastName(Lname);
//     // };

//   return (
//     <>
//       {/* <div>
//         <h1> {Fullname}</h1>
//         <input
//           className="input"
//           type="text"
//           placeholder="Enter your Name Here"
//           onChange={inputEvent}
//           value={name}
//         />
//         <br />
//         <button className="btnn" onClick={onsubmi}>
//           Click Me
//         </button>
//       </div> */}

//       {/* <form onSubmit={onsubmitt}>
//         <div>
//           <h1> {Fullname} {Lastname}</h1>
//           <input
//             className="input"
//             type="text"
//             placeholder="Enter your First Name "
//             onChange={inputEvent}
//             value={name}
//           />
//           <br />
//           <input
//             className="input"
//             type="text"
//             placeholder="Enter your Last Name"
//             onChange={inputEventTwo}
//             value={Lname}
//           />
//           <br />
//           <button className="btnn" type="submit">
//             Click Me
//           </button>
//         </div>
//       </form> */}

//     </>
//   );
// };

// export default App;

// const App =()=>
// {

//     /* #36 : Handling Complex Multiple Input Form States in React JS  */

//     // const[Fullname , SetFullName] = useState({

//     //     fname :'',
//     //     lname :'',

//     // });

// //     const inputEventt = (event) => {

// //         console.log(event.target.value);
// //         console.log(event.target.name);
// //         const value = event.target.value;
// //         const nnname = event.target.name;
// //         SetFullName((Prevalue)=>{

// //             if(nnname==="Fname")
// //             {
// //                 return{
// //                     fname : value,
// //                     lname :Prevalue.lname,
// //                 };
// //             }
// //             else if (nnname==="Lname" )
// //             {
// //                 return{
// //                     fname : Prevalue.fname,
// //                     lname:value,
// //                 };

// //             }
// //         }
// //         );

// //  };

//     /* #37: React Login Form Challenge in React */

// //     const[Fullname , SetFullName] = useState({

// //         fname :'',
// //         lname :'',
// //         Email :"",
// //         Phonee:"",

// //     });

// //     const inputEventt = (event) => {

// //         console.log(event.target.value);
// //         console.log(event.target.name);
// //         const value = event.target.value;
// //         const nnname = event.target.name;
// //         SetFullName((Prevalue)=>{

// //             if(nnname==="Fname")
// //             {
// //                 return{
// //                     fname : value,
// //                     lname :Prevalue.lname,
// //                      Email :Prevalue.Email,
// //                     Phonee:Prevalue.Phonee,
// //                 };
// //             }
// //             else if (nnname==="Lname" )
// //             {
// //                 return{
// //                     fname : Prevalue.fname,
// //                     lname:value,
// //                     Email :Prevalue.Email,
// //                     Phonee:Prevalue.Phonee,
// //                 };

// //             }
// //             else if (nnname==="Emaill" )
// //             {
// //                 return{
// //                     fname : Prevalue.fname,
// //                     lname:Prevalue.lname,
// //                      Email :value,
// //                     Phonee:Prevalue.Phonee,
// //                 };

// //             }
// //             else if (nnname==="Phonee" )
// //             {
// //                 return{
// //                     fname : Prevalue.fname,
// //                     lname:Prevalue.lname,
// //                     Email :Prevalue.Email,
// //                     Phonee:value,
// //                 };

// //             }

// //         }
// //         );

// //  };

//  // #39: How I turn 100 lines of code in just 2 lines to Complete Our Login Form

//  const[Fullname , SetFullName] = useState({

//     fname :'',
//     lname :'',
//     Email :"",
//     Phonee:"",

// });

// const inputEventt = (event) => {

//     console.log(event.target.value);
//     console.log(event.target.name);
//     const value = event.target.value;
//     const nnname = event.target.name;
//     SetFullName((Prevalue)=>
//     {

//         return {
//             ...Prevalue,
//             [nnname] : value,
//         }
//     });

// };
//         const onsubmittMultiple = (event) => {
//             event.preventDefault();
//             //alert(`Form Submitted Successfully`);

//         };

//     return <>
//         {/* #36 : Handling Complex Multiple Input Form States in React JS  */}

//         {/* <form onSubmit={onsubmittMultiple}>
//         <div>
//           <h1> Hello  {Fullname.fname} {Fullname.lname}</h1>
//           <input
//             className="input"
//             type="text"
//              name="Fname"
//             placeholder="Enter your First Name "
//             onChange={inputEventt}
//             //value={Fullname.fname}

//           />
//           <br />
//           <input
//             className="input"
//             type="text"
//             name="Lname"
//             placeholder="Enter your Last Name"
//             onChange={inputEventt}
//            // value={Fullname.lname}

//           />
//           <br />
//            <input
//             className="input"
//             type="email"
//             name="Emaill"
//             placeholder="Enter your Email "
//             onChange={inputEventt}

//           />
//           <br />
//           <button className="btnn" type="submit">
//             Click Me
//           </button>
//         </div>
//       </form> */}

//         {/* #37: React Login Form Challenge in React */}

//       {/* <form onSubmit={onsubmittMultiple}>
//         <div>
//           <h1> Hello  {Fullname.fname} {Fullname.lname}</h1>
//           <p>{Fullname.Email}</p>
//           <p>{Fullname.Phonee}</p>
//           <input
//             className="input"
//             type="text"
//              name="Fname"
//             placeholder="Enter your First Name "
//             onChange={inputEventt}
//             value={Fullname.fname}

//           />
//           <br />
//           <input
//             className="input"
//             type="text"
//             name="Lname"
//             placeholder="Enter your Last Name"
//             onChange={inputEventt}
//             value={Fullname.lname}

//           />
//           <br />
//           <input
//             className="input"
//             type="email"
//             name="Emaill"
//             placeholder="Enter your Email "
//             onChange={inputEventt}
//             value={Fullname.Email}

//           />
//           <br />
//           <input
//             className="input"
//             type="number"
//             name="Phonee"
//             placeholder="Enter your number "
//             onChange={inputEventt}
//             value={Fullname.Phonee}

//           />
//           <br />
//           <button className="btnn" type="submit">
//             Click Me
//           </button>
//         </div>
//       </form> */}

//       {/* #39: How I turn 100 lines of code in just 2 lines to Complete Our Login Form */}

//        <form onSubmit={onsubmittMultiple}>
//         <div>
//           <h1> Hello  {Fullname.fname} {Fullname.lname}</h1>
//           <p>{Fullname.Email}</p>
//           <p>{Fullname.Phonee}</p>
//           <input
//             className="input"
//             type="text"
//              name="fname"
//             placeholder="Enter your First Name "
//             onChange={inputEventt}
//             value={Fullname.fname}

//           />
//           <br />
//           <input
//             className="input"
//             type="text"
//             name="lname"
//             placeholder="Enter your Last Name"
//             onChange={inputEventt}
//             value={Fullname.lname}

//           />
//           <br />
//           <input
//             className="input"
//             type="email"
//             name="Email"
//             placeholder="Enter your Email "
//             onChange={inputEventt}
//             value={Fullname.Email}

//           />
//           <br />
//           <input
//             className="input"
//             type="number"
//             name="Phonee"
//             placeholder="Enter your number "
//             onChange={inputEventt}
//             value={Fullname.Phonee}

//           />
//           <br />
//           <button className="btnn" type="submit">
//             Click Me
//           </button>
//         </div>
//       </form>

//     </>
// }

// export default App;

// #44 Building a Todo List App Project in ReactJS

// const App = () => {
//   const [InputList, setInputList] = useState();
//   const [itemssdasdas, Setitems] = useState([]);
//   const inputEvent = (event) => {
//     setInputList(event.target.value);
//   };

//   const ListOfitems = () => {
//     Setitems((olditems) => {
//       return [...olditems, InputList];
//     });
//   };
//   const deleteItems = (id) => {

//     Setitems((olditems)=>
//     {
//         return olditems.filter((arrele, index)=>
//         {
//             return index !== id;
//         }

//         );

//     });

//   };

//   return (
//     <>
//       <div className="Main_Div">
//         <div className="center_DIv">
//           <br />
//           <h1 className="Heading"> ToDo List</h1>
//           <input
//             type="text"
//             placeholder="Add Items"
//             className="input"
//             onChange={inputEvent}
//           />
//           <button className="btnn" onClick={ListOfitems}>
//             +
//           </button>
//           <ol className="oll">
//             {/* <li>{InputList}</li> */}

//             {itemssdasdas.map((itemVal, index) => {
//               return (
//                 <TodoList
//                   key={index}
//                   id={index}
//                   text={itemVal}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// Video 45 React Challenge #8: Incrementing and Decrementing the State Variable on Button clicked in React JS

// const App = ()=>
// {

//   const[num , setnum] = useState(0)

//   const IncNum = ()=>
//   {

//     setnum(num + 1);

//   }

//   const DecNum =()=>
//   {

//     if(num > 0)
//     {
//       setnum( num -1 );
//     }
//     else if (num <= 0)
//     {
//       alert(`Number Is Already 0`);
//       setnum(0);
//     }

//   }

//   return <>
//       <div className="Mainnnn">
//         <div className="Center">
//           <h1 className="h111">{num}</h1>
//           <div className="btn_div">
//             <button onClick={IncNum}>Increment</button>
//             <button onClick={DecNum}>Decrement</button>
//           </div>
//         </div>
//       </div>

//   </>
// }

// export default App;

// #42 How to use Material UI Icons in React App

// const App = ()=>
// {

//   const[num , setnum] = useState(0)

//   const IncNum = ()=>
//   {

//     setnum(num + 1);

//   }

//   const DecNum =()=>
//   {

//     if(num > 0)
//     {
//       setnum( num -1 );
//     }
//     else if (num <= 0)
//     {
//       alert(`Number Is Already 0`);
//       setnum(0);
//     }

//   }

//   return <>
//       <div className="Mainnnn">
//         <div className="Center">
//           <h1 className="h111">{num}</h1>
//           <div className="btn_div">
//             <Button onClick={IncNum}><AddIcon /></Button>
//             <Button  onClick={DecNum}><RemoveSharpIcon /></Button>
//           </div>
//         </div>
//       </div>

//   </>
// }

// export default App;

// #43 The Best UI Framework for ReactJS - Getting Started with Material UI

// const App = ()=>
// {

//   const[num , setnum] = useState(0)

//   const IncNum = ()=>
//   {

//     setnum(num + 1);

//   }

//   const DecNum =()=>
//   {

//     if(num > 0)
//     {
//       setnum( num -1 );
//     }
//     else if (num <= 0)
//     {
//       alert(`Number Is Already 0`);
//       setnum(0);
//     }

//   }

//   return <>
//       <div className="Mainnnn">
//         <div className="Center">
//           <h1 className="h111">{num}</h1>
//           <div className="btn_div">
//           <Tooltip title="ADD">
//           <Button onClick={IncNum}><AddIcon /></Button>
//           </Tooltip>
//             <Tooltip title="Delete">
//             <Button  onClick={DecNum}><RemoveSharpIcon /></Button>
//             </Tooltip>

//           </div>
//         </div>
//       </div>

//   </>
// }

// export default App;

// // #44 NPM (Node Package Manager) in 10 Minutes with One Mini Project
// const App = ()=>
// {
//   return <>

//       <h1><Clock/></h1>

//   </>
// }

// export default App;

//#45 React Project using Material UI Free Code: Create ToDo List App in React
// const App = () => {

//     const [itemm ,SetItem] = useState();
//     const [newitem , setnewitem]  = useState([]);
//     const Additem = (event)=>
//     {

//       SetItem(event.target.value);
      
//     };

//     const Addlistitem = ()=>
//     {
//       setnewitem((prevalue )=>
//       {
//           return[...prevalue , itemm ];
//       });

//       SetItem(" ");

//     }

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input value={itemm} onChange={Additem} type="text" placeholder="Please Enter Item" />
//           <Button variant="contained" className="newBtn" onClick={Addlistitem}>
//             <AddIcon />
//           </Button>
//           <br />
//           <ol>
//           {
//             newitem.map((value , Index)=>
//             {
//               return <ListCompo  key={Index} text={value} />
//             })
//           }
            
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

//#47 How to Install and Use Bootstrap 4 in React JS



// const App = () =>
// {

//   return <>

// <form>
//   <div className="form-row">
//     <div className="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
//     </div>
//     <div className="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
//     </div>
//   </div>
//   <div className="form-group">
//     <label for="inputAddress">Address</label>
//     <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
//   </div>
//   <div className="form-group">
//     <label for="inputAddress2">Address 2</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
//   </div>
//   <div className="form-row">
//     <div className="form-group col-md-6">
//       <label for="inputCity">City</label>
//       <input type="text" className="form-control" id="inputCity" />
//     </div>
//     <div className="form-group col-md-4">
//       <label for="inputState">State</label>
//       <select id="inputState" className="form-control">
//         <option selected>Choose...</option>
//         <option>...</option>
//       </select>
//     </div>
//     <div className="form-group col-md-2">
//       <label for="inputZip">Zip</label>
//       <input type="text" className="form-control" id="inputZip" />
//     </div>
//   </div>
//   <div className="form-group">
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck" />
//       <label className="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <button type="submit" className="btn btn-primary">Sign in</button>
// </form>

//   </>
// }

// export default App;


const App = ()=>{

  return<>
   <h1>Helooooo</h1>

  </>
}

export default App;