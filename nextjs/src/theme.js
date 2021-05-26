import { createMuiTheme } from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors'
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