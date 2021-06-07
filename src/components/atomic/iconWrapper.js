import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = (props) =>
  makeStyles({
    svg: { ...props.css },
  });

const IconWrapper = (props) => {
  const { svg } = useStyles(props)();

  return (
    <span className={svg} style={{ fontSize: 0 }}>
      {props.children}
    </span>
  );
};

export default IconWrapper;
