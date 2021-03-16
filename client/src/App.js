import React from 'react';
import './App.css';
import Navbar from  './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about'; 


class App extends React.Component{
  
  render(){
       return (
       	<BrowserRouter>
         <div className="App">
         <Navbar/> 
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         </div>
         </BrowserRouter>
     );
  } 

}
// exact is used to prevent subset loading of routes example / and /about
// Route is costly operations as commpare to "Link to=" and use Link in react-router-dom

export default App;


