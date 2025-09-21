import React, {useState} from "react"; 
function First(props)
{ const [count , Setcount] = useState (props.start)
   return(
     <div>
       <h1> count is {count}</h1> 
       
       <button onClick={() => Setcount(count - 1)}>  decrease </button> 
        <button onClick={() => Setcount(count + 1)}> increase </button> 
         <button onClick={() => Setcount(props.start)}> reset </button> 
       </div> 
       );
        } export default First;