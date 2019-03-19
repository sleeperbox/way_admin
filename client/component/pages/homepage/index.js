import React, { Component } from "react";
import { Row, Col , Preloader } from "react-materialize";
import SideNav from "./sidenav";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: "",
      email: "",
      loading: true
    };
  }

  componentWillMount() {
    if (
      this.state.loading == true ||
      this.setState.isLogin == "" ||
      this.setState.email == ""
    ) {
      // this.setState({loading: false})
      setTimeout(() => {
        this.setState({ loading: false });
      }, 100);
    }
    const email = JSON.parse(localStorage.getItem("email"));
    const auth = JSON.parse(localStorage.getItem("auth"));
    this.setState({
      email,
      isLogin: auth
    });
  }

  componentDidMount() {
    if (this.state.isLogin != true) {
      window.location = "#/login";
    }
  }

  shouldComponentUpdate(newProps, newState) {
    if (newState.isLogin) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.isLogin === "false" ? (window.location = "#/login") : "";
  }

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
            <Row>
              <Col s={4} className="grid-example">
                <SideNav />
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
