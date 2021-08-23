import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './animation.css';
import './styles.css';
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
    position: 'relative'
};
function ToDoItem({ id, message, index, onRemove }) {
    return (
        <div key={id} onClick={() => onRemove(index)} style={itemCss}>
            {message}
        </div>
    );
}
function ToDoList() {
    const [items, setItems] = useState([
        {
            id: 'hello',
            message: 'hello'
        },
        {
            id: 'world',
            message: 'world'
        },
        {
            id: 'click',
            message: 'click'
        },
        {
            id: 'me',
            message: 'me'
        }
    ]);
    const onAdd = () => {
      const newItem = prompt('Enter some text');
        const newItems = [
          ...items,
          {
            id: newItem,
            message: newItem,
          }
        ];
        setItems(newItems);
    };

    const onRemove = (i) => {
        let newItems = items.slice();
        newItems.splice(i, 1);
        setItems(newItems);
    };

    return (
        <div className="App">
            <button onClick={onAdd}>Add Item</button>

            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
            >
                {items.map(({ id, message }, index) => {
                    return (
                        <ToDoItem
                            id={id}
                            message={message}
                            index={index}
                            onRemove={onRemove}
                        />
                    );
                })}
            </ReactCSSTransitionGroup>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<ToDoList />, rootElement);
