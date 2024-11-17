import React, { useState } from 'react';


const UseStateExample = () => {
    // Initialize state with a value of 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            {/* Update state using setCount */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );

}

export default UseStateExample;