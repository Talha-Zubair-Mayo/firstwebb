import React from 'react';
import { useHistory } from 'react-router-dom';

const Error = ()=>
{
        const history = useHistory();
    return<>
        <div className="body">

        <h1 className="h111">404</h1>
        <p className="Para">Oops! Something is wrong.</p>
        <a className="button" onClick={()=>{return history.goBack()}}><i className="icon-home"></i> Go back in initial page, is better.</a>
        </div>
        

    </>
}

export default Error;