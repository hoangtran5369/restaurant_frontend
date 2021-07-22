import { Box, Grid, Typography } from "@material-ui/core";
import styled from 'styled-components'
import Navbar from './Navbar';
import Footer from './Footer';

const MenuItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

function Home() {
    return (
            <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
                <Box padding="10px" flexGrow={1}>
                    <Typography variant="h5" component="h2" gutterBottom>Featured items</Typography>
                    <MenuItemBox>
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/mLEzw1s.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                        <Box component="img" src="https://i.imgur.com/yGeOUMB.jpg" maxHeight="300px" maxWidth="20%" m={1}/>
                    </MenuItemBox>

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