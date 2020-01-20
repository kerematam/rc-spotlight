import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import StyledChildWrapper from "./StyledChildWrapper";

const Spotlight = ({
  isActive,
  backdropZIndex,
  backdropOpacity,
  backdropColor,
  renderOnBackdrop,
  inheritParentBackgroundColor,
  children
}) =>
  isActive ? (
    <React.Fragment>
      {React.Children.map(children, child => (
        <StyledChildWrapper
          inheritParentBackgroundColor={inheritParentBackgroundColor}
          style={{
            ...(backdropZIndex && {
              zIndex: (+backdropZIndex + 1).toString()
            })
          }}
        >
          {child}
        </StyledChildWrapper>
      ))}
      <Backdrop
        backdropZIndex={backdropZIndex}
        backdropOpacity={backdropOpacity}
        backdropColor={backdropColor}
        renderOnBackdrop={renderOnBackdrop}
      />
    </React.Fragment>
  ) : (
    children
  );

Spotlight.propTypes = {
  isActive: PropTypes.bool,
  backdropZIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backdropOpacity: PropTypes.string,
  backdropColor: PropTypes.string,
  renderOnBackdrop: PropTypes.node,
  inheritParentBackgroundColor: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Spotlight;
