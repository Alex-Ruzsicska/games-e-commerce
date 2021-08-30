import { ADD_PRODUCT, DELETE_PRODUCT } from "./productTypes";

const initialState = {
    products: []
};

const productReducer = (state =  initialState, action) => {

    switch(action.type){
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
                return{
                    ...state,
                    products: state.products.filter(item => item.id != action.payload)
                }
    }

}

export default productReducer;