import Navbar from './Navbar';
import { Box, Button, Grid, Card, TextField, FormControl, FormControlLabel, FormGroup, Checkbox, FormLabel } from "@material-ui/core";
import { useState } from 'react';

const FormPart1 = () => (
    <div>
        <Grid container direction="row" component={Box} height="30vh" justify="space-around">
            <Grid item xs={6} component={Button} variant="outlined">Add photo</Grid>
            <Grid item xs={5} container direction="row" justify="flex-start" alignItems="stretch">
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
                <Grid item xs={4} component={Card} variant="outlined"><h3>Photo</h3></Grid>
            </Grid>
        </Grid>

        <Box m={3}>

            <TextField margin="normal" fullWidth label="Item name" name="name" variant="outlined" />
            <TextField margin="normal" fullWidth label="Categories" name="categories" variant="outlined" />
            <TextField margin="normal" multiline rows={7} fullWidth label="Description" name="categories" variant="outlined" />
        </Box>
    </div>
)

const FormPart2 = () => (
    <div>
        <TextField margin="normal" fullWidth label="Price" name="name" variant="outlined" />
        <TextField margin="normal" fullWidth label="Shipping fee" name="categories" variant="outlined" />
        <TextField margin="normal" multiline rows={7} fullWidth label="Description" name="categories" variant="outlined" />
        <FormControl>
            <FormLabel component="legend">Delivery</FormLabel>
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox name="doordash" />}
                    label="Doordash"
                />
                <FormControlLabel
                    control={<Checkbox name="grubhub" />}
                    label="Grubhub"
                />
                <FormControlLabel
                    control={<Checkbox name="ubereats" />}
                    label="Ubereats"
                />
                <FormControlLabel
                    control={<Checkbox name="postmates" />}
                    label="Postmates"
                />
                <FormControlLabel
                    control={<Checkbox name="pickup" />}
                    label="Store pickup"
                />
            </FormGroup>

            <FormLabel component="legend">Payment options</FormLabel>
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox name="doordash" />}
                    label="Cards"
                />
                <FormControlLabel
                    control={<Checkbox name="grubhub" />}
                    label="Paypal"
                />
                <FormControlLabel
                    control={<Checkbox name="ubereats" />}
                    label="Cash"
                />

            </FormGroup>
            <FormLabel component="legend">Scheduled start</FormLabel>
            <TextField margin="normal" fullWidth type="datetime-local" name="start" variant="outlined" />

        </FormControl>
    </div>
)

function MenuItemCreate() {
    const [step, updateStep] = useState(0)


    return (
        <Box minHeight="100vh" flexDirection="column" display="flex">
            <Navbar />
            <Box display="flex" flexDirection="row" justifyContent="center" padding="10px" flexGrow={1}>
                <Box width="60%">
                    <h1>Create a new menu item</h1>

                    {step === 0 ? <FormPart1 /> : <FormPart2 />}

                    <Box display="flex" flexDirection="row-reverse">

                        <Button variant="contained" disabled={step === 1} onClick={() => updateStep(1)}> Next</Button>
                        <Button variant="contained" disabled={step === 0} onClick={() => updateStep(0)}> Previous</Button>
                        <Button variant="contained"> Save as Draft</Button>
                    </Box>
                </Box>


            </Box>

        </Box>
    );
}

export default MenuItemCreate;