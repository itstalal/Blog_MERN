import React, { useState, useEffect } from 'react';

const UseEffectExample = () =>  {
  // State hook for managing the count value
  const [count, setCount] = useState(0);

  // Effect hook that runs after every render
  useEffect(() => {
    console.log('Component rendered or updated!');

    // // Optional cleanup function (not needed here, but this is where you would put it if necessary)
    // return () => {
    //   console.log('Cleanup if necessary');
    // };
  });

  // Effect hook that only runs when 'count' changes
  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]); // Dependency array with 'count', triggers only on count changes

  return (
    <div>
      <h1>useState and useEffect Example</h1>
      <p>You clicked {count} times</p>
      {/* Button to update the count state */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseEffectExample;
