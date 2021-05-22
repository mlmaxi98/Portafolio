import { createMuiTheme } from '@material-ui/core'
import pink from '@material-ui/core/colors/pink'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: blue[900],
            //main: pink[500],
        },
    },
})
export default theme