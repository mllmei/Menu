import React, { Component } from "react";
import axios from "axios";
import Category from "./category";
import Items from "./items.js";
export default class Menu extends Component {
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://stream-restaurant-menu-svc.herokuapp.com/category"
    }).then(response => {
      this.setState({ category: response.data });
    });
  }
  selectitem = id => {
    this.setState({ selectflag: id, flag: true });
    axios({
      method: "GET",
      url: `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${id}`
    }).then(response => {
      this.setState({ item: response.data });
    });
  };
  state = { category: [], item: [], selectflag: null, flag: false };
  render() {
    return (
      <div>
        <Category category={this.state.category} selectitem={this.selectitem} />
        {this.state.flag === true ? (
          <Items item={this.state.item} selectflag={this.state.selectflag} />
        ) : null}
      </div>
    );
  }
}
