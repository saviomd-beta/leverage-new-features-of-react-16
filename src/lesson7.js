import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

class App extends Component {
  render() {
    return (
      <ul>
        <li>Peach</li>
        <li>Ananas</li>
        <Glossary
          items={[
            { id: 1, term: 'HTML', description: 'lorem ipsum html' },
            { id: 2, term: 'CSS', description: 'lorem ipsum css' },
          ]}
        />
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
