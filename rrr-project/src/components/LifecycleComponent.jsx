import React, { Component } from 'react';

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: null
        };
    }

    componentDidMount() {
        fetch('https://todo-redev.onrender.com/api/auth/me')
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

     shouldComponentUpdate(nextProps, nextState) {
       console.log('Данные обновились! Текущий count:', this.state.count);
        return nextState.count % 2 === 0;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Значение count: ', this.state.count)
    }

    componentWillUnmount() {
        console.log('Компонент удалён');
    }

    render() {
        return (
            <>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Увеличить</button>
            </>
        )
    }
}


export default LifecycleComponent;