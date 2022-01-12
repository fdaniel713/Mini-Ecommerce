import api from "../clients/api"
import routes from "../routes/fakeStoreRoute"

export const getAllProducts =async ()=> {
    return api.get(routes.getAllProducts())
}

export const getProductById = async (idProduct) => {
    return api.get(routes.getProductById(idProduct))
}
export const addNewProducts = async (product) => {
    return api.post(routes.addProducts(),product)
}

export const getAllCategories = async () => {
    return api.get(routes.getAllCategories())
}

export const getProductsByCategories = async (category) => {
    return api.get(routes.getProductsByCategories(category))

}