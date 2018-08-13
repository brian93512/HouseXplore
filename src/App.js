import React, { Component } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import Header from './components/Header';
import Results from './components/Results';
// import logo from './logo.svg';
import theme from './theme';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTopics: [],
    };
  }

  setTopics = (currentTopics) => {
    this.setState({
      currentTopics: currentTopics || [],
    });
  }

  toggleTopic = (topic) => {
    const { currentTopics } = this.state;
    const nextState = currentTopics.includes(topic)
      ? currentTopics.filter(item => item !== topic)
      : currentTopics.concat(topic);
    this.setState({
      currentTopics: nextState,
    });
  }
  render() {
    return (
      <section className="my_container">
        <ReactiveBase
          app="apartment_search"
          // app="gitxplore-app"
          credentials="pfVPZr6q1:a51a20be-3ac7-4903-a02c-9465e0030e71"
          // credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
          type="apartment_search_noduplicate"
          // type = "gitxplore-latest"
          theme={theme}
        >
          <div className="my_flex my_row-reverse my_app-container">
              <Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} />
              <div className="my_results-container">
                  <DataSearch
                      componentId="repo"
                      filterLabel="Search"
                      // dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                      dataField = {['apt','street','city']}
                      placeholder="Search Repos"
                      autosuggest={false}
                      iconPosition="left"
                      URLParams
                      className="my_data-search-container my_results-container"
                      innerClass={{
                          input: 'my_search-input',
                      }}
                  />
                  <Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic}/>
              </div>
          </div>
        </ReactiveBase>
      </section>
    );
  }
}

export default App;
