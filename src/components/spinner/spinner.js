import React from "react";
import { Spin } from "antd";
import "./spinner.css";
import "antd/dist/antd.css";
const Spinner = () => {
  return (
    <div className="spinnerClass">
      <Spin />
    </div>
  );
};

export default Spinner;
