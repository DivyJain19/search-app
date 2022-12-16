import { productsActions } from "./products-slice";
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
        productsActions.addData({
          items: productData,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchProductCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );

      const data = await response.json();
      return data;
    };

    try {
      const productCategories = await fetchData();
      dispatch(
        productsActions.addCategories({
          categories: productCategories,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
