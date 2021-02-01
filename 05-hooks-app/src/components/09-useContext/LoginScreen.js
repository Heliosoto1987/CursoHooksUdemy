import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const LoginScreen = () => {

    const  handLeChange = () =>{
        setUser({
            id: 123,
            nombre: 'Helio'
        })
    }


    const {  setUser }= useContext( UserContext ); 

    console.log( setUser )

    return (
        <div>
            <h1> LoginScreen </h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={ handLeChange }
            >

            Agrego Objeto

            </button>
        </div>
    )
}
