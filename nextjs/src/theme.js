import { createMuiTheme } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: pink[500]
        }
    }
})
export default theme