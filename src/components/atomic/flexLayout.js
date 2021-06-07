import React from "react";
import Theme from "../../utils/theme";

const FlexLayout = (props) => {
  return (
    <div
      className={props.className ? props.className : null}
      style={{
        display: props.display ? props.display : "flex",
        flexWrap: props.wrap ? props.wrap : `wrap`,
        flexDirection: props.direction ? props.direction : "row",
        justifyContent: props.justifyContent ? props.justifyContent : "center",
        alignItems: props.alignItems ? props.alignItems : "center",
        alignContent: props.alignContent ? props.alignContent : "center",
        width: props.width ? props.width : "fit-content",
        height: props.height ? props.height : "fit-content",
        padding: `${Theme.SPACING(2)} ${Theme.SPACING(4)} `,
        ...Theme.FONTS.cabin.subHeading,
        color: Theme.COLORS.shades.color_2,
      }}
    >
      {props.children}
    </div>
  );
};

export default FlexLayout;
