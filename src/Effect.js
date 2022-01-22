import React from 'react'
import { useState,useEffect } from 'react'
const Effect=()=>{

const [Size, setSize] = useState(0);
const checksize=()=>{
    setSize(window.innerWidth);

}
useEffect(() => {
    window.addEventListener('resize',checksize);
    return () => {
        window.removeEventListener('resize',checksize);
    }
},[])
    return(
        <div >
            <h1 >Size of Wondow</h1>
            <h5>{Size} px</h5>
        </div>
    );

}

export default Effect;