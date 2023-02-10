import React, { createContext, Dispatch, SetStateAction } from 'react'

type ShoppingCartContextType = {
    items: {
        [key: number]: number
    },
    setItems: (items: object) => void
}

const ShoppingCartContext = createContext<ShoppingCartContextType>({
    items: {},
    setItems: () => { }
})

export default ShoppingCartContext