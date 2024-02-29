import { useState } from 'react'

export const useCount = (initialState, min, max) => {
    const [valor, setValor] = useState(initialState)

    const increase = () => {
            valor < max && setValor(valor + 1);
        }
        const decrease = () => {
            valor > min && setValor(valor - 1);
        }
        const clear = () => {
            setValor(0)
        }

    return {increase, decrease, clear, valor}

}
