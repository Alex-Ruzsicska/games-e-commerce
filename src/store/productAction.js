import { ADD_PRODUCT, DELETE_PRODUCT } from "./taskTypes"

export const addProduct = (product) => ({type: ADD_PRODUCT, payload: product})

export const deleteProduct = (id) => ({type: DELETE_PRODUCT, payload: id})