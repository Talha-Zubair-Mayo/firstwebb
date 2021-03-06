import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const ListCompo = (props)=>
{
    const [line , setLine] = useState(false);

    const cut = ()=>
    {
        setLine(true)

    }
    return (
        <div className="todo_style">
        <span><DeleteIcon className="deleteIcon" onClick={cut}/></span>
        <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </div>
    );

};

export default ListCompo;