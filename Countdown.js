import React from 'react'

class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: 1,
            seconds: 3,
        }
    }

    //the updateTimer can be passed by prop, just for simple exercise, I put this function inside the component
    updateTimer = (timer) => {
        if (this.state.seconds === 0) {
            this.setState({
                minutes: this.state.minutes - 1,
                seconds: 59,
            })
        } else {
            this.setState({
                seconds: this.state.seconds - 1,                
            })
        }
        if (this.state.minutes === 0 && this.state.seconds === 0) {
            clearInterval(timer)
        }
    }

    componentDidMount() {
        let timer = setInterval(() => {
            this.updateTimer(timer)
        }, 1000)//set the interval to 100 for quick testing
    }

    render() {
        return (
            <div>
                <span>minutes:{this.state.minutes}</span>
                <span>seconds:{this.state.seconds}</span>
            </div>
        )
    }
}

export default Countdown