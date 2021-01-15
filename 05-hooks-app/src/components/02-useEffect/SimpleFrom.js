import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';


export const SimpleFrom = () => {

    const [fromState, setfromState] = useState({
        name: '',
        email: '',
    })

    const { name, email } = fromState;


    useEffect( () => {
   
    }, [] );

    useEffect( () => {
     
    }, [fromState] );

    useEffect( () => {
    
    }, [email] );

    const handLeInputChange = ({ target }) =>{
        setfromState({
            ...fromState,
            [ target.name ]: target.value,
            [ target.email ]: target.value
        })

    }

    return (
        <>

        <h1>useEffect</h1>
        <hr />

        <div className="form-gruop">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                autoComplete="off"
                value={ name }
                onChange={ handLeInputChange }
                >
                </input>
        </div>


        <div className="form-gruop">
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handLeInputChange }
                >
                </input>
        </div>

        { (name === '123') && <Message />}
            
        </>
    )
}
