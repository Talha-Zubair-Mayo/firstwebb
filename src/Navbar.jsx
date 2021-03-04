import React from "react";
import {Link , NavLink} from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           React
//         </a>
//         <div className=" navbar-collapse" id="navbarText">
//         <span style={{marginRight:"5px"}}> Reloading Using Anchor Tag:</span>
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item ">
//               <a className="nav-link" href="/">
//                 Home <span className="sr-only">(current)</span>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/About">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/Contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <span style={{marginRight:"5px"}}>Without Reloading Using Link:</span>
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home <span className="sr-only">(current)</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/About">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <span style={{marginRight:"5px"}}>Without Reloading <small>activeClas</small>:</span>
//           <ul className="navbar-nav mr-auto">
//             <li   className="nav-item ">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/">
//                 Home <span className="sr-only">(current)</span>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink  exact activeClassName="Active_Class" className="nav-link" to="/About">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/Contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           React
//         </a>
//         <div className=" navbar-collapse" id="navbarText">
//         <span style={{marginRight:"200px"}}></span>
//         <ul className="navbar-nav mr-auto">
//             <li   className="nav-item ">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/">
//                 Home <span className="sr-only">(current)</span>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink  exact activeClassName="Active_Class" className="nav-link" to="/About">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/Contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
        
//          </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// #57 useParams Hooks in React Router 

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="/">
//           React
//         </a>
//         <div className=" navbar-collapse" id="navbarText">
//         <span style={{marginRight:"200px"}}></span>
//         <ul className="navbar-nav mr-auto">
//             <li   className="nav-item ">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/">
//                 Home <span className="sr-only">(current)</span>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink  exact activeClassName="Active_Class" className="nav-link" to="/About">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/Contact">
//                 Contact
//               </NavLink>

//             </li>
//             <li className="nav-item">
//               <NavLink exact activeClassName="Active_Class" className="nav-link" to="/User">
//               User
//               </NavLink>

//             </li>

            
//           </ul>
        
//          </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// #62 Live Search Filter using Hooks & Router in React JS


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          React
        </a>
        <div className=" navbar-collapse" id="navbarText">
        <span style={{marginRight:"50px"}}></span>
        <ul  className="navbar-nav mr-auto " style={{marginLeft:"0px"}}>
            <li   className="nav-item ">
              <NavLink exact activeClassName="Active_Class "  className="nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item navvvv ">
              <NavLink  exact activeClassName="Active_Class" className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item navvvv ">
              <NavLink  exact activeClassName="Active_Class" className="nav-link" to="/Search">
                Search
              </NavLink>
            </li>
            <li className="nav-item navvvv ">
              <NavLink exact activeClassName="Active_Class" className="nav-link" to="/Contact">
                Contact
              </NavLink>

            </li>
            <li className="nav-item navvvv ">
              <NavLink exact activeClassName="Active_Class" className="nav-link" to="/User">
              User
              </NavLink>

            </li>

            
          </ul>
        
         </div>
      </nav>
    </>
  );
};

export default Navbar;