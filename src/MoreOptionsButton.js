import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const MoreOptionsButton = () => (
  <span className="more-options">
    <FontAwesomeIcon icon={faEllipsis} />
  </span>
);

export default MoreOptionsButton;
