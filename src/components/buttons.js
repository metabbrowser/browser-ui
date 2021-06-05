import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

// TODO: Take the dominant colour pallete from the icons using https://lokeshdhakar.com/projects/color-thief/
// TODO: Add props to customize the component
// TODO: Create a icons file and add all icons constants

const MetabIconButton = () => {
  return (
    <IconButton aria-label="delete">
      <img
        src="http://icons.duckduckgo.com/ip2/figma.com.ico"
        alt="icon"
        style={{ width: "30px", height: "30px" }}
      ></img>
      {/* <DeleteIcon /> */}
    </IconButton>
  );
};

export default MetabIconButton;
