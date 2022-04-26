import { type } from 'os';
import { CoursesOnDeal } from "../../../types";

const initialState={
    cart:[],
    subTotal:0,
    total:0,
    disCountPrice:0,
    cuponUsed: false
}

export interface CartState {
    cart:CoursesOnDeal[];
    subTotal:number;
    total:number;
    disCountPrice:number;
    cuponUsed: boolean
}
type Actions ={
    type :string,
    payload:number|{}|string;
   
}

export const cartReducer=(state:CartState=initialState,action:Actions)=>{
      switch(action.type){
          case "ADD_TO_CART":
              return{
                  ...state,
                  cart:action.payload,
              } 
          case "ADD_TOTAL":
              return{
                  ...state,
                  total:action.payload
              }    
          case  "ADD_SUBTOTAL":
              return{
                  ...state,
                  subTotal:state.subTotal+ parseFloat(action.payload)
              }    
          case "DISCOUNT_PRICE":
              return{
                  ...state,
                  disCountPrice:action.payload
              }   

            case'USE_CUPON':
                return {
                    ...state,
                    cuponUsed: action.payload
                }
            
           default :
               return state     
      }
}