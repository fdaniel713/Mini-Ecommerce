import { getAllProducts } from "../../../app/Services/productCartServices";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"


const getAllProductsAction = (products)=> ({type: GET_ALL_PRODUCTS, payload: products})

 const filterProducts = (products) => ({type: FILTER_PRODUCTS, payload: products})


export const allProductS = () =>{
    return async dispatch => {
        try{
            const products= await getAllProducts()
            dispatch(getAllProductsAction(products))
        } catch(err){
            console.log(err)
        }
    }
}

export const filterByCategory = (category) =>{
    return (dispatch, getSate)=>{
      const state= getSate()
        
      const {products}= state.productsReducer
      const filtered = products.filter((product) => product.category === category)
      dispatch(filterProducts(filtered))
    }

}