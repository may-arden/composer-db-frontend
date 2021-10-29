import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useState } from 'react-hook-use-state';
// import React, { useState } from 'react'; 
import Counter from './Counter'


   
const Composers = ({ composers }) => {
   return (
        <div className='cat_composers'>
          <h4> choose a composer </h4>
            
             
            {composers.map(indivComposer => <div key={indivComposer.id}>
                <br/> 
                  <p>
                    <Link to={`/categories/${indivComposer.category_id}/composers/${indivComposer.id}`}>
                        
                        <button>{indivComposer.name}</button> 
                    </Link>
                    {/* <button onClick={handleClick}> (this many) upvotes </button> */}
                    <Counter /> 
                  </p> 
                </div>)}
        </div>    
    )
}

const mapStateToProps =  state => {
  // debugger 
    return { composers: state.composers}
}

// const handleChange = e => {
//   let count = 0

// }

const handleClick = () => {
    console.log("we've been clicked!")
    // debugger
    // onClick={this.handleChange}
    // console.log
}

// function Counter(props) {
//   const [count, setCount] = useState(0);
//   return (
//       <div>
//         <button onClick={handleIncrement}></button>
//         <h5>{count} upvotes</h5>
//       </div>
//   )
// }

// const handleIncrement = () => {
//   setCount(prevCount => prevCount +1);
// }

// const Counter = (props) => {
//   const [count, setCount] = useState(0)
//   return (
//     <div id="mainArea">
//       button count: <span>{count}</span>
//       <button id="mainButton" onClick={() => {setCount(count +1)}}>upvotes</button>
//     </div>
//   )
// }

{/* <input type="number" className="upvote" onChange={event => increaseValue(event.target.value)} value={value}/>
<button onClick={increaseVote}> upvote </button> */}

export default connect(mapStateToProps)(Composers); 
