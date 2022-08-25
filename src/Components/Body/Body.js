import React from 'react';
import ms from 'pretty-ms';

import './Body.scss';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 5000,
            isOn: false,
            start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: this.state.time
        })
        this.time = setInterval(() => {
            if(this.state.time > 0) {
            this.setState(({ time }) => ({
                time: time - 1
            }))
        }
            if (this.state.time === 0) {
            clearInterval(this.time)
        }
    }, 1);
}

stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.time)
}

resetTimer() {
    this.setState({ time: 5000, isOn: false })
}

render() {
    let start = <button onClick={this.startTimer}>START</button>
    let stop = <button onClick={this.stopTimer}>STOP</button>
    let reset = <button onClick={this.resetTimer}>RESET</button>

    return (
        <div className='Timer'>
            <h3> TIMER: {ms(this.state.time)}</h3>
            <div className='Button'>
                {start}
                {stop}
                {reset}
            </div>
        </div>
    )
}
}
export default Timer;