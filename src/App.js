import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import {connect} from 'react-redux'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {msg: "okko", name: "jjj"}
    this.tell = this.tell.bind(this);
  }

  say(){
    store.dispatch({type: "ADD_NUM"});
    console.log(store.getState().numReducer.num);
    this.setState({
      msg: "ok" + Math.random()
    })
  }

  song(){
    alert(this.state.msg);
  }

  tell(){
    alert(this.state.msg);
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  render(){
    const {names} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p onClick={(e)=>this.say(e)}>say: {this.state.msg}</p>
          <p onClick={this.tell}>tell: {this.state.msg}</p>
          <p onClick={this.song.bind(this)}>song: {this.state.msg}</p>
          <input value={this.props.num} onChange={this.props.changeNum}></input>
          <input value={this.state.name} onChange={this.handleChange.bind(this)}></input>
          <button onClick={this.props.addName.bind(this)}>添加</button>
          <p>{this.props.num}</p>
          <ul>
          {
            names.map((item,index)=>{
              return <li key={index} onClick={this.props.deleteName.bind(this, index)}>{item}</li>
            })
          }
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.numReducer.num,
    names: state.namesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeNum(e){
      dispatch({
        type: "SET_NUM",
        value: e.target.value
      })
    },
    addName(e){
      dispatch({
        type: 'ADD_NAME',
        name: this.state.name
      })
    },
    deleteName(n){
      // alert(n);
      alert(n + " - " + this.state.name);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
