import React from 'react';



const Contact = (props)=>
{
    return (
        <>
          <div style={{ marginTop: "60px" }}>
            <h1>Hello! I'm {props.name} Page</h1>
            <h1>Hello! I'm {props.name}</h1>
          </div>
        </>
      );
}

export default Contact;
