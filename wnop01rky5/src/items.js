import React, { Component } from "react";
export default class Items extends Component {
  render() {
    return (
      <div className="items">
        <h>Items in Category ({this.props.selectflag})</h>
        <table>
          <tr>
            <th>name</th>
            <th>description</th>
          </tr>
          {this.props.item.map(element => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.description}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
