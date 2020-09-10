import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Homepage';
// import Update from './Update';
class App extends React.Component{
  render() {
    return (
      <div>
        {/* The corresponding component will show here if the current URL matches the path */}
        <Route path="/" exact render={()=><Homepage page="Index"/>} />
        <Route path="/Form" exact render={()=><Homepage page="Form"/>} />
        <Route path="/Resource" exact render={()=><Homepage page="Resource"/>} />
        <Route path="/NONSTOP" exact render={()=><Homepage page="NONSTOP"/>} />
        <Route path="/BUNGEE" exact render={()=><Homepage page="BUNGEE"/>} />
        <Route path="/SSFWL" exact render={()=><Homepage page="SSFWL"/>} />
        <Route path="/RM" exact render={()=><Homepage page="RM"/>} />
        <Route path="/BAM" exact render={()=><Homepage page="BAM"/>} />
        <Route path="/SG" exact render={()=><Homepage page="SG"/>} />
        {/* <Route path="/UpDaTe" exact component={Update} /> */}
      </div>
    );
  }
}

export default App;
