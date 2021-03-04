import React from "react";

// const About = ()=>
// {
//     return (
//         <>
//           <div style={{ marginTop: "60px" }}>
//             <h1>Hello! I'm About Page</h1>
//             <h1>Hello! I'm About Page</h1>
//           </div>
//         </>
//       );
// }

// #58 React Route Render Method | Difference between Render and Component Prop on React Router

const About = (props) => {
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <h1>Hello! I'm {props.name} Page</h1>
       
      </div>
    </>
  );
};

export default About;
