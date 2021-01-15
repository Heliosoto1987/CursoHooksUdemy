import React, { useState } from 'react'
import './counterapp.css'

export const CounterApp = () => {
 
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
    })

    const { counter1, counter2 } = state
    return (
        <>
            <h1>CounterApp</h1>
            <hr/>
            <h2>{counter1}</h2>
            <h2>{counter2}</h2>
            <button 
            className="btn btn-primary" 
            onClick={ () =>
                setState( {
                    counter2: counter2 + 4,
                    counter1: counter1 + 1, 
                })
            }>+1</button>
        </>
    )
}














































// import React, { useState } from 'react';
// import './counterapp.css';

// export const CounterApp = () => {

//      const [state, setState] = useState({
//          counter1: 10,
//          counter2: 20,
//          counter3: 30,
//      })
//      console.log(state)
//      const { counter1, counter2} = state
//     return (
//         <>
//         <h1>Counter { counter1 }</h1>
//         <h1>Counter { counter2 }</h1>

//         <hr></hr>
//         <button 
//         className="btn btn-primary"
//         onClick={ () =>{
//             setState({
//                 ...state,
//                 counter1: counter1 + 1,
//                 counter2: counter2 + 2
//             })
//         }}
//         >
//             +1
//         </button>
            
//         </>
//     )
// }
