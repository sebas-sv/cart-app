//import { products } from "../data/products"

export const getProducts = async () => {
    const response = await fetch('http://localhost:8080/products');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula tiempo de respuesta
    const products = await response.json();

    return products;
}

export const getTotal = (items) => {
    // return items
    //     .reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0)

    return items
        .map(item => item.product.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
