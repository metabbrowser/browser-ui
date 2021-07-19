import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = (props) =>
  makeStyles({
    svg: { ...props.css },
  });

// TODO: IconWrapper - write proper comments don't know what it is doing but
// it is used inside buttons.js MetabIconButton Component

const IconWrapper = (props) => {
  const { svg } = useStyles(props)();

  return (
    <span className={svg} style={{ fontSize: 0 }}>
      {props.children}
    </span>
  );
};

export default IconWrapper;
