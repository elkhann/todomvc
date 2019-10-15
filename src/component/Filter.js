import React from 'react';

import { connect } from 'react-redux';
import { visibilityFilter } from '../actions';

import { Button } from 'antd';

const Filter = ({ filter, dispatch }) => {
  const isActive = type => {
    if (type === filter) {
      return 'primary';
    }
  };

  return (
    <div>
      <Button.Group>
        <Button
          type={isActive('all')}
          size='large'
          onClick={() => dispatch(visibilityFilter('all'))}
        >
          All
        </Button>
        <Button
          type={isActive('active')}
          size='large'
          onClick={() =>
            dispatch(visibilityFilter('active'))
          }
        >
          Active
        </Button>
        <Button
          type={isActive('done')}
          size='large'
          onClick={() => dispatch(visibilityFilter('done'))}
        >
          Completed
        </Button>
      </Button.Group>
    </div>
  );
};

const mapStateToProps = ({ visibilityFilter }) => {
  return { filter: visibilityFilter };
};

export default connect(mapStateToProps)(Filter);
