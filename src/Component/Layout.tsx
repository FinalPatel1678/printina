import React from "react";
import ResponsiveDrawer from "./Drawer";
import Header from "./AppBar";
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider, Typography } from "@material-ui/core";
import Footer from "./Footer";
import DirectionHeader from "./DirectionHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawerHeader: {
      marginTop: 60,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
      [theme.breakpoints.down(600)]: {
        marginTop: 20,
      },
    },
    content: {
      flexGrow: 1,
      marginRight: 0,
      '& div': {
        padding: '0 !important'
      }
    },
  }));
const Layout: React.FC<{}> = ({ children }: React.PropsWithChildren<{}>) => {

  const classes = useStyles();
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography component='div' className='root'>
        <Header />
        <main className={classes.content}>
          <div className={classes.drawerHeader} />
          <DirectionHeader/>
          {children}
          <Footer />
        </main>
        <ResponsiveDrawer />
      </Typography>
    </ThemeProvider>
  )
}
export default Layout;

