import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ProgressBar from './components/ProgressBar';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = () => ({
  app: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-around",
    height: "100vh"
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: "10vh",
    textDecoration: "underline",
    fontSize: "5vh",
    textAlign: "center",
    whiteSpace: "unset"
  },
  subHeading: {
    color: "#ffffff",
    fontWeight: 500,
    marginBottom: "1vh",
    fontSize: "3vh"
  },
  paperRoot: {
    backgroundColor: "#d3062b",
    padding: "5vh 7vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: "10vh",
    minWidth: "30vh"
  },
  paperRootTwo : {
    backgroundColor: "#d3062b",
    padding: "1vh 2vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "15%",
    marginBottom: "10vh",
    minWidth: "15vh"
  },
  countdownTime : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  countdownTimeVal: {
    color: "#ffffff",
    fontWeight: 900,
    fontSize: "3vh",
    textAlign: "center"
  },
  footer: {
    fontSize: "2vh",
    color: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #ffffff",
    width: "100%"
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
        <Typography className={classes.heading}>
          INDIA LOCKDOWN TIMER
        </Typography>

        <Typography className={classes.subHeading}>
          Lockdown will be over in ...
        </Typography>

        <Paper elevation={3} className={classes.paperRoot}>
          <div className={classes.countdownTime}>
            <Typography className={classes.countdownTimeVal}>
              {day}
            </Typography>
            <Typography className={classes.countdownTimeVal}>
              days
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography className={classes.countdownTimeVal}>
              {hour}
            </Typography>
            <Typography className={classes.countdownTimeVal}>
              hrs
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography className={classes.countdownTimeVal}>
              {minute}
            </Typography>
            <Typography className={classes.countdownTimeVal}>
              mins
            </Typography>
          </div>
          <div className={classes.countdownTime}>
            <Typography className={classes.countdownTimeVal}>
              {second}
            </Typography>
            <Typography className={classes.countdownTimeVal}>
              secs
            </Typography>
          </div>
        </Paper>

        <Typography className={classes.subHeading}>
          Percentage completed ...
        </Typography>

        <Paper elevation={3} className={classes.paperRootTwo}>
          <Typography className={classes.countdownTimeVal}>
            {percentage_complete && percentage_complete + " %"}
          </Typography>
        </Paper>

        <ProgressBar percentage={percentage_complete} />

        <Typography className={classes.footer}>Built with <FavoriteIcon style={{ color: "#d3062b" }} fontSize="small"/> by Chinmay Bithu</Typography>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
