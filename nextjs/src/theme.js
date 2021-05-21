import { createMuiTheme } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: purple[500]
        }
    }
})
export default theme