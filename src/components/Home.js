import Navbar from './Navbar';
import { Box, Button, Grid, Typography } from "@material-ui/core";
import Footer from './Footer';


function Home() {
    return (
            <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
                <Box padding="10px" flexGrow={1}>
                    <Typography variant="h5" component="h2" gutterBottom>Featured items</Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" spacing="2" padding="10px">
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/mLEzw1s.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                    </Box>

                    <Grid container direction="row" justify="space-around" >
                        <Grid component={Box} minHeight="35vh" item xs={5} bgcolor="text.secondary"></Grid>
                        <Grid component={Box} minHeight="35vh" item xs={5} bgcolor="text.secondary"></Grid>
                    </Grid>

                </Box>

                <Footer/>
            </Box>
    );
}

export default Home;