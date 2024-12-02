import React, { useContext } from "react";
import PropTypes from "prop-types";
import CountContext from "../context/CountContext";

const ButtonComp = ({ text }) => {
  const { incrementCount } = useContext(CountContext);
  const user = null; // Placeholder for future user context.

  return (
    <button
      style={{ color: user ? "#a1fc9f" : "#fcb9b9" }}
      onClick={incrementCount}
    >
      {text}
    </button>
  );
};

ButtonComp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonComp;
