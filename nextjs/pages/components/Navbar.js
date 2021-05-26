import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(2)
    }
}))

export const Navbar = () => {
    const styles = useStyles()
    return (
        <div className={styles.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        Joaquín Maximiliano Cardozo
                    </Typography>
                    <Button variant="outlined" color="secondary" className={styles.button}>
                        Acerca de mi
                    </Button>
                    <Button variant="outlined" color="secondary" className={styles.button}>
                        Proyectos
                    </Button>
                    <Button variant="outlined" color="secondary" className={styles.button}>
                        Contáctame
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={styles.offset} />
        </div>
    )
}
