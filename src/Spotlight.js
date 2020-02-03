import React from "react";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import StyledChildWrapper from "./StyledChildWrapper";
import styles from "./styles.css";

const Spotlight = ({
  isActive,
  zIndex,
  backdropOpacity,
  backdropColor,
  renderOnBackdrop,
  inheritParentBackgroundColor,
  centerLabel,
  children
}) => isActive ? (
  <React.Fragment>
    {React.Children.map(children, child => (
      <StyledChildWrapper
        inheritParentBackgroundColor={inheritParentBackgroundColor}
        style={{
          ...(zIndex && {
            zIndex: (+zIndex + 1).toString()
          })
        }}
      >
        {child}
      </StyledChildWrapper>
    ))}
    <div
      className={centerLabel ? styles.backdrop_content_center : styles.backdrop_content}
      style={{
        ...(zIndex && { zIndex }),
      }}
    >
      {renderOnBackdrop && (
        <div className={styles.render_on_backdrop}>{renderOnBackdrop}</div>
      )}
    </div>
    <Backdrop
      zIndex={zIndex}
      opacity={backdropOpacity}
      color={backdropColor}
    />
  </React.Fragment>
) : (
      children
    )

Spotlight.propTypes = {
  isActive: PropTypes.bool,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backdropOpacity: PropTypes.string,
  backdropColor: PropTypes.string,
  renderOnBackdrop: PropTypes.node,
  inheritParentBackgroundColor: PropTypes.bool,
  centerLabel: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Spotlight;
