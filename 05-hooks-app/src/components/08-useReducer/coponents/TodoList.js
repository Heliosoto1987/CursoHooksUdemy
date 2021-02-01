import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handLeDelete, handLeToggle }) => {
    return (
        <ul className="list-group list-group-flush">
                        
            {
                todos.map( ( value, i) => (
                
                <TodoListItem 
                key={ value.id }
                handLeDelete={ handLeDelete }
                handLeToggle={ handLeToggle }
                value= { value }
                i= { i }


                />
        
                ))

            }

        </ul>
    )
}
