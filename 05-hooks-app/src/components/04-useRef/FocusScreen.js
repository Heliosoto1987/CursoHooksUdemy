import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handLeClick = () => {

        inputRef.current.select();

    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Helio"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handLeClick }
            >
                Focus
            </button>
        </>
    )
}
