import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const body = document.body;

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    body.appendChild(this.el);
  }

  componentWillUnmount() {
    body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Portal;
