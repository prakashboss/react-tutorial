import React, { useState } from 'react';

const CountHook = () => {
    console.log(useState(2));
    const [count, setCount] = useState(0);
    return ( <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>CountIncrement</button>
                <button onClick={() => setCount(count - 1)}>CountDecrement</button>




    </div> );
}
 
export default CountHook;