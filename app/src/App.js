import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";
import modules from './modules';

function App() {
  const [currentTab, setCurrentTab] = useState('ViewBlogs');

  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>App development in progress.</p>
            <ul className="App-nav">
              {modules.map(module => ( // with a name, and routes
                  <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </li>
              ))}
            </ul>
          </header>
          <div className="App-content">
            <Routes>
              {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
                ))}
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
