import React from "react";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import StyledChildWrapper from "./StyledChildWrapper";
import styles from "./styles.css";

const Spotlight = ({
  children,
  isActive,
  label,
  zIndex,
  backdropOpacity,
  backdropColor,
  enableShadow,
  centerLabel,
  labelStyle,
  spotlightStyle,
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
            ...spotlightStyle
          }}
        >
          {child}
        </StyledChildWrapper>
      ))}
      <div
        className={
          centerLabel ? styles.backdrop_content_center : styles.backdrop_content
        }
        style={{
          ...(zIndex && { zIndex }),
          ...labelStyle
        }}
      >
        {label && <div className={styles.render_on_backdrop}>{label}</div>}
      </div>
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
  label: PropTypes.node,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backdropOpacity: PropTypes.string,
  backdropColor: PropTypes.string,
  enableShadow: PropTypes.bool,
  centerLabel: PropTypes.bool,
  labelStyle: PropTypes.object,
  spotlightStyle: PropTypes.object,
  inheritParentBackgroundColor: PropTypes.bool,
};

export default Spotlight;
