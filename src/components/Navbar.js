import React from 'react';

const Navbar = ({toggleTheme}) => {
  return(
    <div className="mynav">
      <h2>Welcome</h2>
      <button className="btn" onClick={()=> toggleTheme()}>toggle</button>
    </div>
  );
};



export default Navbar;
