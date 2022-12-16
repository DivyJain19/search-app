import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SearchTab = () => {
  return (
    <Container maxWidth="md">
      <Box
        className="searchTab"
        sx={{ bgcolor: "#fff", height: "60vh", minWidth: "46rem" }}
      />
    </Container>
  );
};

export default SearchTab;
