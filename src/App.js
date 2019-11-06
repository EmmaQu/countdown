import React from 'react';
import logo from './logo.svg';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : 60,
     
    };
  }
  componentDidMount(){
    this.timeID = setInterval(() => this.countdown(), 1000);
  }
  countdown(){
    if(this.state.value > 0){
    this.setState({
      value: this.state.value -1, 
    });
  }
  }
  handleChange(e){
    this.setState({value : e.target.value});
  }
 
  render(){
    return(
      <div>
        <h2>Input your count down time here</h2>
        <input type = "text" onChange = {(e) => this.handleChange(e)} value = {this.state.value}/>
        <h1>{this.state.value}</h1>
        
      </div>
    );
  }
}
export default App;
