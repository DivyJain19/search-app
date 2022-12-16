import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchTab from "./components/SearchTab";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductData,
  fetchProductCategories,
} from "./store/product-actions";
function App() {
  const dispatch = useDispatch();
  const showSearchTab = useSelector((state) => state.search.searchIsAvailable);
  const data = useSelector((state) => state.product.items);
  const categories = useSelector((state) => state.product.categories);
  useEffect(() => {
    dispatch(fetchProductData());
    dispatch(fetchProductCategories());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <SearchBar />
      </div>
      {showSearchTab && <SearchTab products={data} categories={categories} />}
    </>
  );
}

export default App;
