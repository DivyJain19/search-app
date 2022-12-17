import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";

const Products = (props) => {
  //   console.log(props.productsData);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.productsData.map((_, index) => (
          <Grid item xs={6} md={3} lg={3} key={index}>
            <ProductCard
              name={props.productsData[index].title}
              img={props.productsData[index].image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
