import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const ReplyButton = () => {
  return (
    <span className="reply-button">
      <FontAwesomeIcon icon={faReply} />
    </span>
  );
};

export default ReplyButton;
