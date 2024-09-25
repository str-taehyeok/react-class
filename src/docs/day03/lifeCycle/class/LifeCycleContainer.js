import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}


class LifeCycleContainer extends Component {
    
    state = {
        color : "#000",
    }

    oncClickToChnageColor = () => {
        this.setState({
            color : getRandomColor()
        })
        console.log(this.state.color)
    }

    render() {
        return (
            <div>
                <button onClick={this.oncClickToChnageColor}>색상 변경</button>
                <LifeCycleComponent color={this.state.color}/>
            </div>
        );
    }
}

export default LifeCycleContainer;