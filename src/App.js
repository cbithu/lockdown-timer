import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ProgressBar from './components/ProgressBar';

const styles = () => ({
  app: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexGrow: 1
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: "10vh",
    textDecoration: "underline"
  },
  subHeading: {
    color: "#ffffff",
    fontWeight: 500,
    marginBottom: "1vh"
  },
  paperRoot: {
    backgroundColor: "#d3062b",
    padding: "5vh 7vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: "10vh"
  },
  paperRootTwo : {
    backgroundColor: "#d3062b",
    padding: "1vh 2vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "15%",
    marginBottom: "10vh"
  },
  countdownTime : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  countdownTimeVal: {
    color: "#ffffff",
    fontWeight: 900,
  }
});

class App extends React.Component {
  state = {
    day: null,
    hour: null,
    minute: null,
    second: null,
    percentage_complete: null
  }

  componentDidMount() {
    setInterval(() => {
      let date_start = 1584988200000;
      let date_future = 1586888999000;
      let date_now = Date.now();
      let percentage_complete = (((date_now - date_start) / (date_future - date_start)) * 100).toFixed(4);

      let delta = Math.abs(date_future - date_now) / 1000;

      var days = Math.floor(delta / 86400);
      delta -= days * 86400;

      var hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;

      var minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;

      var seconds = Math.round(delta % 60);

      this.setState({
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
        percentage_complete
      })
    }, 1000)
  }

  render() {
    const { classes } = this.props;
    const { day, hour, minute, second, percentage_complete } = this.state;

    return (
      <div className={classes.app}>
        <Typography variant="h1" component="h2" className={classes.heading}>
          INDIA LOCKDOWN TIMER
        </Typography>

        <Typography variant="h4" className={classes.subHeading}>
          Lockdown will be over in ...
        </Typography>

        <Paper elevation={3} className={classes.paperRoot}>
          <div className={classes.countdownTime}>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              {day}
            </Typography>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              days
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              {hour}
            </Typography>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              hrs
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              {minute}
            </Typography>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              mins
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              {second}
            </Typography>
            <Typography variant="h3" className={classes.countdownTimeVal}>
              secs
            </Typography>
          </div>
        </Paper>

        <Typography variant="h4" className={classes.subHeading}>
          Percentage completed ...
        </Typography>

        <Paper elevation={3} className={classes.paperRootTwo}>
          <Typography variant="h3" className={classes.countdownTimeVal}>
            {percentage_complete + " %"}
          </Typography>
        </Paper>

        <ProgressBar percentage={percentage_complete} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
