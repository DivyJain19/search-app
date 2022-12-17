import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBox from "../productsPageComponents/FilterBox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Products from "../productsPageComponents/Products";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const categories = useSelector((state) => state.product.categories);
  const productsData = useSelector((state) => state.product.items);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="productPage">
        <SearchBar />
        <Box style={{ marginTop: "3rem" }} sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={2} md={3}>
              <FilterBox categories={categories} />
            </Grid>
            <Grid item xs>
              {productsData.length > 0 && (
                <Products productsData={productsData} />
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default ProductsPage;
