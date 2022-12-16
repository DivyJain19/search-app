import React from "react";
import classes from "./ProductCard.module.css";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
const ProductCard = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img className={classes.img} src={props.img} />
      <p className={classes.name}>{props.name}</p>
    </div>
  );
};

export default ProductCard;

/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
    </Card> */
