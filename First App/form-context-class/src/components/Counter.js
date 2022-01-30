import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counter:0,
        number:10,
        price:12.3
     }
     //to access state now we need this keyword 
    render() { 
        return (
            <div>
               <button onClick={() => {
            this.setState((state) => ({ counter: state.counter + 1 }));
            // console.log("incremented");
          }}>
                   Increment
               </button>{"  "}
               <span style={{color:"red",fontSize:"20px"}}>
               {this.state.counter}
               </span>
               {"  "}

               <button onClick={() => {
            this.setState((state) => ({ counter: state.counter - 1 }));
            // console.log("Decremented");
          }}>
                    Decrement
               </button>
            </div>
        );
    }
}
 
export default Counter;