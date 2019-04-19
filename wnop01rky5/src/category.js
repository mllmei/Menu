import React, { Component } from "react";
export default class Category extends Component {
  render() {
    return (
      <div>
        <div className="category">
          <h>Menu Categories</h>
          {this.props.category.map(element => {
            return (
              <li
                onClick={() => {
                  this.props.selectitem(element.short_name);
                }}
              >
                {element.name}-{element.short_name}
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
