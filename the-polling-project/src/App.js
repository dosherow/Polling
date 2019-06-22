import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import OnboardingStart1 from "./components/Onboarding1/OnboardingStart1";
import OnboardingStart2 from "./components/Onboarding2/OnboardingStart2";
import OnboardingStart3 from "./components/Onboarding3/OnboardingStart3";
import OnboardingStart4 from "./components/Onboarding4/OnboardingStart4";
import ActivePolls from "./components/ActivePolls/ActivePolls";
import CurrentPolls from "./components/CurrentPolls/CurrentPolls";
import PollResults from "./components/PollResults/PollResults";
import Question from "./components/Question/Question";

export default () => (
  <Router>
    <Route path="/" exact strict component={HomePage}></Route>
    <Route path="/onboarding" exact strict component={OnboardingStart1}></Route>
    <Route path="/onboarding2" exact strict component={OnboardingStart2}></Route>
    <Route path="/onboarding3" exact strict component={OnboardingStart3}></Route>
    <Route path="/onboarding4" exact strict component={OnboardingStart4}></Route>
    <Route path="/activepolls" exact strict component={ActivePolls}></Route>
    <Route path="/currentpolls" exact strict component={CurrentPolls}></Route>
    <Route path="/question" exact strict component={Question}></Route>
    <Route path="/pollresults" exact strict component={PollResults}></Route>

  </Router>
)
