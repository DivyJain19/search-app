import React from "react";
import classes from "./FilterBox.module.css";
import { BiChevronDown } from "react-icons/bi";
import Rating from "@mui/material/Rating";
// console.log(categories);
const FilterBox = (props) => {
  return (
    <div className={classes.filterBox}>
      <h1>Search Results</h1>

      <details className={classes.det} open>
        <summary className={classes.sum}>
          <h3>Categories</h3>
          <BiChevronDown size={15} />
        </summary>
        <div className={classes.inputDiv}>
          {props.categories.map((item, index) => {
            return (
              <div className={classes.checkBoxDiv} key={index}>
                <input
                  className={classes.checkbox}
                  type="checkbox"
                  value={item}
                />
                <p className={classes.label}>{item}</p>
              </div>
            );
          })}
        </div>
      </details>
      <details className={classes.det} open>
        <summary className={classes.sum}>
          <h3>Price Range</h3>
          <BiChevronDown size={15} />
        </summary>
        <div className={classes.inputDiv}>
          <div className={classes.checkBoxDiv}>
            <input
              className={classes.checkbox}
              type="checkbox"
              value="Under 500"
            />
            <p className={classes.label}>Under 500</p>
          </div>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="" />
            <p className={classes.label}>1000 To 3000</p>
          </div>
        </div>
      </details>
      <details className={classes.det} open>
        <summary className={classes.sum}>
          <h3>Ratings</h3>
          <BiChevronDown size={15} />
        </summary>
        <div className={classes.inputDiv}>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="5" />
            <Rating name="read-only" value={5} readOnly />
          </div>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="4" />
            <Rating name="read-only" value={4} readOnly />
          </div>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="3" />
            <Rating name="read-only" value={3} readOnly />
          </div>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="2" />
            <Rating name="read-only" value={2} readOnly />
          </div>
          <div className={classes.checkBoxDiv}>
            <input className={classes.checkbox} type="checkbox" value="1" />
            <Rating name="read-only" value={1} readOnly />
          </div>
        </div>
      </details>
    </div>
  );
};

export default FilterBox;
