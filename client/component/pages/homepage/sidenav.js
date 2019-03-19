import React, { Component } from "react";

import { Button, Preloader, SideNav, SideNavItem, Tab, Tabs } from "react-materialize";
import axios from "axios";

export default class MyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      email: localStorage.getItem("email").slice(1, -1),
      posting: []
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  shouldComponentUpdate(newProps, newState) {
    if (newState) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {}

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("auth");
    localStorage.removeItem("menu");
    window.location = "#/login";
  }

  loading() {
    return (
      <div>
        <Preloader size="big" />
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? (
          this.loading()
        ) : (
          <div>
            <Tabs className="tab-demo z-depth-1">
              <Tab title="Test 1">Test 1</Tab>
              <Tab title="Test 2" active>
                Test 2
              </Tab>
              <Tab title="Test 3">Test 3</Tab>
              <Tab title="Test 4">Test 4</Tab>
            </Tabs>
          </div>
        )}
      </div>
    );
  }
}
