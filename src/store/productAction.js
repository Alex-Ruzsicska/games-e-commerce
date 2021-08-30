import { SUM_PRODUCT, SUBTRACT_PRODUCT, DELETE_PRODUCT } from "./productTypes"

export const sumProduct = (id) => ({type: SUM_PRODUCT, payload: id})

export const subtractProduct = (id) => ({type: SUBTRACT_PRODUCT, payload: id})

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id})