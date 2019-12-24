import React from "react";
import PropTypes from "prop-types";
import Shadow from "./Shadow";
import Portal from "./Portal";

import styles from "./styles.css";

const LightboxWrapper = ({
  isActive,
  shadowZIndex,
  shadowOpacity,
  shadowColor,
  children,
  renderOnShadow
}) => {
  const StyledChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        className: `${child.props.className} ${styles.component}`
      })
    );

  return isActive ? (
    <React.Fragment>
      <StyledChildren
        style={{
          ...(shadowZIndex && { "z-index": (+shadowZIndex + 1).toString() })
        }}
      />
      <Portal>
        <Shadow
          shadowZIndex={shadowZIndex}
          shadowOpacity={shadowOpacity}
          shadowColor={shadowColor}
          renderOnShadow={renderOnShadow}
        />
      </Portal>
    </React.Fragment>
  ) : (
    children
  );
};

LightboxWrapper.propTypes = {
  shadowZIndex: PropTypes.string,
  shadowOpacity: PropTypes.string,
  shadowColor: PropTypes.string,
  renderOnShadow: PropTypes.node
};

export default LightboxWrapper;
