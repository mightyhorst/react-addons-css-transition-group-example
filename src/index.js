import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./animation.css";
import "./styles.css";
const itemCss = {
    fontSize: '20px',
    height: '75px',
    width: '360px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '80%',
    color: 'rgba(255,255,255,.9)',
    background: `rgba(0,0,0,.3)`,
    fontFamily: 'Raleway',
    padding: '0 20px',
    borderRadius: '4px',
    marginBottom: '9px',
    transition: 'all .4s',
    overflow: 'hidden',
    position: 'relative',
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div 
        key={item} 
        onClick={() => this.handleRemove(i)}
        style={itemCss}
      >
        {item}
      </div>
    ));

    return (
      <div className='App'>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<TodoList />, rootElement);
