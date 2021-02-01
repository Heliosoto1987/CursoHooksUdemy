import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
import '../08-useReducer/reducer.css'
import { TodoList } from './coponents/TodoList'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [ { description }, handLeInputChange, reset ] = useForm({
        description: '',
    })


    const [ todos, dispach ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) )


    },[ todos ]);

    const handLeDelete = (valueId) => {
          
            const action = {
                type: 'delete',
                payload: valueId
            }

        dispach( action );
    } 

    const handLeToggle = (valueId) => {
        
        dispach({
            type: 'toggle',
            payload: valueId
        })

    }


    const handLeSubmit = (e) => {
        e.preventDefault()

        if(description.trim().length <= 2) {
            return 
        }

        const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispach( action );
        reset()
    }


    return (
        <div>
            <h1> TodoApp ({ todos.length }) </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                <TodoList
                todos={ todos }
                handLeToggle={ handLeToggle }
                handLeDelete={ handLeDelete }
                />

                </div>

                <div className="col-5">

                        <h4> Agregar tareas </h4>
                        <hr />

                        <form onSubmit={ handLeSubmit }>

                            <input 
                            type="text"
                            onChange={ handLeInputChange }
                            className="form-control"
                            name="description"
                            placeholder="Nueva tarea"
                            autoComplete="off"
                            value={ description }
                            />

                            <button 
                                type="submit"
                                className="btn btn-outline-primary mt-2 btn-block"
                            >
                            
                                Agregar

                            </button>

                        </form>

                </div>

            </div>

           
        </div>
    )
}


// const [state1, setState1] = useState( {
//     claro: '',
//     email: '',
//  } )

//  const { claro, email } = state1;

// const handLeInputChange = (e) => {
        
//     setState1( {
//         ...state1,
//         [ e.target.name ]: e.target.value

         
//     })
// }
