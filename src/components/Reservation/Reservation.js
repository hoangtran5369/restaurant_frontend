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
