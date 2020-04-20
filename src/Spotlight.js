import React from "react";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import StyledChildWrapper from "./StyledChildWrapper";

const Spotlight = ({
  children,
  isActive,
  renderLabel,
  zIndex,
  backdropOpacity,
  backdropColor,
  enableShadow,
  style,
  inheritParentBackgroundColor
}) =>
  isActive ? (
    <React.Fragment>
      {React.Children.map(children, child => (
        <StyledChildWrapper
          inheritParentBackgroundColor={inheritParentBackgroundColor}
          enableShadow={enableShadow}
          style={{
            ...(zIndex && {
              zIndex: (+zIndex + 1).toString()
            }),
            ...style
          }}
        >
          {child}
        </StyledChildWrapper>
      ))}
      <div style={{ ...(zIndex && { zIndex }) }}>{renderLabel}</div>
      <Backdrop
        zIndex={zIndex}
        opacity={backdropOpacity}
        color={backdropColor}
      />
    </React.Fragment>
  ) : (
    children
  );

Spotlight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isActive: PropTypes.bool,
  renderLabel: PropTypes.func,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backdropOpacity: PropTypes.string,
  backdropColor: PropTypes.string,
  enableShadow: PropTypes.bool,
  style: PropTypes.object,
  inheritParentBackgroundColor: PropTypes.bool
};

export default Spotlight;
