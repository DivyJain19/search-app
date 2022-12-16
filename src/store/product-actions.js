import { productActions } from "./products-slice";
export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=20"
      );

      const data = await response.json();
      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(
        productActions.addData({
          items: productData,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
