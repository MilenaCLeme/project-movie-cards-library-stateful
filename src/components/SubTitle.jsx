import React from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';

class SubTitle extends React.Component {
  render() {
    const { onClickHide } = this.props;

    const iconeLupa = <BiSearchAlt2 />;

    return (
      <div className="sub-title-schear">
        <h2>My awesome movie library</h2>
        <button
          type="submit"
          onClick={ onClickHide }
          className="distancia btn btn-dark"
        >
          { iconeLupa }
        </button>
      </div>
    );
  }
}

SubTitle.propTypes = {
  onClickHide: PropTypes.func.isRequired,
};

export default SubTitle;
