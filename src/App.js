import React,{useState,useEffect, useContext} from 'react';
import { Dashboard, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {GithubContext} from './context/context';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {

  const [theme, setTheme] = useState(getStorageTheme());

  const {setChartColor,setChartFontColor}=useContext(GithubContext);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');setChartColor('#1a1a1a');setChartFontColor('#d6d6d6');
    } else {
      setTheme('light-theme');setChartColor("#ffffff");setChartFontColor('#4f4f4f');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard toggleTheme={toggleTheme}></Dashboard>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
