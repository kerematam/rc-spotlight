import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import styles from "./styles.css";

const formatClassNames = classNames =>
  classNames.reduce((acc, className) =>
    className ? `${acc} ${className}` : acc
  );

const retrieveBgColor = node => {
  if (!node.parentNode) {
    return "#ffffff";
  }

  const bgColor = window
    .getComputedStyle(node)
    .getPropertyValue("background-color");
  const hasNodeBgColor =
    bgColor.split(",").length === 4 && bgColor.split(",")[3].trim() === "0)";

  return hasNodeBgColor ? retrieveBgColor(node.parentNode) : bgColor;
};

class StyledChildWrapper extends React.Component {

  state = {
    backgroundColor: undefined
  };

  setBackground = backgroundColor => {
    this.setState({ backgroundColor });
  };

  componentDidMount() {
    const { inheritParentBackgroundColor } = this.props;
    if (inheritParentBackgroundColor) {
      const node = ReactDOM.findDOMNode(this);
      const bgColor = retrieveBgColor(node);
      this.setBackground(bgColor);
    }
  }

  render() {
    const { backgroundColor } = this.state;
    const { style, spotlightStyle, enableShadow } = this.props;

    return React.Children.map(this.props.children, (child, i) => {
      const safeChild = child.type ? child : <span>{child}</span>;

      const classNames = [
        safeChild.props.className,
        styles.childOverBackdrop,
        enableShadow && styles.box_shadow
      ];
      const className = formatClassNames(classNames);

      return React.cloneElement(safeChild, {
        className,
        style: {
          ...style,
          ...safeChild.props.style,
          ...(backgroundColor && { backgroundColor }),
          ...spotlightStyle
        }
      });
    });
  }
}

StyledChildWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  enableShadow: PropTypes.bool,
  spotlightStyle: PropTypes.object,
  inheritParentBackgroundColor: PropTypes.bool,
};

export default StyledChildWrapper;
