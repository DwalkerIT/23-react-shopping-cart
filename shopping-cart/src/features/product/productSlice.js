import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: 0,
    products: [],
    cart: [],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      const currentProduct = action.payload;
      const productInCart = state.cart.find(
        (product) => product.id === currentProduct.id
      );
      // const productInCart = index !== -1;
      if (productInCart) {
        productInCart.quantity++;
      } else {
        const productToBeAdded = { ...currentProduct, quantity: 1 };
        state.cart.push(productToBeAdded);
      }
      // const incomingProduct = { ...action.payload, quantity: 1 };
      // const isInCart = state.cart.push(
      //   (product) => product.id === incomingProduct.id
      // );
      // if (!isInCart) {
      //   state.cart.push(incomingProduct);
      // } else {
      //   const cartIndex = state.cart.findIndex(
      //     (product) => product.id === incomingProduct.id
      //   );
      //   const currentProduct = state.cart[cartIndex];
      //   currentProduct.quantity++;
      // }
      // console.log(isInCart);

      // state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const index = state.cart.findIndex((product) => product.id !== productId);
    },
    decrementQuantity: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart[index].quantity--;
    },
    // toggleFilter: (state) => {
    //   const incomingState = action.payload;
    // },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setProducts,
  addToCart,
} = productSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const getProducts = () => (dispatch) => {
  fetch("http://localhost:3001/products")
    .then((r) => r.json())
    .then((data) => {
      // console.log(data)
      dispatch(setProducts(data));
      // console.log(data);
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.product.value)`
export const selectCount = (state) => {
  // console.log(state.product);
  return state.product.value;
};

export const selectProducts = (state) => state.product.products;
export const selectCart = (state) => state.product.cart;
export default productSlice.reducer;
