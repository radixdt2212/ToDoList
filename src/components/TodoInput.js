import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white">
                  &nbsp;
                  <i className="fas fa-book"></i>
                  &nbsp;
                </span>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add todo item"
                value={item}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn w-100 btn-info mt-3 text-uppercase"
                  : "btn w-100 btn-primary mt-3 text-uppercase"
              }
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </form>
        </div>
      </>
    );
  }
}
