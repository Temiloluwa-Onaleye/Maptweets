import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import getRetweetCount from "./getRetweetCount";

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <FontAwesomeIcon icon={faRetweet} />
      {getRetweetCount(count)}
    </span>
  );
};

RetweetButton.propTypes = {
  count: PropTypes.number.isRequired,
};
export default RetweetButton;
