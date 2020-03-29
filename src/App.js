import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import MainPage from './MainPage/MainPage';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './App.css';

export default class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header>
          <Route path='/' component={Nav} />
          <Route path='/' component={Header} />

        </header>
        <main>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/' component={Projects} />
          <Route exact path='/' component={Footer} />
          <Route exact path='/About' component={MainPage} />
          <Route exact path='/About' component={Footer} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Projects' component={Footer} />
        </main>

      </div>
    );
  }

}


