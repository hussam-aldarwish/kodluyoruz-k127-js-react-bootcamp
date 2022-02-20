import React from "react";

import "./button.css";

function Button({ as, children, text, ...props }) {
  if (as === "input")
    return <input type="submit" className="button primary" value={text} />;
  else
    return (
      <button className="button primary" {...props}>
        {children ? children : text}
      </button>
    );
}

export default Button;
