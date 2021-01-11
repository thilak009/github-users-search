import React,{useState,useEffect, useContext} from 'react';
import { Dashboard, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {GithubContext} from './context/context';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (sessionStorage.getItem('theme')) {
    theme = sessionStorage.getItem('theme');
    
  }
  else{
    theme='light-theme';
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
    sessionStorage.setItem('theme', theme);
    if (theme === 'light-theme') {
      setChartColor("#ffffff");setChartFontColor('#4f4f4f');
    } else {
      setChartColor('#1a1a1a');setChartFontColor('#d6d6d6');
    }
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
