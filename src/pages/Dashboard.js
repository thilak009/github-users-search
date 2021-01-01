import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/loading-github.gif';
import { GithubContext } from '../context/context';

const Dashboard = ({toggleTheme}) => {
  const {isLoading}=React.useContext(GithubContext);
  if(isLoading){
    return <main>
      <Navbar toggleTheme={toggleTheme}/>
      <Search/>
      <img src={loadingImage} className="loading-img" alt='loading'></img>
    </main>
  }
  return (
    <main>
      <Navbar toggleTheme={toggleTheme}></Navbar>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  );
};

export default Dashboard;
