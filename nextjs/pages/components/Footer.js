import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: [
            'Press Start 2P',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
        fontFamily: [
            'Press Start 2P',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
}))

export const Footer = () => {
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
