import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import NotFound from "./components/notfound/NotFound";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Login from "./pages/login/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlePage/:id" element={<SingleRoute />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
