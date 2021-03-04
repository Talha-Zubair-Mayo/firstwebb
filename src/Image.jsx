import React from 'react';

const Image = (props)=>
{
    const  img =`https://source.unsplash.com/600x400/?${props.name}`;
    return<>

       <div style={{marginLeft:"280px"}}>
       <img src={img} alt="" style={{alignSelf:"center"}}/>
       </div>

    </>
}

export default Image;