import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import Portal from "./Portal";
import YOLO from "./YOLO";
import StyledChildWrapper from "./StyledChildWrapper";

const Spotlight = ({
  isActive,
  backdropZIndex,
  backdropOpacity,
  backdropColor,
  renderOnBackdrop,
  inheritParentBackgroundColor,
  children
}) => {
  const StyledChildren = () =>
    React.Children.map(children, child => {
      return (
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
      );
    });

  return isActive ? (
    <React.Fragment>
      <StyledChildren />
      <YOLO>
        <Portal>
          <Backdrop
            backdropZIndex={backdropZIndex}
            backdropOpacity={backdropOpacity}
            backdropColor={backdropColor}
            renderOnBackdrop={renderOnBackdrop}
          />
        </Portal>
      </YOLO>
    </React.Fragment>
  ) : (
    children
  );
};

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
