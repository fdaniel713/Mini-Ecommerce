
const baseUrl = process.env.REACT_APP_FAKE_STORE_API
const productUrl = `${baseUrl}/products`


const routes = {
    getAllProducts: () => productUrl,
    getProductsById: (idProduct) => `${productUrl}/${idProduct}`,
    addProduct:()=> productUrl,
    getAllCategories: ()=> `${productUrl}/categories`,
    getProductsByCategories: (category) => `${productUrl}/category/${category}`
}

export default routes;