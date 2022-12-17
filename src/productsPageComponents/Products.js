import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import ProductDetailCard from "./ProductDetailCard";
const Products = (props) => {
  //   console.log(props.productsData);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {props.productsData.map((_, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <ProductDetailCard
              name={props.productsData[index].title}
              img={props.productsData[index].image}
              rating={props.productsData[index].rating.rate}
              price={props.productsData[index].price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
