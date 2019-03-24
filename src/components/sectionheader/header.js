import React from "react";
import { FormattedMessage } from "react-intl";
import "./header.css";

const Header = props => {
  let { header, title } = props;

  return (
    <div className="header-wrapper">
      <p className={"products-header " + props.styleHeader}>{header}</p>
      <p className={"products-title " + props.styleTitle}>
        {" "}
        <FormattedMessage id={`${title}`} />
      </p>
      <div className="products-image">
        <img alt="" src={require("./assets/img/glasses.png")} />
      </div>
    </div>
  );
};

export default Header;
