export const sumQuantities = (products) => {
    if (!products.length) return 0;
    const totalAmount = products.reduce((ac, product) => {
        return ac + product.quantity;
    }, 0);
    return totalAmount;
};

