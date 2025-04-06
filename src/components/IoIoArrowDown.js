import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const IoIoArrowDown = () => {
  return (
    <div style={{ marginLeft: 5 }}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{
          color: "black",
          fontSize: "1em",
          display: "flex",
          transform: "rotate(270deg)",
          alignItems: "center",
          marginTop: "0.3em",
        }}
      />
    </div>
  );
};

export default IoIoArrowDown;
