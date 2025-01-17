import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/followers" elelment={<FollowersPage />} />
      </Routes>
    </div>
  );
}

export default App;
