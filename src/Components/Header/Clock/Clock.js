import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    render() {
      return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
    componentDidMount() {
      const oneSecond = 1000;
      setInterval(() => {
        this.setState({ date: new Date() });
  }, oneSecond);
    }
  }

export default Clock;