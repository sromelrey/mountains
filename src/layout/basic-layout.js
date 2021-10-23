import React from "react";
import "./index.scss";
const BasicLayout = (props) => {
  const { children } = props;

  return (
    <div className="root">
      <div className="header">
        <img
          src="/images/polygons/polygon5.svg"
          className="polygon5"
          alt="polygons"
        />

        <img src="/images/logo_white.png" alt="logo" className="logo" />

        <div className="frame">
          <p className="heading">Mountains</p>
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ex ut blandit condimentum.
          </p>
        </div>
        <img
          src="/images/polygons/polygon6.png"
          className="polygon6"
          alt="polygons"
        />
        <img
          src="/images/polygons/polygon2.png"
          className="polygon2"
          alt="polygons"
        />
        <img
          src="/images/polygons/polygon4.png"
          className="polygon4"
          alt="polygons"
        />
        <img
          src="/images/polygons/polygon3.png"
          className="polygon3"
          alt="polygons"
        />
      </div>
      <div>{children}</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default BasicLayout;
