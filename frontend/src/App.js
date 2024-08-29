import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './pages/ProfilePage';
import CommunityPage from './pages/CommunityPage';
import FundingPage from './pages/FundingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/community" component={CommunityPage} />
        <Route path="/funding" component={FundingPage} />
      </Switch>
    </Router>
  );
}

export default App;
