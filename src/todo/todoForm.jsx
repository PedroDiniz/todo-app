import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm row mt-5">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="adicione uma tarefa"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          marginR="2"
          onClick={props.handleAdd}
        />
        <IconButton
          style="info"
          icon="search"
          marginR="2"
          onClick={props.handleSearch}
        />
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};
