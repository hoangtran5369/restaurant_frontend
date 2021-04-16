import Navbar from './Navbar';
import { Box } from "@material-ui/core";
// import MenuIcon from '@material-ui/icons/Menu';


function Home() {
    return (
        <div>
            <Navbar />
            <Box minHeight="100vh" flexDirection="column" display="flex">
                <Box bgcolor="success.main" padding="10px" flexGrow={1}>
                    <h1>Home page</h1>
                </Box>
                <Box height="20vh" bgcolor="text.secondary">

                </Box>
            </Box>
        </div>
    );
}

export default Home;