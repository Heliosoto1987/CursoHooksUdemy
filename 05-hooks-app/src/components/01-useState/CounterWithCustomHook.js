import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../01-useState/counterapp.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(  );

    return (
        <>
        <h1>Cuantos años tiene neidy { state } </h1>
        <hr />
        <button onClick={ increment } className="btn btn-primary"> + 1 </button>
        <button onClick={ reset } className="btn btn-primary"> Reset </button>
        <button onClick={ decrement } className="btn btn-primary"> - 1 </button>
        </>
    )
}
