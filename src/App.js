import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './registration';
import Main from './main';
import PrivacyPolicy from './privacyPolicy';
import About from './about';
import Thanks from './thanks'

const App = () => {
  return (
    <Router>
      <Routes>   
        <Route path="/" Component={Main} />
        <Route path="/registration" Component={Registration} />
        <Route path="/privacyPolicy" Component={PrivacyPolicy} />
        <Route path="/about" Component={About} />
        <Route path="/thanks" Component={Thanks} />
      </Routes>
    </Router>
  );
};

export default App;

