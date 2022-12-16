import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchTab from "./components/SearchTab";
import { useSelector } from "react-redux";
function App() {
  const showSearchTab = useSelector((state) => state.search.searchIsAvailable);

  return (
    <div className="App">
      <SearchBar />
      {showSearchTab && <SearchTab />}
      {/* <SearchTab /> */}
    </div>
  );
}

export default App;
