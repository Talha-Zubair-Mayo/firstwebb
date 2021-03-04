import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';

// const User =({match})=>
// {

//     return<>

//         <h1>Hello! <span style={{color:"red"}}> {match.params.name}</span> Welcome here</h1>

//     </>
// }


const User =()=>
{
    
    const {name , lname} = useParams();

    //#60 useLocation Hook in React Router 

    const location = useLocation();
    // console.log(location);

   // #61 useHistory Hook in React Router
   const history = useHistory();
   console.log(history);

    return<>

        <h1>Hello! <span style={{color:"red"}}>{name} {lname} </span> Welcome here</h1>

        <p>My Current Location Is {location.pathname}</p>

        {location.pathname === "/User/talha/zubairMayo" ? (
                 <>
            <button onClick={()=>
            {
                alert(`My Location iS ${location.pathname}`);
            }}>Click Me</button>
            <br/>
            <button onClick={()=> history.goBack()}>Click Me To go Back </button>
            </>
        ) : null}

    </>
}

export default User;