import React from 'react';


import {Route ,Switch} from 'react-router-dom'

// import pages 
import  Certifications from './pages/Certifications'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
         
        
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/competences' component={Competences}/>
            <Route path='/contact' component={Contact} />
            <Route path='/certifications' component={Certifications} />
            <Route path='/projects' component={Projects} />
            
            <Route   component={NotFound} />
          </Switch>
          
            
          
         
      </header>
    </div>
  );
}

export default App;
