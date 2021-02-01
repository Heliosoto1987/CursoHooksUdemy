import React from 'react'

export const TodoListItem = ({ handLeDelete, handLeToggle, i, value }) => {
    return (
        <li 
            key={ value.id }
            className="list-group-item"
            > 
            <p 
            onClick={ () => handLeToggle(value.id) }
            className={ `${value.done && 'complete'}   `}> 
            { i + 1 }. { value.desc } 
            </p>

            <button 
            className="btn btn-danger"
            onClick={ () => handLeDelete(value.id) }
            >
                Borrar
            </button>

            </li>
    )
}
