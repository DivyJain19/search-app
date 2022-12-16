import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const SearchTab = (props) => {
  console.log(props.products);
  return (
    <Container maxWidth="md">
      <div
        className="searchTab"
        style={{
          backgroundColor: "#fff",
          minHeight: "60vh",
          minWidth: "42rem",
          padding: "2rem",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <h3>Latest Trends</h3>
            </Grid>
            {Array.from(Array(5)).map((_, index) => (
              <Grid item xs={6} md={3} lg={2.4} key={index}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/products"
                >
                  <ProductCard
                    name={props.products[index + 1].title}
                    img={props.products[index + 1].image}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <h3>Popular Suggestions</h3>
            </Grid>
            {props.categories.map((_, index) => (
              <Grid item xs={12} key={index}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/products"
                >
                  <p>{props.categories[index]}</p>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default SearchTab;

/* <div className={classes.trendDiv}>
  {Array.from(Array(5)).map((_, index) => {
    return (
      <ProductCard
        name={props.products[index].title}
        img={props.products[index].image}
        key={index}
      />
    );
  })}
</div>; */
