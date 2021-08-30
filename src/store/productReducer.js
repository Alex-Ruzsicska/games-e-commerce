import { SUM_PRODUCT, SUBTRACT_PRODUCT, DELETE_PRODUCT } from "./productTypes";
import PRODUCTS from '../mock/products';

const initialState = {
    products: PRODUCTS.map((product)=>({...product, amount: 0}))
};

const productReducer = (state =  initialState, action) => {

    switch(action.type){
        case SUM_PRODUCT:
            return{
                ...state,
                products: state.products.map((product)=>{
                    if(product.id == action.payload)
                        product.amount++;
                    return product;
                })
            }
        case SUBTRACT_PRODUCT:
            return{
                ...state,
                products: state.products.map((product)=>{
                    if(product.id == action.payload)
                        product.amount = product.amount > 0? product.amount - 1 : 0;
                    return product;
                })
            }
        case DELETE_PRODUCT:
                return{
                    ...state,
                    products: state.products.map((product)=>{
                        if(product.id == action.payload)
                            product.amount = 0;
                        return product;
                    })
                }
        default:
            return state;
    }

}

export default productReducer;