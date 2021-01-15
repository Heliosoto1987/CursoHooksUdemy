import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effect.css'


export const FormWithCustomHook = () => {


    const [formValues, handLeInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

useEffect(() => {
    console.log('email cambio')
}, [email]);

const handLeSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)


}
   


    return (
        <form onSubmit={handLeSubmit}>

        <h1>FormWithCustomHook</h1>
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

        <div className="form-gruop">
            <input
                type="text"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                autoComplete="off"
                value={ password }
                onChange={ handLeInputChange }
                >
                </input>
        </div>

        <button type="Submit" className="btn btn-primary">
            Guardar
        </button>

            
        </form>
    )
}
