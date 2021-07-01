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
  InputBase,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";


const SelectRow = styled.div`
      display: flex;
      flex-direction: row;
      flex-grow: 4;
      justify-content: center;
      margin-top: 2rem;
  `;


const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

const AvailableTimeButton = styled(Button)`
  width: 22%;
`;

const StyledSelect = styled(props => <Select {...props} classes={{root: 'select-root'}}> {props.children} </Select>)`
  & > .select-root{
    color: #673ab7;
    min-width: 100px;


    background: white;
    font-weight: 200;
    padding-top: 14px;
    border: 1px solid rgb(225,225,225);
    padding-left: 24px;
    padding-bottom: 15px;
  }
  `

function FindATable({ onFinished }) {

  const partySizes = [
    { label: "1 person", value: 1 },
    { label: "2 people", value: 2 },
    { label: "3 people", value: 3 },
    { label: "4 people", value: 4 },
    { label: "5 people", value: 5 },
    { label: "6 people", value: 6 },
  ];
  const dates = [
    { label: "Jun 21", value: 0 },
    { label: "Jun 22", value: 1 },
    { label: "Jun 23", value: 2 },
    { label: "Jun 24", value: 3 },
    { label: "Jun 25", value: 4 },
    { label: "Jun 26", value: 5 },
  ];
  const hours = [
    { label: "8:00 AM", value: 0 },
    { label: "10:00 AM", value: 1 },
    { label: "12:00 PM", value: 2 },
    { label: "2:00 PM", value: 3 },

  ];

  return (
    <Box  >
      <SelectRow>
          <StyledSelect
            value={1}
            onChange={() => { }}
            disableUnderline
          >
            {partySizes.map(({ label, value }) => {
              return <MenuItem value={value}> {label} </MenuItem>;
            })}
          </StyledSelect>

          <StyledSelect
            disableUnderline
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={0}
            onChange={() => { }}
            label="Date"
          >
            {dates.map(({ label, value }) => {
              return <MenuItem value={value}> {label} </MenuItem>;
            })}
          </StyledSelect>

          <StyledSelect
            disableUnderline
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={0}
            onChange={() => { }}
            label="Date"
          >
            {hours.map(({ label, value }) => {
              return <MenuItem value={value}> {label} </MenuItem>;
            })}
          </StyledSelect>

        <Button variant="contained" size="small" color="primary">Find a table</Button>
      </SelectRow>

      <ButtonRow>
        {hours.map(hour => (
          <AvailableTimeButton
            variant="outlined"
            onClick={onFinished}
          >
          {hour.label}
          </AvailableTimeButton>)
        )}
       
      </ButtonRow>


    </Box>
  );
}

export default FindATable;
