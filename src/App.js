import React from 'react';
import logo from './logo.svg';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {value : 0};
  }
  
  countdown(){
    this.timerID = setInterval(() => this.countdown(), 1000);
    this.setState({value: this.state.value -1});
  }
  handleChange(e){
    this.setState({value : e.target.value});
  }
  stop(){
    clearInterval(this.timerID);
  }
  render(){
    return(
      <div>
        <h2>Input your count down time here</h2>
        <input type = "text" onChange = {(e) => this.handleChange(e)} value = {this.state.value}/>
        <h1>{this.state.value}</h1>
        <button onClick = {(() =>this.countdown())} >Start</button>
        <button onClick = {() => this.stop()}>stop</button>
      </div>
    );
  }
}
export default App;
