import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchTab from "./components/SearchTab";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductData,
  fetchProductCategories,
} from "./store/product-actions";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
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
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <>
          <div className="App">
            <SearchBar />
            {showSearchTab && (
              <SearchTab products={data} categories={categories} />
            )}
          </div>
        </>
      </Route>
      <Route path="/products">
        <ProductsPage
          style={{ marginTop: "3rem", width: "100%", height: "100vh" }}
        />
      </Route>
    </Switch>
  );
}

export default App;
