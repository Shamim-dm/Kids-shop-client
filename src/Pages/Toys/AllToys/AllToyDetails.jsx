import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AllToyDetails = () => {
    const toy = useLoaderData()
    const params = useParams()
    console.log(toy, params)
    return (
        <div>
            jkljgtrk
        </div>
    );
};

export default AllToyDetails;