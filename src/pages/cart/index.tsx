import { Box, height } from "@mui/system";
import CartHome from "components/cart/CartHome"
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { CartState } from "redux/reducers/cartReducer";


const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart }: CartState = useSelector((state: State) => state.allCartItem);
  return (

    <>
      {
        cart.length ? <CartHome />
          : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '30px', height: '100vh' }}>
            No Items Added
          </Box>

      }

    </>


  )
}

export default index