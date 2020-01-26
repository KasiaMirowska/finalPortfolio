import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import MainPage from './MainPage/MainPage';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import './App.css';

export default class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header>
          <Route path='/' component={Nav} />


        </header>
        <main>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Projects' component={Projects} />
          
        </main>

      </div>
    );
  }

}


