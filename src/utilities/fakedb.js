const removeFromDb = id => {
    const shoppingCart = getAppliedJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getAppliedJobs = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    removeFromDb,
    getAppliedJobs,
    deleteShoppingCart
}