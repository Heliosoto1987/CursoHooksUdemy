import { useState } from "react"


export const useForm = (initialState = {} ) => {

    const [values, setValues] = useState(initialState)

        const handLeInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
        
        })
      
    }
    return [ values, handLeInputChange]

}