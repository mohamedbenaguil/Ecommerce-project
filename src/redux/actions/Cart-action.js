export const addItem = (product,quantity) => {
    return {
        type : "ADDITEM",
        payload : {product,quantity}
    }
}

export const delItem = (id) => {
    return {
        type : "DELITEM",
        payload : {id}
    }
}