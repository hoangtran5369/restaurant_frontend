import {
    Box,
    Button,
    Grid,
    Typography,
    Card,
    CardHeader,
    StepLabel,
    Step,
    Stepper,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
  } from "@material-ui/core";
  import styled from "styled-components";
  import Navbar from "../Navbar";
  import Footer from "../Footer";
  
  const MenuItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
    
  `;
  
  const SelectRow = styled.div`
      display: flex;
      flex-direction: row;
      flex-grow: 4;
      justify-content: space-around;
      align-items: stretch;
      margin-top: 15px;
  `;
  
  const ButtonRow = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 15px;
  `;
  
  
  
  function FindATable( { onFinished }) {
    const steps = ["Find a table", "Your detail"];
    const partySizes = [
      { lable: "1 person", value: 1 },
      { lable: "2 people", value: 2 },
      { lable: "3 people", value: 3 },
      { lable: "4 people", value: 4 },
      { lable: "5 people", value: 5 },
      { lable: "6 people", value: 6 },
    ];
    const dates = [
      { lable: "Jun 21", value: 0 },
      { lable: "Jun 22", value: 1 },
      { lable: "Jun 23", value: 2 },
      { lable: "Jun 24", value: 3 },
      { lable: "Jun 25", value: 4 },
      { lable: "Jun 26", value: 5 },
    ];
    const hours = [
      { lable: "8:00 AM", value: 0 },
      { lable: "10:00 AM", value: 1 },
      { lable: "12:00 PM", value: 2 },
      { lable: "2:00 PM", value: 3 },
      { lable: "4:00 PM", value: 4 },
      { lable: "6:00 PM", value: 5 },
    ];
  
    return (
      <Box  >
        <SelectRow>
                <FormControl variant="outlined"   >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Party size
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={0}
                    onChange={() => {}}
                    label="Party size"
                  >
                    {partySizes.map(({ lable, value }) => {
                      return <MenuItem value={value}> {lable} </MenuItem>;
                    })}
                  </Select>
                </FormControl>
  
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Date
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={0}
                    onChange={() => {}}
                    label="Date"
                  >
                    {dates.map(({ lable, value }) => {
                      return <MenuItem value={value}> {lable} </MenuItem>;
                    })}
                  </Select>
                </FormControl>
  
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Hour
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={0}
                    onChange={() => {}}
                    label="Date"
                  >
                    {hours.map(({ lable, value }) => {
                      return <MenuItem value={value}> {lable} </MenuItem>;
                    })}
                  </Select>
                </FormControl>
                <Button variant="contained"  color="primary">Find a table</Button>
              </SelectRow>
              <ButtonRow>
                  <Button 
                    size="small" variant="contained" color="secondary"
                    onClick={onFinished}
                     >
                      10:00 AM
                  </Button>
                  <Button   
                    size="small" variant="contained" color="secondary"
                    onClick={onFinished}
                     >
                      10:15 AM
                  </Button>
                  <Button 
                    size="small" variant="contained" color="secondary"
                    onClick={onFinished}
                     >
                      10:30 AM
                  </Button>
                  <Button 
                    size="small" variant="contained" color="secondary"
                    onClick={onFinished}
                     >
                      11:00 AM
                  </Button>
              </ButtonRow>
         
        
      </Box>
    );
  }
  
  export default FindATable;
  