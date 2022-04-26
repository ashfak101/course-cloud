

export const addToCart=(payload:{}[])=>{
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export const addSubTotal=(payload:number)=>{
    return {
        type:'ADD_SUBTOTAL',
        payload
    }
}

export const addTotal = (payload:number) => {
    return {
        type: 'ADD_TOTAL',
        payload
    }
}
export const addDiscount = (payload:number) => {
    return {
        type: 'DISCOUNT_PRICE',
        payload
    }
}