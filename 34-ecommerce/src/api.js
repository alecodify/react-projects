const url = 'https://fakestoreapi.com/products'

export const fetchAllProducts = async () => {
        const response = await fetch(url);
        const responseBody = await response.json();
        return responseBody;
}

export const fetchProductsBySearchQuery = async (query) => {
        const response = await fetch(url);
        const responseBody = await response.json();
        return responseBody.filter((product) => product.title.toLowerCase().includes(query))
}

export const fetchProductById = async (productId) => {
        const response = await fetch(`${url}/${productId}`);
        const responseBody = await response.json();
        return responseBody;
}

//  /api = https://fakestoreapi.com/products