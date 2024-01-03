import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { nameContext } from "./context/NameContext.jsx";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <nameContext.Provider
      value={{
        userData,
      }}
    >
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </div>
    </nameContext.Provider>
  );
}

export default App;
