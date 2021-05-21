import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        //zIndex: 10
    },
    offset: theme.mixins.toolbar,
    title: { flexGrow: 1 },
}))

export const Navbar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Joaquín Maximiliano Cardozo
                    </Typography>
                    <Button variant="outlined" color="secondary">
                        Acerca de mi
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Proyectos
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Contáctame
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    )
}
