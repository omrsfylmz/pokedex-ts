import React from "react";
import Icon from "../Icon";
import "./styles.scss";

const index = () => {
  return (
    <div className="error-container">
      <Icon icon="normal" size={30} />
      <span>Something went wrong</span>
    </div>
  );
};

export default index;
