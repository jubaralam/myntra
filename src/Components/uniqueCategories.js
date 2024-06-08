import { allProducts } from "../data";

export const uniqueCategories = allProducts.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
        categories.push(product.category);
    }
    return categories;
}, []);