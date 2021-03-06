import { CoursesOnDeal } from "../../../types";

export const addToCart = (payload: CoursesOnDeal[]) => {
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const addSubTotal = (payload: number) => {
  return {
    type: "ADD_SUBTOTAL",
    payload,
  };
};

export const addTotal = (payload: number) => {
  return {
    type: "ADD_TOTAL",
    payload,
  };
};
export const addDiscount = (payload: number) => {
  return {
    type: "ADD_DISCOUNT",
    payload,
  };
};

export const addCoupon = (payload: boolean) => {
  return {
    type: "USE_CUPON",
    payload,
  };
};
export const decreaseItemPrice = (payload: string) => {
  return {
    type: "DECREASE_PRICE",
    payload,
  };
};


export const removeFromCart = (payload:string) => {
  return {
      type: 'REMOVE_CART_ITEM',
      payload
  }
}
export const addCertificate = (payload:number) => {
  return {
      type: 'ADD_CERTIFICATE',
      payload
  }
}
