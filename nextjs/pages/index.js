import { About, Navbar, Projects } from "./components";
import { makeStyles, useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    //minHeight: '100vh',
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
  },
}));
const index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About />
      <Projects />
      {/* <ContactMe /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default index;
