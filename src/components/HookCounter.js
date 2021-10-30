import React, { useState } from "react"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

    return ( <button onClick={increase}>{count} upvotes</button>
    ) 
}

export default Counter; 






// ******
// function Counter(props) {
//   const [count, setCount] = useState(0);
//   return (
//       <div>
//         <h1> hello </h1> 
//         <button onClick={handleIncrement}></button>
//         <h5>{count} upvotes</h5>
//       </div>
//   )
// }

// const handleIncrement = () => {
//   setCount(prevCount => prevCount +1);
// }

// export default Counter; 