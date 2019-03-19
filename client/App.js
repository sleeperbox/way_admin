import React, { Component } from "react";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      slideIndex: 0,
      pindah: 0
    }
  }

  componentWillMount() {
    const {isLogin} = this.state;
    isLogin === true ? window.location = '#/homepage' : ''; 
  }
  
  render() {
    return (
      <div>
    </div>
    );
  }
}
