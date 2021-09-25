import React from "react";
import Main from "../pages/Main";
import Level from "../pages/Level";
import Questions from "../pages/Questions";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();

  return (
      <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Main} />
            <Route path="/level" exact component={Level} />
            <Route path="/questions/" exact render={() =>history.push('/level')}/>
            <Route path="/questions/:questionsNumber" exact component={Questions} />
            <Route path='*' exact render={() =>history.push('/')}/>
        </Switch>
    </AnimatePresence>
  );
};

export default App;