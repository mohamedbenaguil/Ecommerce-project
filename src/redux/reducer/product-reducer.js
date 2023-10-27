import { GETONE, GETPRODUCTS } from "../action-type/Product-type";

const initialState = {
    products: [],
    oneproduct:{}
  }

  const Productsreducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GETPRODUCTS:
        console.log(payload)
        return { ...state, products: payload.Many_products};
      case GETONE:
        return {...state,oneproduct:payload.oneproduct}
      default:
        return state;
    }
  };
  export default Productsreducer;