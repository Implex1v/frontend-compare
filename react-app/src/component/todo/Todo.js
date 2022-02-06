import React from 'react'

class Todo extends React.Component {
    render() {
        return (
            <div className='todo-item'>
                <p>{this.props.item.text}</p>
                <p>{this.props.item.done}</p>
                <p>{this.props.item.formatCreated()}</p>
            </div>
        )
    }
}

export default Todo;