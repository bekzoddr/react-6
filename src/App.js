import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import NotFound from "./components/notfound/NotFound";
import SingleRoute from "./pages/singleRoute/SingleRoute";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlePage/:id" element={<SingleRoute />} />
      </Routes>
    </div>
  );
}

export default App;
