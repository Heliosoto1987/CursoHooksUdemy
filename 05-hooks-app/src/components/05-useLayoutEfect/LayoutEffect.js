import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './Layaout.css'

export const Layout = () => {

    const { counter, increment } = useCounter()
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0]

    return (

        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-center">
                <p className="">{ quote }</p>
            </blockquote>


        <button onClick={ increment} className="btn btn-primary">
            Siguiente Quote
        </button>

        </div>
    )
}
