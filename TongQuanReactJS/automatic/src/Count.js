import React, { useState } from 'react';

function Count (props) {
    const  [count , setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick = {handleClick}  >handleClick</button>
        </div>
    );
}

export default Count ;