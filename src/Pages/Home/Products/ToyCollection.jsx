import React, { useState } from 'react';
import { useEffect } from 'react';

const ToyCollection = () => {

const [toys, setToys] = useState([])

useEffect( ()=>{
    fetch('http://localhost:5000', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => {
        setToys(data)
    } )
console.log(toys)


} ,[])

    return (
        <div>
            
        </div>
    );
};

export default ToyCollection;