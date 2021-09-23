import React from "react";
import Main from "../pages/Main";
import Level from "../pages/Level";
import Questions from "../pages/Questions";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Main} />
            <Route path="/level" exact component={Level} />
            <Route path="/questions/:questionsNumber" exact component={Questions} />
        </Switch>
    </AnimatePresence>
  );
};

export default App;