import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <FontAwesomeIcon icon={faHeart} />
      {count > 0 && <span className="like-count">{count}</span>}
    </span>
  );
};

LikeButton.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeButton;
