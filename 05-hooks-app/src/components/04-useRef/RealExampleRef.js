import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-Example/MultipleCustomHooks'

const RealExampleRef = () => {

    const [ show, setShow ] = useState( false );

    return (
        <>
            <h1>Real Example Ref</h1>   
            <hr/>

            { show && <MultipleCustomHooks />}

            <button 
            className="btn btn-primary mt-5"
            onClick={ () =>  {
                setShow( !show )
            }}
            >
                Show/Hide
            </button>
            
        </>
    )
}

export default RealExampleRef
