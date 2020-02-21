import React from 'react';
class Todos extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = { 
            todos: [
                { title: 'take out the trash', done: false, notes: ['boring'] },
                { title: 'walk dog', done: true, notes: ['exercise'] },
                { title: 'read about React', done: false, notes: ['fun!'] },
            ]
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((oldState) => {
                return { todos: [...oldState.todos] }
            });
        }, 1000);
    }

    render() {
        console.log('Todos render called');
        return (<div>
            {this.state.todos.map((todo, i) => {
              return (<TodoItem
                key={i}
                title={todo.title}
                done={todo.done}
                notes={todo.notes}
              />);
            })}
          </div>);
    }
}

class TodoItem extends React.Component {

    render() {
        console.log('TodoItem render called');
        return (<div>
                {this.props.done ? '✓': '▢'} {this.props.title}
                ({this.props.notes.join(', ')})
            </div>);
    }
}

ReactDOM.render(<Todos />, document.getElementById('app'))




