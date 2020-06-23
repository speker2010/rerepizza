export function getCount(store) {
    let { basket } = store;
    return Object.getOwnPropertyNames(basket).filter(item => basket[item].count > 0).length;
}

export function getProducts(store) {
    console.log(store);
    let { products } = store;
    return products;
}

export function getBasket(store) {
    let { basket } = store;
    return basket;
}