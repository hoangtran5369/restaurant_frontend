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
import FindATable from "./FindTable";
import CustomerInfo from "./CustomerInfo";
import { useState } from "react";
import { set } from "react-hook-form";

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

function Reservation() {
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

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Box minHeight="100vh" flexDirection="column" display="flex">
      <Navbar />
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        color="text.primary"
      >
        <Box minWidth="300px" maxWidth="400px">
          <Card>
            
            <Stepper activeStep={ currentStep }>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                return (
                  <Step
                    key={label}
                    {...stepProps}
                    onClick={() => setCurrentStep(index)}
                  >
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {currentStep === 0 ? (
              <FindATable onFinished={() => setCurrentStep(1)} />
            ) : (
              <CustomerInfo />
            )}
          </Card>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Reservation;
