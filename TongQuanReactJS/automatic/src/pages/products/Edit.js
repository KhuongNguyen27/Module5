import React from 'react';
import { useParams } from 'react-router-dom';

function Edit(props) {
    let params = useParams();
    return (
        <div style={{ padding: "1rem 0" }}>
            <h2>Edit</h2>
            <p>Id: {params.id}</p>
        </div>
    );
}

export default Edit;