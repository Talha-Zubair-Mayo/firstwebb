import React from 'react';

function Add(a,b){
    
    let add = a+b;
    return add;
}

function Sub(a,b){
    
    let Sub = a-b;
    return Sub;
}
function mul(a,b){
    
    let Multi = a*b;
    return Multi;
}
function Dev(a,b){
    
    let div = a/b;

    div = div.toFixed(2);
    return div;
}

export default Add ;

export {Sub , mul , Dev};
