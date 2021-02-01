// import React, { useCallback, useState } from 'react'
// import '../02-useEffect/effect.css'
// import { ShowIncrement } from './ShowIncrement';

// export const CallBackHook = () => {

//     const [state, setState] = useState( 10 );


//     const increment = () => {
//         setState( state + 1 );
//     }

//     useCallback(
//         () => {
//             setState( state + 1 );
//         },
//         [],
//     )

//     return (
//         <>
//             <h1>UseCallback Hook { state }</h1>
//             <hr />

//             <ShowIncrement increment={ increment } />
//         </>
//     )
// }
