import React, { useState } from 'react';
import Image from "./Image";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Search = ()=>
{
        const [Img , setImg] = useState("");


    const Inputtt = (event)=>
    {
        let data = event.target.value;

        console.log(data);

        setImg(data);

    }

    return <>

        <div className="Search_Bar">
        <input type="text" placeholder="Please Enter Your Name"

            onChange={Inputtt}
            value={Img}

         />
        </div>
       
        {Img ==="" ? null : <Image name={Img} />}
   

    </>
}

export default Search;