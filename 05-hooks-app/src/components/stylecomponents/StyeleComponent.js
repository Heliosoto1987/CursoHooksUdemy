import styled from 'styled-components'
import '../../variablesglobales/variable'
import { variablesGlobales } from '../../variablesglobales/variable'

const { colorPink } = variablesGlobales
// const colorRed = 'red'
const colorBlue = 'blue'

export const FirstDiv = styled.div`
background-color: ${colorPink};


&:hover {
 background-color: ${colorBlue}
}

`


 
