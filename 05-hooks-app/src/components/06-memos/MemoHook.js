import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'


export const MemoHook= () => {

    const { counter, increment } = useCounter( 500 );
    const [show, setShow] = useState(true);
    console.log(counter)

    const procesoPesado = ( iteraciones ) => {

        for (let i = 0; i < iteraciones; i ++) {
            console.log('Ahi vamos.....')
            
        }

        return `${ iteraciones } iteraciones realizadas.`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])


    return (
        <>
        <h1>MemoHook</h1>
        <h3>Counter: <small>{ counter } </small> </h3>
           <hr/> 

           <p> { memoProcesoPesado } </p>

           <button className="btn btn-secondary margen" onClick={  increment }>
               +1
           </button>

           <button className="btn btn-primary " onClick={ () => { setShow( !show );}}>
               Show/Hide: {JSON.stringify( show )}
           </button>
        </>
    )
}
