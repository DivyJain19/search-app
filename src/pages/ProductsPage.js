import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import FilterBox from "../productsPageComponents/FilterBox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Products from "../productsPageComponents/Products";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const categories = useSelector((state) => state.product.categories);
  const productsData = useSelector((state) => state.product.items);
  const [productToShow, setProductToShow] = useState(productsData);
  //   console.log(productToShow);
  function categoryFilterHandler(filter) {
    let x = [...filter];
    // console.log(x);
    const temp = productsData.filter((item) => x.indexOf(item.category) >= 0);
    if (temp.length > 0) {
      setProductToShow(temp);
    } else {
      setProductToShow(productsData);
    }
  }
  useEffect(() => {
    setProductToShow(productsData);
  }, [productsData]);
  return (
    <>
      <div className="productPage">
        <SearchBar />
        <Box style={{ marginTop: "3rem" }} sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={2} md={2}>
              <FilterBox
                onSelectCategoryFilter={categoryFilterHandler}
                categories={categories}
              />
            </Grid>
            <Grid item xs>
              {productToShow.length > 0 && (
                <Products productsData={productToShow} />
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ProductsPage;
