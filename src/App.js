import "./styles/global.scss";
import { Route, Routes, useLocation } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/news/NewsPage";
import LoginPage from "./pages/login/LoginPage";
import ContactPage from "./pages/contact/ContactPage";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavigationStrap from "./components/nav/NavigationStrap";

const duration = 300;

function App() {
  let location = useLocation();

  useEffect(() => {
    console.log("location: ", location);
  }, [location]);

  return (
    <div className="App">
      {/* <NavigationStrap /> */}
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
            <Route path="/news/:id" Component={NewsPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/*" Component={() => <div>Not Found</div>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
