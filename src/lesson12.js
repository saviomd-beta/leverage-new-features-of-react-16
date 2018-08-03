import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext, { themes } from './ThemeContext';
import Toolbar from './Toolbar';
import UserContext from './UserContext';

const user = { name: 'Jane' };

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }))
  }

  render() {
    return (
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
