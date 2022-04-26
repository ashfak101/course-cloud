
const initialState={
    cart:[],
    subTotal:0,
    total:0,
    disCountPrice:0,
}
interface CartState {
    cart:{}[];
    subTotal:number;
    total:number;
    disCountPrice:number
}

export const cartReducer=(state:CartState=initialState,action:any)=>{
      switch(action.type){
          case "ADD_TO_CART":
              return{
                  ...state,
                  cart:action.payload
              } 
          case "ADD_TOTAL":
              return{
                  ...state,
                  total:action.payload
              }    
          case  "ADD_SUBTOTAL":
              return{
                  ...state,
                  subTotal:action.payload
              }    
          case "DISCOUNT_PRICE":
              return{
                  ...state,
                  disCountPrice:action.payload
              }   
           default :
               return state     
      }
}