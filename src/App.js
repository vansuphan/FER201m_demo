import './styles/global.scss';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NewsPage from "./pages/news/NewsPage";
import LoginPage from "./pages/login/LoginPage";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/news/:id" Component={NewsPage}/>
        <Route path="/login" Component={LoginPage}/>
      </Routes>
    </div>
  );
}

export default App;
