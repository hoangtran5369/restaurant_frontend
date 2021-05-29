import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";


function Footer() {
    return (
        <Box component={Grid} container direction="row" height="20vh" justifyContent="space-between" bgcolor="text.secondary" overflow="hidden">
            <Grid container item xs={5} spacing={1}>
                <Grid item xs={5} component="img" src="https://i.imgur.com/3EgF3Lz.png" />
                <Grid item xs={6}>
                    <Typography variant="h5" component="h2" align="center" gutterBottom>Locations & Hours</Typography>
                    <Typography variant="p" component="p" align="center">Pho28</Typography>
                    <Typography variant="p" component="p" align="center" gutterBottom>1 Washington Sq, San Jose, CA</Typography>
                    <Divider />
                    <Typography variant="p" component="p" align="center">Open: 10:00AM - 10:00PM</Typography>

                </Grid>
            </Grid>

            <Grid item xs={3} container>
                <Box component="p" textAlign="center" alignSelf="flex-end">Copyright@2021 Pho28</Box>
            </Grid>

            <Grid item xs={4} container spacing={2} >
                <Grid item xs={5}>
                    <Box component={Button} variant="contained" fullWidth alignItems="flex-end" marginTop="70%">Call us</Box>
                </Grid>
                <Grid item xs={5}>
                    <Box component={Button} variant="contained" fullWidth alignItems="flex-end" marginTop="70%">Message us</Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;