import "./styles/global.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/news/NewsPage";
import LoginPage from "./pages/login/LoginPage";
import ContactPage from "./pages/contact/ContactPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const duration = 300;

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          timeout={duration}
          key={location.pathname}
          classNames="page"
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" Component={HomePage} />
            <Route path="/home" Component={HomePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/news/:id" Component={NewsPage} />
            <Route path="/*" Component={() => <div>Not Found</div>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
