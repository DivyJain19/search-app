import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { CiSearch } from "react-icons/ci";
import { searchActions } from "../store/search-slice";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInputHandler = () => {
    dispatch(searchActions.toggleShow());
  };
  const searchTabHandler = () => {
    dispatch(searchActions.toggleHide());
  };
  return (
    <div>
      <OutlinedInput
        onClick={searchInputHandler}
        onBlur={searchTabHandler}
        className="search"
        sx={{ m: 1, mt: 3, width: "70ch" }}
        id="outlined-adornment-weight"
        endAdornment={
          <InputAdornment position="end">
            {/* <SearchIcon /> */}
            <CiSearch size={35} />
          </InputAdornment>
        }
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
        }}
      />
    </div>
  );
};

export default SearchBar;
