import { addSubTotal } from 'redux/actions/cartAction';
import { type } from 'os';
import { CoursesOnDeal } from "../../../types";

const initialState={
    cart:[],
    subTotal:0,
    total:0,
    disCountPrice:0,
    cuponUsed: false,
    certificatePrice: 5.66,
    numberOfCertificate: 0
}

export interface CartState {
    cart:CoursesOnDeal[];
    subTotal:number;
    total:number;
    disCountPrice:number;
    cuponUsed: boolean;
    certificatePrice: number;
    numberOfCertificate: number;
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
                  subTotal:action.payload
              }    
          case "ADD_DISCOUNT":
              return{
                  ...state,
                  disCountPrice:action.payload
              }   

            case'USE_CUPON':
                return {
                    ...state,
                    cuponUsed: action.payload
                }

                case'REMOVE_CART_ITEM':
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
                case'ADD_CERTIFICATE':
                return {
                    ...state,
                    numberOfCertificate: action.payload
                }
                
            /* case'DECREASE_PRICE':
                return {
                    ...state,
                    cart: state.cart.map((item=>{
                        if (item.courseType.toLowerCase() == action.payload && !state.cuponUsed) {
                            const newPrice = parseFloat(item.mainPrice) - 200;
                            item.mainPrice = newPrice.toString();
                            state.subTotal = state.subTotal - 200;
                          }
                          if(item.courseType.toLowerCase() == action.payload && state.cuponUsed){
                            const newPrice = parseFloat(item.mainPrice) + 200;
                            item.mainPrice = newPrice.toString();
                            state.subTotal = state.subTotal + 200;
                          }
                          return item;
                    })),
                } */
                
            
           default :
               return state     
      }
}