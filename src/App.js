import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchTab from "./components/SearchTab";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductData } from "./store/product-actions";
function App() {
  const dispatch = useDispatch();
  const showSearchTab = useSelector((state) => state.search.searchIsAvailable);
  const data = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  console.log(data);
  return (
    <div className="App">
      <SearchBar />
      {showSearchTab && <SearchTab />}
      {/* <SearchTab /> */}
    </div>
  );
}

export default App;
