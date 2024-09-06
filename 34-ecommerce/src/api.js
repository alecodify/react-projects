// const url = 'https://fakestoreapi.com/products' // api does not working 

// export const fetchAllProducts = async () => {
//         const response = await fetch(url);
//         const responseBody = await response.json();
//         return responseBody;
// }

// export const fetchProductsBySearchQuery = async (query) => {
//         const response = await fetch(url);
//         const responseBody = await response.json();
//         return responseBody.filter((product) => product.title.toLowerCase().includes(query))
// }

// export const fetchProductById = async (productId) => {
//         const response = await fetch(`${url}/${productId}`);
//         const responseBody = await response.json();
//         return responseBody;
// }

import { data } from '../data';

export const fetchAllProducts = async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return data;
}

export const fetchProductsBySearchQuery = async (query) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}

export const fetchProductById = async (productId) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        const id = Number(productId);
        return data.find(product => product.id === id);
}
