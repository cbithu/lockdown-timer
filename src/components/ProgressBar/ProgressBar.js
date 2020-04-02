import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    width: "90%",
    marginBottom: "4vh"
  },
  barRoot: {
    height: "7vh",
    borderRadius: "2vh"
  }
};

function ProgressBar(props) {
  const { classes, percentage } = props;
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          root: classes.barRoot
        }}
        color="secondary"
        variant="determinate"
        value={percentage}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  percentage: PropTypes.number
};

export default withStyles(styles)(ProgressBar);
