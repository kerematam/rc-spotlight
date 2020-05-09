import React from "react";
import PropTypes from "prop-types";

const CreateYOLO = function() {
  let count = 0;
  const wakeArr = [];

  return class YOLO extends React.Component {
    constructor(props) {
      super(props);
    }

    state = {
      shouldMount: false
    };

    setShouldMount = shouldMount => {
      this.setState({ shouldMount });
    };

    componentDidMount() {
      count++;
      if (count === 1) {
        this.setShouldMount(true);
      }
      wakeArr.push(this.setShouldMount);
    }

    componentWillUnmount() {
      count--;
      const index = wakeArr.indexOf(this.setShouldMount);
      if (index > -1) {
        wakeArr.splice(index, 1);
      }
      if (count > 0) {
        wakeArr[0](true);
      }
    }

    render() {
      return this.state.shouldMount && this.props.children;
    }
  };

};

const YOLO = CreateYOLO();

YOLO.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default YOLO;
