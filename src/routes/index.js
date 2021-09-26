import React from "react";
import Main from "../pages/Main";
import Level from "../pages/Level";
import LevelConfirmation from "../pages/LevelConfirmation";
import Wrong from "../pages/SomethingWrong";
import Report from '../pages/Report'
import Questions from "../pages/Questions";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReportProvider from '../context/ReportContext'

const App = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <ReportProvider>
      <AnimatePresence exitBeforeEnter>
         <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Main} />
            <Route path="/level" exact component={Level} />
            <Route path="/confirm/" exact render={() =>history.push('/level')}/>
            <Route path="/confirm/:questionsNumber" exact component={LevelConfirmation}/>
            <Route path="/questions/" exact render={() =>history.push('/level')}/>
            <Route path="/questions/:questionsNumber" exact component={Questions} />
            <Route path="/report" exact component={Report} />
            <Route path="/oops" exact component={Wrong} />
            <Route path='*' exact render={() =>history.push('/')}/>
        </Switch>
    </AnimatePresence>
    </ReportProvider>
  );
};

export default App;